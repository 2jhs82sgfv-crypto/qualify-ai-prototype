const KEY="qualify-ai-v01";
const seed={
 qualifications:[
  {id:"mpd2",name:"技能検定 機械・プラント製図 2級",category:"技能検定",format:"○×25問＋四肢択一25問",minutes:100,notes:"学科試験。公式試験細目を基準に学習分野を構成。",subjects:["製図一般・JIS","材料","材料力学一般","溶接一般","関連基礎知識","機械製図法"],status:"学科対策対象"},
  {id:"large",name:"大型特殊免許",category:"運転免許",format:"都道府県・受験条件により確認",minutes:null,notes:"普通免許を所持している場合、神奈川県では大型特殊の学科試験は免除対象。技能試験・教習内容の確認を優先。",subjects:["車両特性","安全確認","走行・操作","法令"],status:"学科免除見込み（神奈川県・普通免許所持）"},
  {id:"otsu4",name:"危険物取扱者 乙種第4類",category:"国家資格",format:"五肢択一35問",minutes:120,notes:"法令・基礎的な物理学及び化学・危険物の性質と火災予防/消火。",subjects:["危険物に関する法令","基礎的な物理学及び基礎的な化学","危険物の性質並びにその火災予防及び消火の方法"],status:"学習対象"},
  {id:"mech-dwg",name:"機械製図（分野別）",category:"専門学習",format:"設定可能",minutes:null,notes:"JIS製図・投影法・寸法記入・公差などを分野別に学習。",subjects:["投影法","線・尺度","寸法記入","幾何公差","表面性状","CAD基礎"],status:"学習対象"}
 ],
 questions:[
  {id:"q1",qual:"mpd2",subject:"製図一般・JIS",kind:"tf",level:"基礎",origin:"AIオリジナル例題",text:"第三角法では、右側面図は正面図の右側に配置する。",choices:["○","×"],answer:0,explain:"第三角法では、各投影図を見る方向側に配置するため、右側面図は正面図の右側に置く。第一角法との配置の違いを整理する。",source:"学習用オリジナル問題。公式過去問ではありません。"},
  {id:"q2",qual:"mpd2",subject:"製図一般・JIS",kind:"multi",level:"基礎",origin:"AIオリジナル例題",text:"図面の尺度が1:2である場合、図面上の長さが30 mmの部分の実際の長さとして正しいものはどれか。",choices:["15 mm","30 mm","60 mm","90 mm"],answer:2,explain:"1:2は図面上1に対して実物2を表す。30×2=60 mm。",source:"学習用オリジナル問題。公式過去問ではありません。"},
  {id:"q3",qual:"mpd2",subject:"材料",kind:"multi",level:"基礎",origin:"AIオリジナル例題",text:"一般に、S45Cの材料記号に含まれる「45」が示す炭素含有量の概略値として最も適切なものはどれか。",choices:["約0.045%","約0.45%","約4.5%","約45%"],answer:1,explain:"S45Cは機械構造用炭素鋼の代表例で、数字は炭素含有量のおおよその中央値を百分率の100倍で表す。規格値の範囲と記号の読み方を併せて確認する。",source:"学習用オリジナル問題。規格改正・材料規格の最新版を確認してください。"},
  {id:"q4",qual:"mpd2",subject:"材料力学一般",kind:"tf",level:"基礎",origin:"AIオリジナル例題",text:"引張荷重を受ける一様断面の棒について、平均垂直応力は荷重を断面積で除して求める。",choices:["○","×"],answer:0,explain:"平均垂直応力σは、軸方向荷重Pを断面積Aで除したσ=P/Aで表す。単位の整合にも注意する。",source:"学習用オリジナル問題。"},
  {id:"q5",qual:"mpd2",subject:"溶接一般",kind:"multi",level:"基礎",origin:"AIオリジナル例題",text:"溶接継手の設計・施工に関する説明として、最も適切なものはどれか。",choices:["溶接記号は図面上で不要である","溶接部の品質は母材の材質に関係しない","溶接方法や継手形状に応じた適切な施工条件が必要である","溶接後の検査は常に不要である"],answer:2,explain:"溶接品質は母材、継手形状、溶接方法、施工条件などの影響を受ける。図面指示と施工・検査の関係を理解する。",source:"学習用オリジナル問題。"},
  {id:"q6",qual:"otsu4",subject:"危険物に関する法令",kind:"multi",level:"基礎",origin:"AIオリジナル例題",text:"危険物乙種第4類の対象となる危険物の性質として正しいものはどれか。",choices:["酸化性固体","引火性液体","自然発火性物質及び禁水性物質","自己反応性物質"],answer:1,explain:"第4類は引火性液体。各類の性質と代表物品を対応させて覚える。",source:"学習用オリジナル問題。消防法令の最新版を確認してください。"},
  {id:"q7",qual:"otsu4",subject:"基礎的な物理学及び基礎的な化学",kind:"multi",level:"基礎",origin:"AIオリジナル例題",text:"一般に、液体の蒸気が燃焼するために必要な条件に関する説明として適切なものはどれか。",choices:["液体そのものだけが必ず燃焼する","可燃性蒸気と空気が燃焼範囲内で混合し、点火源があることが必要","酸素が存在しなくても通常の燃焼が継続する","液温が常に沸点以上でなければ燃焼しない"],answer:1,explain:"燃焼には可燃物、酸素供給源、点火エネルギーが必要。可燃性蒸気濃度が燃焼範囲内にあることも重要。",source:"学習用オリジナル問題。"},
  {id:"q8",qual:"mech-dwg",subject:"寸法記入",kind:"tf",level:"基礎",origin:"AIオリジナル例題",text:"寸法は、原則として図形を見ただけで明らかな寸法であっても、製作に必要な場合は図面上に明確に指示する。",choices:["○","×"],answer:0,explain:"製作・検査に必要な寸法を明確に指示する。重複寸法や不必要な寸法の記入は避け、適用規格に従う。",source:"学習用オリジナル問題。"}
 ],
 history:[]
};
let db=load();
function load(){try{const x=JSON.parse(localStorage.getItem(KEY))||structuredClone(seed);x.pendingReview=x.pendingReview||[];x.referenceQuestions=x.referenceQuestions||[];return x}catch(e){const x=structuredClone(seed);x.pendingReview=[];x.referenceQuestions=[];return x}}
function save(){localStorage.setItem(KEY,JSON.stringify(db))}
let page="home", selectedQual="mpd2", current=[],pos=0,answers=[],showResult=false;
const app=document.getElementById("app");
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function qname(id){return db.qualifications.find(q=>q.id===id)?.name||"不明な資格"}
function nav(){document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===page))}
function render(){
 nav();
 if(page==="home")home(); if(page==="study")study(); if(page==="bank")bank(); if(page==="settings")settings(); if(page==="data")dataPage(); if(page==="ai")aiImportPage();
}
function home(){
 const total=db.questions.length, h=db.history, correct=h.filter(x=>x.correct).length;
 app.innerHTML=`<div class="card"><div class="row"><div><span class="pill">学習ダッシュボード</span><h2>学習を始めましょう</h2><div class="muted">資格を追加しても、問題演習の仕組みは共通です。</div></div><div style="font-size:30px">🎓</div></div><div class="grid" style="margin-top:14px"><div class="tile"><strong>${db.qualifications.length}</strong><span>登録資格</span></div><div class="tile"><strong>${total}</strong><span>登録問題</span></div><div class="tile"><strong>${h.length?Math.round(correct/h.length*100):0}%</strong><span>累計正答率</span></div></div></div>
 <h2>資格を選択</h2><div class="grid">${db.qualifications.map(q=>`<button class="tile" onclick="chooseQual('${q.id}')"><strong>${esc(q.name)}</strong><span>${esc(q.format||"自由設定")}</span><br><span class="pill" style="margin-top:8px">${esc(q.status||"学習対象")}</span></button>`).join("")}</div>
 <div class="card"><h3>現在の学習対象</h3><select id="homeQual">${db.qualifications.map(q=>`<option value="${q.id}" ${q.id===selectedQual?"selected":""}>${esc(q.name)}</option>`).join("")}</select><button class="primary" onclick="startStudy()">この資格の問題を解く</button></div>
 <div class="notice"><b>大型特殊について：</b>普通免許を所持している場合、神奈川県警の免除表では大型特殊の学科試験は免除対象です。実際の受験手続・技能試験要件は申請時点の公式案内で確認してください。</div>`;
}
function chooseQual(id){selectedQual=id;document.getElementById("homeQual").value=id}
function startStudy(){selectedQual=document.getElementById("homeQual")?.value||selectedQual;current=db.questions.filter(q=>q.qual===selectedQual);if(!current.length){alert("この資格にはまだ問題がありません。問題管理から追加してください。");return}current=[...current].sort(()=>Math.random()-.5);pos=0;answers=[];showResult=false;page="study";render()}
function study(){
 if(!current.length){app.innerHTML=`<div class="card"><h2>問題演習</h2><p>ホームから資格を選択して開始してください。</p><button class="primary" onclick="page='home';render()">ホームへ</button></div>`;return}
 if(showResult){let n=answers.filter((a,i)=>a===current[i].answer).length;app.innerHTML=`<div class="card"><span class="pill">演習結果</span><h2>${esc(qname(selectedQual))}</h2><div style="font-size:38px;font-weight:800">${n} / ${current.length}</div><p>正答率 ${Math.round(n/current.length*100)}%</p><div class="progress"><i style="width:${n/current.length*100}%"></i></div><h3 style="margin-top:18px">問題別結果</h3>${current.map((q,i)=>`<p>${i+1}. ${esc(q.subject)}：<b style="color:${answers[i]===q.answer?'var(--green)':'var(--red)'}">${answers[i]===q.answer?'正解':'不正解'}</b></p>`).join("")}<button class="primary" onclick="page='home';render()">ホームに戻る</button> <button class="secondary" onclick="startStudy()">もう一度解く</button></div>`;return}
 const q=current[pos],sel=answers[pos];
 app.innerHTML=`<div class="card"><div class="row"><span class="pill">${esc(q.subject)}</span><span class="muted">${pos+1} / ${current.length}</span></div><div class="progress" style="margin:12px 0"><i style="width:${(pos/current.length)*100}%"></i></div><div class="muted">${esc(qname(selectedQual))} · ${esc(q.level||"標準")} · ${q.kind==="tf"?"○×":"選択式"}</div><h2>${esc(q.text)}</h2>${q.choices.map((c,i)=>`<label class="option"><input type="radio" name="answer" value="${i}" ${sel===i?"checked":""}><span>${esc(c)}</span></label>`).join("")}<div class="row" style="margin-top:16px"><button class="secondary" onclick="prevQ()" ${pos===0?"disabled":""}>戻る</button><button class="primary" onclick="answerNext()">${pos===current.length-1?"採点する":"次へ"}</button></div></div>`;
}
function answerNext(){let v=document.querySelector('input[name="answer"]:checked');if(!v){alert("回答を選択してください");return}answers[pos]=Number(v.value);if(pos<current.length-1){pos++;study()}else{showResult=true;current.forEach((q,i)=>db.history.push({qual:q.qual,question:q.id,correct:answers[i]===q.answer,date:new Date().toISOString()}));save();study()}}
function prevQ(){if(pos>0){pos--;study()}}
function bank(){
 app.innerHTML=`<div class="card"><h2>問題管理</h2><p class="muted">問題の追加・編集・削除ができます。自作問題やAI生成問題を登録してください。</p><label>資格</label><select id="bQual">${db.qualifications.map(q=>`<option value="${q.id}">${esc(q.name)}</option>`).join("")}</select><label>分野</label><input id="bSubject" placeholder="例：製図一般・JIS"><label>問題形式</label><select id="bKind"><option value="tf">○×</option><option value="multi">選択式</option></select><label>問題文</label><textarea id="bText" placeholder="問題文を入力"></textarea><label>選択肢（1行に1つ）</label><textarea id="bChoices" placeholder="○&#10;×"></textarea><label>正解の番号（0から開始）</label><input id="bAnswer" type="number" min="0" value="0"><label>解説</label><textarea id="bExplain" placeholder="正解の根拠・解説"></textarea><label>出典・区分</label><input id="bSource" value="自作問題"><button class="primary" onclick="addQuestion()">問題を保存</button></div>
 <h2>登録済み問題（${db.questions.length}問）</h2>${db.questions.map(q=>`<div class="card"><div class="row"><span class="pill">${esc(q.subject)}</span><span><button class="secondary" onclick="editQuestion('${q.id}')">編集</button> <button class="danger" onclick="deleteQuestion('${q.id}')">削除</button></span></div><b>${esc(q.text)}</b><p class="muted">${esc(qname(q.qual))} · ${esc(q.origin||"登録問題")}</p></div>`).join("")}`;
}
function addQuestion(){const qual=document.getElementById("bQual").value,subject=document.getElementById("bSubject").value.trim(),kind=document.getElementById("bKind").value,text=document.getElementById("bText").value.trim(),choices=document.getElementById("bChoices").value.split("\n").map(x=>x.trim()).filter(Boolean),answer=Number(document.getElementById("bAnswer").value),explain=document.getElementById("bExplain").value.trim();if(!subject||!text||choices.length<2||!Number.isInteger(answer)||answer<0||answer>=choices.length){alert("分野・問題文・2つ以上の選択肢・正解番号を確認してください");return}db.questions.push({id:"q"+Date.now(),qual,subject,kind,level:"未設定",origin:"手動作成",text,choices,answer,explain,source:document.getElementById("bSource").value});save();bank()}
function deleteQuestion(id){if(confirm("この問題を削除しますか？")){db.questions=db.questions.filter(q=>q.id!==id);save();bank()}}
function settings(){
 app.innerHTML=`<div class="card"><h2>資格管理</h2><p class="muted">資格を追加すると、共通の問題エンジンで学習できます。</p><label>資格名</label><input id="qualName" placeholder="例：第二種電気工事士"><label>分類</label><input id="qualCat" placeholder="例：国家資格"><label>試験形式</label><input id="qualFormat" placeholder="例：四肢択一50問"><label>試験時間（分・任意）</label><input id="qualMinutes" type="number" placeholder="例：120"><label>科目（1行に1つ）</label><textarea id="qualSubjects" placeholder="法令&#10;基礎理論"></textarea><button class="primary" onclick="addQual()">資格を追加</button></div>${db.qualifications.map(q=>`<div class="card"><b>${esc(q.name)}</b><p class="muted">${esc(q.category||"")} · ${esc(q.format||"形式未設定")}</p><p>${esc(q.notes||"")}</p></div>`).join("")}`;
}
function addQual(){let name=document.getElementById("qualName").value.trim();if(!name){alert("資格名を入力してください");return}let id="custom"+Date.now();db.qualifications.push({id,name,category:document.getElementById("qualCat").value,format:document.getElementById("qualFormat").value,minutes:Number(document.getElementById("qualMinutes").value)||null,subjects:document.getElementById("qualSubjects").value.split("\n").map(x=>x.trim()).filter(Boolean),notes:"ユーザーが追加した資格。公式試験要項を確認して試験仕様を設定してください。",status:"仕様確認待ち"});save();settings()}
function dataPage(){
 app.innerHTML=`<div class="card"><h2>データ入出力</h2><p>問題集・資格設定・学習履歴をJSONファイルとしてバックアップできます。JSONはバックアップと移行用です。AI資料取込は「AI資料取込」タブから行います。</p><button class="primary" onclick="exportData()">JSONを書き出す</button><label>JSONを読み込む</label><input id="importFile" type="file" accept=".json,application/json"><button class="secondary" onclick="importData()">読み込んで追加・更新</button></div><div class="notice"><b>データ保護：</b>読み込んだJSONは現在のデータに追加されます。大切なデータは、読み込み前にバックアップしてください。</div>`;
}
function aiImportPage(){
 const refs=db.referenceQuestions||[];
 app.innerHTML=`<div class="card"><span class="pill">ChatGPT連携</span><h2>参考問題を登録＋予想問題を生成</h2><p>参考問題のPDF・画像などを選び、ChatGPTへ渡します。ChatGPTが参考問題と予想問題をJSON形式で作成したら、この画面で取り込みます。APIキーやAIサーバーは不要です。</p><label>対象資格</label><select id="aiQual">${db.qualifications.map(q=>`<option value="${q.id}" ${q.id===selectedQual?"selected":""}>${esc(q.name)}</option>`).join("")}</select><label>参考問題の資料（PDF・写真・Wordなど）</label><input id="aiFiles" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.webp,.docx,.xlsx,.xls,.csv,.txt,.md"><label>追加指示（任意）</label><textarea id="aiInstructions" placeholder="例：機械製図2級向け。参考問題の出題傾向を分析し、少し難しめの予想問題を作る"></textarea><button class="primary" onclick="shareReferenceToChatGPT()">ChatGPTに資料を渡す</button><p class="muted">共有シートが開いたらChatGPTを選択してください。共有できない場合は、ChatGPTを開いて資料を添付し、コピーした指示を貼り付けます。</p></div>
 <div class="card"><h2>ChatGPTの結果を取り込む</h2><p>ChatGPTに「指定形式のJSONファイルを作成して」と頼み、作成されたJSONファイルを選択してください。取り込むと参考問題は参考問題集へ、予想問題は問題演習へ自動登録されます。</p><label>ChatGPTが作成したJSON</label><input id="chatgptJson" type="file" accept=".json,application/json"><button class="primary" onclick="importChatGPTResult()">参考問題＋予想問題を登録</button><div id="chatImportStatus" class="muted" style="margin-top:10px"></div></div>
 <div class="card"><div class="row"><h2>登録済み参考問題</h2><span class="pill">${refs.filter(q=>q.qual===selectedQual).length}問</span></div><p class="muted">参考問題は問題演習には混ぜず、予想問題を作るための資料として保存します。</p>${refs.filter(q=>q.qual===selectedQual).slice(-20).reverse().map((q,i)=>`<div class="card"><div class="row"><span class="pill">${esc(q.subject||"分野未分類")}</span><button class="danger" onclick="deleteReferenceQuestion('${q.id}')">削除</button></div><b>${esc(q.text)}</b><p class="muted">${esc(q.source||"参考問題")}</p></div>`).join("")||`<p class="muted">この資格の参考問題はまだ登録されていません。</p>`}</div>
 <div class="card"><h3>生成済み予想問題</h3><p class="muted">予想問題は問題管理から編集・削除できます。</p><b>${db.questions.filter(q=>q.qual===selectedQual&&q.origin==="AI予測問題").length}問</b></div>`;
}
function buildChatGPTPrompt(qual,instructions,files){
 const qnameText=qname(qual);
 const refs=(db.referenceQuestions||[]).filter(q=>q.qual===qual).slice(-80).map(q=>({subject:q.subject,kind:q.kind,text:q.text,choices:q.choices,answer:q.answer,explain:q.explain,source:q.source}));
 return `あなたは資格試験の問題作成アシスタントです。添付した参考問題資料と、下記のアプリ内に登録済み参考問題を分析してください。\n対象資格：${qnameText}\n添付資料：${files.map(f=>f.name).join("、")||"なし"}\n追加指示：${instructions||"参考問題の出題傾向を分析し、重要事項を問う質の高い予想問題を作成する。"}\n\n必ず以下のJSONのみを出力してください。説明文やMarkdownコードフェンスは付けず、可能ならJSONファイルとして作成してください。資料から読み取った実際の参考問題を referenceQuestions に登録し、参考問題の傾向を踏まえた新規の予想問題を predictions に作成してください。参考問題を予想問題として重複させないでください。正解・解説は資料で確認できる内容を優先し、不明な場合は推測せず explain に「要確認」と記載してください。過去問と断定せず、出典情報を記録してください。\n\nJSON形式：\n{\"qualificationId\":\"${qual}\",\"referenceQuestions\":[{\"subject\":\"分野\",\"kind\":\"multi\",\"level\":\"参考\",\"text\":\"問題文\",\"choices\":[\"選択肢\"],\"answer\":0,\"explain\":\"根拠\",\"source\":\"資料名・ページ\"}],\"predictions\":[{\"subject\":\"分野\",\"kind\":\"multi\",\"level\":\"予測\",\"text\":\"新規問題文\",\"choices\":[\"選択肢\"],\"answer\":0,\"explain\":\"解説\",\"source\":\"参考問題からの予測\"}]}\n\nアプリ内参考問題（既存分）：\n${JSON.stringify(refs)}\n\nkind は ○×問題なら tf、選択式なら multi。answer は選択肢の番号を0から数えた整数です。各問題は4択を基本に、○×問題は choices [\"○\",\"×\"] としてください。`;
}
async function shareReferenceToChatGPT(){
 const files=[...(document.getElementById("aiFiles")?.files||[])],qual=document.getElementById("aiQual")?.value||selectedQual,instructions=document.getElementById("aiInstructions")?.value.trim()||"";
 if(!files.length && !(db.referenceQuestions||[]).some(q=>q.qual===qual)){alert("参考問題の資料を選ぶか、先に参考問題を登録してください。");return}
 const prompt=buildChatGPTPrompt(qual,instructions,files);
 try{
  const canShareFiles=files.length && navigator.share && navigator.canShare && navigator.canShare({files});
  if(navigator.share && (!files.length || canShareFiles)){
   const payload={title:"QUALIFY AI 参考問題＋予想問題作成",text:prompt};
   if(canShareFiles)payload.files=files;
   await navigator.share(payload);
   return;
  }
 }catch(e){if(e.name==="AbortError")return;}
 try{await navigator.clipboard.writeText(prompt)}catch(e){}
 window.open("https://chatgpt.com/","_blank","noopener");
 alert("指示文をコピーしました。ChatGPTを開き、資料を添付して指示文を貼り付けてください。");
}
function importChatGPTResult(){
 const file=document.getElementById("chatgptJson")?.files?.[0],status=document.getElementById("chatImportStatus");
 if(!file){alert("ChatGPTが作成したJSONファイルを選択してください。");return}
 const reader=new FileReader();reader.onload=()=>{try{
  const data=JSON.parse(reader.result),qual=data.qualificationId||document.getElementById("aiQual")?.value||selectedQual;
  const incomingRefs=data.referenceQuestions||data.references||[],incomingPreds=data.predictions||[];
  if(!incomingRefs.length&&!incomingPreds.length)throw new Error("referenceQuestions または predictions が見つかりません");
  if(!confirm(`参考問題 ${incomingRefs.length}問、予想問題 ${incomingPreds.length}問を登録しますか？`))return;
  const stamp=Date.now();
  incomingRefs.forEach((q,i)=>{if(!q.text||!Array.isArray(q.choices)||q.choices.length<2)return;db.referenceQuestions.push({...q,id:q.id||`ref${stamp}${i}`,qual,kind:q.kind||"multi",origin:"ChatGPT抽出・参考問題",source:q.source||file.name,createdAt:new Date().toISOString()})});
  incomingPreds.forEach((q,i)=>{if(!q.text||!Array.isArray(q.choices)||q.choices.length<2)return;db.questions.push({...q,id:q.id||`pred${stamp}${i}`,qual,kind:q.kind||"multi",level:q.level||"予測",origin:"AI予測問題",source:q.source||"参考問題からChatGPTが生成",createdAt:new Date().toISOString()})});
  save();status.textContent=`登録しました：参考問題 ${incomingRefs.length}問、予想問題 ${incomingPreds.length}問。`;
  aiImportPage();
 }catch(e){status.textContent="JSONを読み込めませんでした："+e.message;alert(status.textContent)}};reader.readAsText(file);
}
function deleteReferenceQuestion(id){if(confirm("この参考問題を削除しますか？")){db.referenceQuestions=db.referenceQuestions.filter(q=>q.id!==id);save();aiImportPage()}}
function approvePending(i){const q=db.pendingReview[i];if(!q)return;const text=document.getElementById("pendingText"+i).value.trim(),choices=document.getElementById("pendingChoices"+i).value.split("\n").map(x=>x.trim()).filter(Boolean),answer=Number(document.getElementById("pendingAnswer"+i).value),explain=document.getElementById("pendingExplain"+i).value.trim();if(!text||choices.length<2||!Number.isInteger(answer)||answer<0||answer>=choices.length){alert("問題文・選択肢・正解番号を確認してください");return}db.questions.push({...q,id:"src"+Date.now(),text,choices,answer,explain,origin:"資料抽出・確認済み",level:q.level||"未設定"});db.pendingReview.splice(i,1);save();aiImportPage()}
function removePending(i){if(confirm("この抽出問題を破棄しますか？")){db.pendingReview.splice(i,1);save();aiImportPage()}}
function editQuestion(id){const q=db.questions.find(x=>x.id===id);if(!q)return;page="bank";render();document.getElementById("bQual").value=q.qual;document.getElementById("bSubject").value=q.subject||"";document.getElementById("bKind").value=q.kind||"multi";document.getElementById("bText").value=q.text;document.getElementById("bChoices").value=(q.choices||[]).join("\n");document.getElementById("bAnswer").value=q.answer;document.getElementById("bExplain").value=q.explain||"";document.getElementById("bSource").value=q.source||"";document.querySelector('#app .primary').textContent="変更を保存";document.querySelector('#app .primary').onclick=()=>{q.qual=document.getElementById("bQual").value;q.subject=document.getElementById("bSubject").value.trim();q.kind=document.getElementById("bKind").value;q.text=document.getElementById("bText").value.trim();q.choices=document.getElementById("bChoices").value.split("\n").map(x=>x.trim()).filter(Boolean);q.answer=Number(document.getElementById("bAnswer").value);q.explain=document.getElementById("bExplain").value.trim();q.source=document.getElementById("bSource").value;save();bank()}}

function exportData(){let blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="qualify-ai-backup.json";a.click();URL.revokeObjectURL(a.href)}
function importData(){let f=document.getElementById("importFile").files[0];if(!f){alert("JSONファイルを選択してください");return}let r=new FileReader();r.onload=()=>{try{let x=JSON.parse(r.result);if(x.questions)db.questions.push(...x.questions.map(q=>({...q,id:q.id||"imp"+Date.now()+Math.random()})));if(x.referenceQuestions)db.referenceQuestions.push(...x.referenceQuestions.map(q=>({...q,id:q.id||"refimp"+Date.now()+Math.random()})));if(x.qualifications)for(let q of x.qualifications)if(!db.qualifications.some(a=>a.id===q.id))db.qualifications.push(q);if(x.pendingReview)db.pendingReview.push(...x.pendingReview);save();alert("読み込みました");render()}catch(e){alert("JSON形式を確認してください")}};r.readAsText(f)}
document.querySelectorAll("nav button").forEach(b=>b.addEventListener("click",()=>{page=b.dataset.page;render()}));
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  const hadController = !!navigator.serviceWorker.controller;
  let reloadedForUpdate = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!hadController || reloadedForUpdate) return;
    reloadedForUpdate = true;
    location.reload();
  });
  navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).then(registration => {
    registration.update().catch(() => {});
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") registration.update().catch(() => {});
    });
  }).catch(() => {});
}
render();
