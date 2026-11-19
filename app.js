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
function load(){try{return JSON.parse(localStorage.getItem(KEY))||structuredClone(seed)}catch(e){return structuredClone(seed)}}
function save(){localStorage.setItem(KEY,JSON.stringify(db))}
let page="home", selectedQual="mpd2", current=[],pos=0,answers=[],showResult=false;
const app=document.getElementById("app");
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function qname(id){return db.qualifications.find(q=>q.id===id)?.name||"不明な資格"}
function nav(){document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===page))}
function render(){
 nav();
 if(page==="home")home(); if(page==="study")study(); if(page==="bank")bank(); if(page==="settings")settings(); if(page==="data")dataPage();
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
 <h2>登録済み問題（${db.questions.length}問）</h2>${db.questions.map(q=>`<div class="card"><div class="row"><span class="pill">${esc(q.subject)}</span><button class="danger" onclick="deleteQuestion('${q.id}')">削除</button></div><b>${esc(q.text)}</b><p class="muted">${esc(qname(q.qual))} · ${esc(q.origin||"登録問題")}</p></div>`).join("")}`;
}
function addQuestion(){const qual=document.getElementById("bQual").value,subject=document.getElementById("bSubject").value.trim(),kind=document.getElementById("bKind").value,text=document.getElementById("bText").value.trim(),choices=document.getElementById("bChoices").value.split("\n").map(x=>x.trim()).filter(Boolean),answer=Number(document.getElementById("bAnswer").value),explain=document.getElementById("bExplain").value.trim();if(!subject||!text||choices.length<2||!Number.isInteger(answer)||answer<0||answer>=choices.length){alert("分野・問題文・2つ以上の選択肢・正解番号を確認してください");return}db.questions.push({id:"q"+Date.now(),qual,subject,kind,level:"未設定",origin:"手動作成",text,choices,answer,explain,source:document.getElementById("bSource").value});save();bank()}
function deleteQuestion(id){if(confirm("この問題を削除しますか？")){db.questions=db.questions.filter(q=>q.id!==id);save();bank()}}
function settings(){
 app.innerHTML=`<div class="card"><h2>資格管理</h2><p class="muted">資格を追加すると、共通の問題エンジンで学習できます。</p><label>資格名</label><input id="qualName" placeholder="例：第二種電気工事士"><label>分類</label><input id="qualCat" placeholder="例：国家資格"><label>試験形式</label><input id="qualFormat" placeholder="例：四肢択一50問"><label>試験時間（分・任意）</label><input id="qualMinutes" type="number" placeholder="例：120"><label>科目（1行に1つ）</label><textarea id="qualSubjects" placeholder="法令&#10;基礎理論"></textarea><button class="primary" onclick="addQual()">資格を追加</button></div>${db.qualifications.map(q=>`<div class="card"><b>${esc(q.name)}</b><p class="muted">${esc(q.category||"")} · ${esc(q.format||"形式未設定")}</p><p>${esc(q.notes||"")}</p></div>`).join("")}`;
}
function addQual(){let name=document.getElementById("qualName").value.trim();if(!name){alert("資格名を入力してください");return}let id="custom"+Date.now();db.qualifications.push({id,name,category:document.getElementById("qualCat").value,format:document.getElementById("qualFormat").value,minutes:Number(document.getElementById("qualMinutes").value)||null,subjects:document.getElementById("qualSubjects").value.split("\n").map(x=>x.trim()).filter(Boolean),notes:"ユーザーが追加した資格。公式試験要項を確認して試験仕様を設定してください。",status:"仕様確認待ち"});save();settings()}
function dataPage(){
 app.innerHTML=`<div class="card"><h2>データ入出力</h2><p>問題集・資格設定をJSONファイルとしてバックアップできます。別端末への移行や、ChatGPTで作成した問題の取り込みにも使えます。</p><button class="primary" onclick="exportData()">JSONを書き出す</button><label>JSONを読み込む</label><input id="importFile" type="file" accept=".json,application/json"><button class="secondary" onclick="importData()">読み込んで追加・更新</button></div><div class="notice"><b>AI連携について：</b>この試作品はAPIキーを内蔵していません。ChatGPTで問題を作成し、所定のJSON形式で書き出してからここで読み込む方式を先に実装しています。API連携は安全なサーバー側でキーを管理する次段階で追加します。</div><div class="card"><h3>JSON形式の例</h3><pre style="white-space:pre-wrap;font-size:11px;background:#f3f6fa;padding:10px;border-radius:8px">{"questions":[{"qual":"mpd2","subject":"材料","kind":"multi","text":"問題文","choices":["A","B","C","D"],"answer":1,"explain":"解説","source":"出典"}]}</pre></div>`;
}
function exportData(){let blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="qualify-ai-backup.json";a.click();URL.revokeObjectURL(a.href)}
function importData(){let f=document.getElementById("importFile").files[0];if(!f){alert("JSONファイルを選択してください");return}let r=new FileReader();r.onload=()=>{try{let x=JSON.parse(r.result);if(x.questions)db.questions.push(...x.questions.map(q=>({...q,id:q.id||"imp"+Date.now()+Math.random()})));if(x.qualifications)for(let q of x.qualifications)if(!db.qualifications.some(a=>a.id===q.id))db.qualifications.push(q);save();alert("読み込みました");render()}catch(e){alert("JSON形式を確認してください")}};r.readAsText(f)}
document.querySelectorAll("nav button").forEach(b=>b.addEventListener("click",()=>{page=b.dataset.page;render()}));
if("serviceWorker" in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(()=>{});
render();
