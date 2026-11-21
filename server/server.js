import express from 'express';
import cors from 'cors';
import multer from 'multer';
import mammoth from 'mammoth';
import XLSX from 'xlsx';
import OpenAI, { toFile } from 'openai';
import 'dotenv/config';

const app = express();
const port = Number(process.env.PORT || 8787);
const allowedOrigin = process.env.FRONTEND_ORIGIN || '*';
app.use(cors({ origin: allowedOrigin === '*' ? true : allowedOrigin.split(',').map(x => x.trim()) }));
app.use(express.json({ limit: '2mb' }));
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024, files: 10 } });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const schemaGuide = `次のJSONだけを返してください。Markdownのコードフェンスや前置きは禁止です。
{
 "extractedQuestions": [{"subject":"分野","kind":"tfまたはmulti","level":"基礎/標準/応用","text":"問題文","choices":["選択肢1","選択肢2"],"answer":0,"explain":"根拠と解説","source":"ファイル名・ページ等","confidence":"高/中/低"}],
 "predictions": [{"subject":"分野","kind":"tfまたはmulti","level":"予測","text":"新しく作成した問題文","choices":["選択肢1","選択肢2"],"answer":0,"explain":"正答の根拠・解説","source":"AI生成・アップロード資料を参考","confidence":"高/中/低"}]
}
抽出ルール：資料に実在する問題だけをextractedQuestionsへ。文章が欠けている、正答が資料から特定できない場合は推測せずconfidenceを低にし、explainに要確認と記す。解答が資料にないときはanswerを仮設定せず、answerを-1にしてexplainに「正答要確認」と記す。選択肢は原文の意味を変えない。図表依存の問題は図表を読み取れない場合、その旨を明記する。
予測問題ルール：predictionsは資料の学習範囲を基にした新規オリジナル問題。元資料の文章をそのまま再現しない。公式の出題予告や実際の出題を保証しない。正答は根拠を説明できるものに限定し、曖昧なら生成しない。抽出問題を予測問題に重複登録しない。extractedQuestionsは最大30問、predictionsは最大10問。`;

function ext(name) { return name.toLowerCase().split('.').pop(); }
async function toContent(file, uploadedFiles) {
  const e = ext(file.originalname);
  if (e === 'pdf' || ['jpg','jpeg','png','webp'].includes(e)) {
    const uploaded = await openai.files.create({ file: await toFile(file.buffer, file.originalname), purpose: 'user_data' });
    uploadedFiles.push(uploaded.id);
    if (e === 'pdf') return { type: 'input_file', file_id: uploaded.id };
    return { type: 'input_image', file_id: uploaded.id, detail: 'high' };
  }
  if (e === 'docx') {
    const result = await mammoth.extractRawText({ buffer: file.buffer });
    return { type: 'input_text', text: `【${file.originalname}】\n${result.value.slice(0, 80000)}` };
  }
  if (e === 'xlsx' || e === 'xls') {
    const book = XLSX.read(file.buffer, { type: 'buffer' });
    const text = book.SheetNames.map(name => `【${file.originalname} / ${name}】\n${XLSX.utils.sheet_to_csv(book.Sheets[name])}`).join('\n\n');
    return { type: 'input_text', text: text.slice(0, 80000) };
  }
  if (e === 'csv' || e === 'txt' || e === 'md') {
    return { type: 'input_text', text: `【${file.originalname}】\n${file.buffer.toString('utf8').slice(0, 80000)}` };
  }
  throw new Error(`未対応のファイル形式です: ${file.originalname}`);
}

app.get('/health', (_req, res) => res.json({ ok: true, service: 'QUALIFY AI API' }));
app.post('/api/analyze', upload.array('files', 10), async (req, res) => {
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: 'サーバーにOPENAI_API_KEYが設定されていません。' });
  const files = req.files || [];
  if (!files.length) return res.status(400).json({ error: '資料ファイルを選択してください。' });
  const qualificationId = String(req.body.qualificationId || '');
  const instructions = String(req.body.instructions || '').slice(0, 3000);
  const uploadedFiles = [];
  try {
    const content = [{ type: 'input_text', text: `資格ID: ${qualificationId}\n追加指示: ${instructions || '特になし'}\nアップロード資料を解析し、実在する問題の抽出と新規予測問題の作成を行ってください。\n${schemaGuide}` }];
    for (const file of files) content.push(await toContent(file, uploadedFiles));
    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-6.1-sol',
      input: [{ role: 'user', content }],
      text: { format: { type: 'json_object' } }
    });
    let result;
    try { result = JSON.parse(response.output_text); }
    catch { throw new Error('AIの返答をJSONとして読み取れませんでした。資料を分割して再試行してください。'); }
    const valid = q => q && typeof q.text === 'string' && Array.isArray(q.choices) && Number.isInteger(q.answer) && (q.answer === -1 || (q.answer >= 0 && q.answer < q.choices.length));
    const extractedQuestions = (Array.isArray(result.extractedQuestions) ? result.extractedQuestions : []).filter(valid);
    const predictions = (Array.isArray(result.predictions) ? result.predictions : []).filter(q => valid(q) && q.answer >= 0);
    res.json({ extractedQuestions, predictions, usage: response.usage || null });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || '資料解析中にエラーが発生しました。' });
  } finally {
    for (const id of uploadedFiles) {
      try { await openai.files.delete(id); } catch (e) { console.warn('temporary file cleanup failed', id); }
    }
  }
});

app.listen(port, '0.0.0.0', () => console.log(`QUALIFY AI API listening on ${port}`));
