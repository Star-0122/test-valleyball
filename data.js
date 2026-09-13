/* =========================================================
   data.js
   善通寺市ジュニアバレーボールクラブ 公式サイト コンテンツデータ

   ★ このファイルが「サイトの中身」です。
   　 admin.html で編集して「data.jsをダウンロード」すると、
   　 このファイルと同じ形式のファイルが書き出されます。
   　 それをGitHub上の data.js に上書きアップロードすれば
   　 サイトの内容が更新されます。

   直接このファイルを手で編集しても構いません（普通のテキストです）。
   ========================================================= */

/* ---- 基本設定・リンク先 ---- */
const CONFIG = {
  teamName: "善通寺市ジュニアバレーボールクラブ",
  instagramUrl: "https://www.instagram.com/", // 【後から入力】
  googleMapsUrl: "", // 【後から入力】体育館のGoogleマップURL
  applyFormUrl: "", // 【後から入力】見学・体験申込用Googleフォーム
  contactFormUrl: "", // 【後から入力】お問い合わせ用Googleフォーム
  contactEmail: "", // 【後から入力】example@zentsuji-volley.jp
  venueName: "【後から入力】体育館",
  venueAddress: "香川県善通寺市【後から入力】",
  joinTime: "【後から入力】（例：毎週土・日 9:00〜12:00）",
};

/* ---- プレースホルダー画像生成（実写真が用意できるまでの仮画像） ---- */
function placeholderImg(seedText, c1, c2){
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="450">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${c1}"/>
          <stop offset="1" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <rect width="600" height="450" fill="url(#g)"/>
      <circle cx="470" cy="90" r="70" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="4"/>
      <path d="M60 380c60-60 90-140 60-260M300 220h300" stroke="rgba(255,255,255,.18)" stroke-width="6" fill="none"/>
      <text x="30" y="420" font-family="sans-serif" font-size="20" fill="rgba(255,255,255,.75)">${seedText}</text>
    </svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

/* ---- お知らせ ---- */
const NEWS_CATS = {
  "お知らせ":"#6b6b68","大会":"#E12420","練習":"#FF7A1A","イベント":"#9C1712","体験会":"#E12420","募集":"#FF7A1A"
};
const newsData = [
  {title:"新入部員 見学・体験会のお知らせ", date:"2026-09-01", cat:"体験会", img:placeholderImg("体験会","#E12420","#FF7A1A")},
  {title:"香川県ジュニア大会 出場結果を掲載しました", date:"2026-08-20", cat:"大会", img:placeholderImg("大会結果","#9C1712","#E12420")},
  {title:"夏季練習スケジュールを更新しました", date:"2026-08-05", cat:"練習", img:placeholderImg("練習","#1c1c1c","#3a1512")},
  {title:"新チーム発足のお知らせ", date:"2026-04-10", cat:"お知らせ", img:placeholderImg("お知らせ","#3a1512","#1c1c1c")},
  {title:"体験参加の募集を開始しました", date:"2026-03-15", cat:"募集", img:placeholderImg("募集","#FF7A1A","#E12420")},
];

/* ---- チームの特徴 ---- */
const features = [
  {icon:"🏐",title:"バレーボールを楽しむ",text:"技術だけでなく、プレーする楽しさを何より大切にしています。"},
  {icon:"🔥",title:"本気で挑戦する",text:"目標に向かって、最後まで諦めずに挑戦する姿勢を育てます。"},
  {icon:"🤝",title:"仲間と協力する",text:"チームプレーを通じて、支え合う心を育みます。"},
  {icon:"💪",title:"心と体を鍛える",text:"基礎体力・運動能力の向上とともに、強い心を育てます。"},
  {icon:"🌱",title:"一人ひとりの成長を大切に",text:"学年・経験に応じた指導で、それぞれのペースを尊重します。"},
  {icon:"😊",title:"初心者も大歓迎",text:"バレーボールが初めての子も安心して始められます。"},
];

/* ---- 選手紹介（学年別・公開/非公開） ---- */
const grades = ["小学6年生","小学5年生","小学4年生","小学3年生","小学2年生","小学1年生","年長"];
const members = [
  // {name:"", grade:"小学6年生", number:"", position:"", isPublic:false, photo:""}
  // 実データが揃うまでは空の状態で構いません（架空データは作成しません）
];

/* ---- 活動予定 ---- */
const scheduleTypes = {
  "練習":{color:"#1c1c1c",icon:"🏐"}, "大会":{color:"#E12420",icon:"🏆"},
  "練習試合":{color:"#FF7A1A",icon:"🤝"}, "イベント":{color:"#9C1712",icon:"🎪"},
  "体験会":{color:"#E12420",icon:"⭕"}, "休み":{color:"#a9a59e",icon:"ー"}
};
const scheduleData = [
  {date:"2026-09-20",day:"日",type:"体験会",title:"見学・体験会",place:"【後から入力】体育館",note:""},
  {date:"2026-09-23",day:"水祝",type:"練習",title:"通常練習",place:"【後から入力】体育館",note:"19:00〜21:00"},
  {date:"2026-09-27",day:"日",type:"練習試合",title:"○○ジュニアと練習試合",place:"【後から入力】",note:""},
  {date:"2026-10-04",day:"日",type:"大会",title:"香川県ジュニア大会 予選",place:"【後から入力】",note:"詳細は後日"},
];

/* ---- 大会・試合結果 ---- */
const matchData = [
  {
    name:"香川県ジュニアバレーボール大会",date:"2026-07-中旬",place:"【後から入力】",
    sets:[
      {round:"予選",vs:"○○ジュニア",score:"2 - 0"},
      {round:"準決勝",vs:"△△ジュニア",score:"2 - 1"},
      {round:"決勝",vs:"□□ジュニア",score:"1 - 2"},
    ],
    result:"準優勝",
    comment:"接戦の連続でしたが、最後まで諦めずに声を出し続けた選手たちの成長を感じられる大会になりました。",
  },
];

/* ---- 活動写真（アルバム名 → 画像URLの配列） ---- */
const albums = {
  "2026 練習風景": [1,2,3,4,5,6].map(i=>placeholderImg("練習 "+i,"#1c1c1c","#3a1512")),
  "2026 大会": [1,2,3,4].map(i=>placeholderImg("大会 "+i,"#E12420","#9C1712")),
  "2026 体験会": [1,2,3].map(i=>placeholderImg("体験会 "+i,"#FF7A1A","#E12420")),
};
