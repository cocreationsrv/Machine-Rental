/* 共創レンタル ストア 共通スクリプト */

/* ---------------- small utility icons (nav / info / flow) ---------------- */
const ICONS = {
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2l2.2 12.2A2 2 0 0 0 8.2 17h9.6a2 2 0 0 0 2-1.7L21 7H6"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="1.5" y="7" width="12" height="9"/><path d="M13.5 10h4l3 3v3h-7z"/><circle cx="6" cy="18.5" r="1.6"/><circle cx="17" cy="18.5" r="1.6"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9h13v-9"/></svg>`,
  buy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14c3-1 4-3.5 4-6" /><path d="M2 15.5c2.5 3 6 3.5 9 2.2 2-.9 3.3-2 5.5-2.2 2-.2 4 .6 5.5 2" /><path d="M8 8c1.5-2.5 4-4.5 7-4.5 2 4 1 8-2 10" /></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v9l9 5 9-5V8"/><path d="M12 13v9"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4.5 6v6c0 4.5 3 7.5 7.5 9 4.5-1.5 7.5-4.5 7.5-9V6L12 3Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.3 2.3 4.7-4.8"/></svg>`,
  mobile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18h2"/></svg>`,
  gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="9" width="18" height="4"/><rect x="4.5" y="13" width="15" height="8"/><path d="M12 9v12"/><path d="M12 9C10 6 6 6 6 9c0 1.2 1 1.5 2 1.5H12Zm0 0c2-3 6-3 6 0 0 1.2-1 1.5-2 1.5H12Z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5 15 9l7 1-5.2 5 1.3 7-6.1-3.4L5.9 22l1.3-7L2 10l7-1 3-6.5Z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 4.8-6 8-6s6.5 2 8 6"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.2c-.2 0-.4-.06-.55-.18C7.5 17.4 3 13.7 3 9.7 3 7.1 5.1 5 7.7 5c1.7 0 3.2.87 4.3 2.25C13.1 5.87 14.6 5 16.3 5 18.9 5 21 7.1 21 9.7c0 4-4.5 7.7-8.45 10.32-.15.12-.35.18-.55.18Z"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`,
  laptop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4.5" width="16" height="11" rx="1.5"/><path d="M2 19.5h20l-2-4H4Z"/></svg>`,
  headset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="2.5" y="13" width="5" height="7" rx="2"/><rect x="16.5" y="13" width="5" height="7" rx="2"/><path d="M19 20v1a3 3 0 0 1-3 3h-3"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
};

/* ---------------- category metadata ---------------- */
const CATEGORY_META = {
  "美容家電": { key: "beauty", bgFrom: "#FDEEF1", bgTo: "#F8D6DD", accent: "#C6798A" },
  "キッチン家電": { key: "kitchen", bgFrom: "#FFF4E4", bgTo: "#FCE3C0", accent: "#C98A3E" },
  "掃除家電": { key: "cleaning", bgFrom: "#E8F8F6", bgTo: "#CFEFEA", accent: "#028090" },
};
function categoryByKey(key) {
  return Object.keys(CATEGORY_META).find((c) => CATEGORY_META[c].key === key);
}

/* ---------------- prefectures (for delivery estimate demo) ---------------- */
const PREFS = ["東京都", "神奈川県", "大阪府", "愛知県", "北海道", "福岡県"];
const PREF_EXTRA_DAYS = { "北海道": 1, "福岡県": 1 };

/* ---------------- rich product illustrations ---------------- */
const PRODUCT_ART = {
  facial: `
  <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gFacialBody" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#F6D2C2"/><stop offset="1" stop-color="#E3A08C"/>
      </linearGradient>
      <radialGradient id="gFacialHead" cx="0.35" cy="0.3" r="0.8">
        <stop offset="0" stop-color="#F3CE7A"/><stop offset="1" stop-color="#C9932E"/>
      </radialGradient>
    </defs>
    <ellipse cx="120" cy="213" rx="52" ry="9" fill="#0B3D42" opacity=".08"/>
    <rect x="94" y="72" width="52" height="126" rx="26" fill="url(#gFacialBody)"/>
    <rect x="108" y="150" width="24" height="9" rx="4.5" fill="#fff" opacity=".55"/>
    <circle cx="120" cy="56" r="44" fill="url(#gFacialHead)"/>
    <circle cx="120" cy="56" r="27" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="3"/>
    <circle cx="120" cy="56" r="14" fill="#fff" fill-opacity=".3"/>
    <ellipse cx="103" cy="42" rx="10" ry="6" fill="#fff" opacity=".35"/>
  </svg>`,
  dryer: `
  <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gDryerBody" x1="0" y1="0" x2="1" y2="0.3">
        <stop offset="0" stop-color="#FBFCFD"/><stop offset="1" stop-color="#D7DCDF"/>
      </linearGradient>
    </defs>
    <ellipse cx="120" cy="214" rx="58" ry="9" fill="#0B3D42" opacity=".08"/>
    <g transform="rotate(-10 120 110)">
      <path d="M100 178 q-18 14 -4 30" stroke="#0B3D42" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>
      <rect x="93" y="120" width="34" height="78" rx="16" fill="#028090"/>
      <rect x="58" y="72" width="124" height="56" rx="28" fill="url(#gDryerBody)"/>
      <path d="M178 84 h26 a10 10 0 0 1 10 10 v6 a10 10 0 0 1 -10 10 h-26 Z" fill="#8B979E"/>
      <path d="M78 84 q10 16 0 32" stroke="#fff" stroke-width="3" fill="none" opacity=".7" stroke-linecap="round"/>
      <path d="M92 80 q12 20 0 40" stroke="#fff" stroke-width="3" fill="none" opacity=".5" stroke-linecap="round"/>
      <path d="M106 78 q12 22 0 44" stroke="#fff" stroke-width="3" fill="none" opacity=".35" stroke-linecap="round"/>
    </g>
  </svg>`,
  coffee: `
  <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="120" cy="228" rx="60" ry="9" fill="#0B3D42" opacity=".08"/>
    <path d="M96 32 q-5 10 0 20" stroke="#C9D3D4" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M118 26 q-5 12 0 24" stroke="#C9D3D4" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M140 32 q-5 10 0 20" stroke="#C9D3D4" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>
    <rect x="72" y="112" width="58" height="42" rx="8" fill="#454545"/>
    <rect x="62" y="150" width="132" height="58" rx="13" fill="#333333"/>
    <rect x="146" y="164" width="32" height="15" rx="3" fill="#02C39A"/>
    <path d="M92 208 L100 234 Q120 244 143 234 L151 208 Z" fill="#A9DBDD" fill-opacity=".55" stroke="#84C2C6" stroke-width="2"/>
    <path d="M99 214 L104 231 Q120 238 139 231 L144 214 Z" fill="#6F4E37"/>
    <path d="M151 212 q16 4 11 20" stroke="#84C2C6" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`,
  blender: `
  <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="120" cy="230" rx="58" ry="9" fill="#0B3D42" opacity=".08"/>
    <rect x="88" y="44" width="62" height="20" rx="8" fill="#3A3A3A"/>
    <path d="M84 62 L154 62 L140 176 Q120 190 98 176 Z" fill="#C3ECE8" fill-opacity=".6" stroke="#8FCFC9" stroke-width="2.5"/>
    <line x1="93" y1="104" x2="145" y2="104" stroke="#8FCFC9" stroke-width="2.5" opacity=".7"/>
    <line x1="96" y1="136" x2="142" y2="136" stroke="#8FCFC9" stroke-width="2.5" opacity=".7"/>
    <path d="M110 168 l20 0 M120 158 l0 20" stroke="#616161" stroke-width="4.5" stroke-linecap="round"/>
    <rect x="66" y="188" width="108" height="42" rx="13" fill="#3A3A3A"/>
    <circle cx="150" cy="209" r="7" fill="#02C39A"/>
    <circle cx="170" cy="209" r="7" fill="#F2B705"/>
  </svg>`,
  robot: `
  <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="gRobotBody" cx="0.35" cy="0.3" r="0.85">
        <stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#DCE4E4"/>
      </radialGradient>
    </defs>
    <ellipse cx="120" cy="212" rx="62" ry="10" fill="#0B3D42" opacity=".08"/>
    <circle cx="120" cy="120" r="82" fill="url(#gRobotBody)" stroke="#B9C4C6" stroke-width="3"/>
    <circle cx="120" cy="120" r="21" fill="#2B2F31"/>
    <circle cx="120" cy="120" r="9" fill="#02C39A"/>
    <circle cx="187" cy="150" r="11" fill="#EDF2F2" stroke="#B9C4C6" stroke-width="2"/>
    <circle cx="90" cy="66" r="4.5" fill="#B9C4C6"/>
    <circle cx="150" cy="66" r="4.5" fill="#B9C4C6"/>
    <ellipse cx="93" cy="88" rx="36" ry="20" fill="#fff" fill-opacity=".4"/>
  </svg>`,
};

/* ---------------- product catalogue ---------------- */
const PRODUCTS = [
  {
    id: "facial",
    name: "RFエイジングケア美顔器 AURA RF-200",
    tagline: "自宅で叶える、サロン級のハリケア",
    category: "美容家電",
    badge: "人気No.1",
    rating: 4.6,
    reviews: 128,
    ratingBreakdown: [72, 34, 14, 5, 3],
    monthly: 3480,
    monthlySale: 1740,
    saleUntil: "7/13(月)",
    onetime: 5980,
    onetimeNights: "7泊8日",
    newAvailable: true,
    desc: "RF（ラジオ波）とEMSで肌の引き締めケアができる美顔器です。10万円超の高額商品だからこそ、まず試してから決めたいというお声にお応えし、月額1,740円（キャンペーン価格）からレンタルできます。",
    specs: [
      ["カテゴリー", "美容家電 / 美顔器"],
      ["本体重量", "約320g"],
      ["連続使用時間", "約30分（フル充電時）"],
      ["充電時間", "約2時間"],
      ["主な機能", "RF温感・EMS・LEDケア"],
      ["付属品", "専用ポーチ、USB-C充電ケーブル"],
    ],
    reviewsList: [
      { name: "みさと様", date: "2026/06/28", rating: 5, tags: ["性能に満足しました", "また借りたいです"], text: "使い始めて2週間ですが肌のハリが違います。高くて買うのを迷っていたので、レンタルで試せて助かりました。" },
      { name: "匿名様", date: "2026/06/20", rating: 4, tags: ["操作が簡単でした"], text: "操作はシンプルで迷わず使えました。もう少し連続使用時間が長いと嬉しいです。" },
    ],
  },
  {
    id: "dryer",
    name: "大風量マイナスイオンドライヤー AirFlow Pro",
    tagline: "毎日の乾かす時間を、うるツヤ時間に",
    category: "美容家電",
    badge: "NEW",
    rating: 4.3,
    reviews: 256,
    ratingBreakdown: [130, 78, 32, 10, 6],
    monthly: 1980,
    onetime: 3480,
    onetimeNights: "5泊6日",
    newAvailable: true,
    desc: "大風量とマイナスイオンで髪をいたわりながら時短乾燥。引っ越し・単身赴任・帰省時など「その時だけ」使いたい方にも人気のワンタイムプランもご用意しています。",
    specs: [
      ["カテゴリー", "美容家電 / ヘアドライヤー"],
      ["本体重量", "約590g"],
      ["風量", "大風量モード搭載"],
      ["付属品", "セット用ノズル、収納ポーチ"],
      ["主な機能", "マイナスイオン、温度切替"],
    ],
    reviewsList: [
      { name: "匿名様", date: "2026/06/30", rating: 5, tags: ["コスパが良かったです", "また借りたいです"], text: "実家帰省の1週間だけ使いたくてワンタイムプランを利用。乾かす時間が半分になりました。" },
      { name: "K.T様", date: "2026/06/11", rating: 4, tags: ["デザインが良かったです"], text: "見た目もスタイリッシュで気に入っています。音はそれなりにします。" },
    ],
  },
  {
    id: "coffee",
    name: "全自動コーヒーメーカー BeanRoad 700",
    tagline: "豆から挽きたての一杯を、ボタンひとつで",
    category: "キッチン家電",
    badge: null,
    rating: 4.5,
    reviews: 98,
    ratingBreakdown: [58, 26, 9, 3, 2],
    monthly: 2480,
    onetime: 4480,
    onetimeNights: "7泊8日",
    newAvailable: true,
    desc: "豆挽きから抽出まで全自動。毎朝のコーヒーをワンタッチで。買う前に自宅のキッチンに合うか試したい方におすすめです。",
    specs: [
      ["カテゴリー", "キッチン家電 / コーヒーメーカー"],
      ["タンク容量", "約0.6L"],
      ["抽出方式", "全自動ミル内蔵ドリップ式"],
      ["お手入れ", "パーツ取り外し丸洗い対応"],
      ["主な機能", "豆・粉両対応、保温機能"],
    ],
    reviewsList: [
      { name: "コーヒー好き様", date: "2026/06/24", rating: 5, tags: ["性能に満足しました", "コスパが良かったです"], text: "豆から挽ける全自動タイプを試せて大満足。購入前に試せるのは本当にありがたいです。" },
      { name: "匿名様", date: "2026/06/02", rating: 4, tags: ["お手入れが簡単でした"], text: "パーツが外して洗えるので清潔に使えました。音は少し大きめです。" },
    ],
  },
  {
    id: "blender",
    name: "高性能ブレンダー・ミキサー PowerMix S",
    tagline: "凍った果物もなめらかに、あっという間",
    category: "キッチン家電",
    badge: null,
    rating: 4.2,
    reviews: 74,
    ratingBreakdown: [36, 22, 10, 4, 2],
    monthly: 1680,
    onetime: 2980,
    onetimeNights: "5泊6日",
    newAvailable: false,
    desc: "スムージーや離乳食作りに便利な高出力ブレンダー。短期利用や来客時のみのご利用にもワンタイムプランで柔軟に対応します。",
    specs: [
      ["カテゴリー", "キッチン家電 / ブレンダー"],
      ["容量", "約600ml"],
      ["刃素材", "ステンレス4枚刃"],
      ["対応食材", "氷・冷凍フルーツ対応"],
      ["主な機能", "パルス機能、自動停止"],
    ],
    reviewsList: [
      { name: "匿名様", date: "2026/06/15", rating: 4, tags: ["性能に満足しました"], text: "冷凍フルーツもしっかり砕けました。離乳食作りにも重宝しています。" },
      { name: "M.S様", date: "2026/05/29", rating: 4, tags: ["また借りたいです"], text: "来客時だけ使いたかったのでワンタイムプランがちょうど良かったです。" },
    ],
  },
  {
    id: "robot",
    name: "水拭き+吸引ロボット掃除機 CleanBot X2",
    tagline: "吸引も水拭きも、あなたが家にいない間に",
    category: "掃除家電",
    badge: "人気",
    rating: 4.1,
    reviews: 341,
    ratingBreakdown: [150, 95, 55, 25, 16],
    monthly: 3180,
    onetime: null,
    onetimeNights: null,
    newAvailable: true,
    desc: "吸引と水拭きを1台でこなすロボット掃除機。高額な人気機種だからこそ、購入前に使用感を確かめられる月額制プランをご用意しました。",
    specs: [
      ["カテゴリー", "掃除家電 / ロボット掃除機"],
      ["本体寸法", "約33cm×8cm"],
      ["本体重量", "約2.8kg"],
      ["充電時間", "約4時間"],
      ["主な機能", "アプリ連携、水拭き＋吸引"],
    ],
    reviewsList: [
      { name: "つまみ様", date: "2026/07/04", rating: 5, tags: ["性能に満足しました", "また借りたいです"], text: "今までのものとは段違いに静かでスムースに掃除が出来て大変満足しています。" },
      { name: "匿名様", date: "2026/07/01", rating: 4, tags: ["コスパが良かったです"], text: "床が綺麗になって満足。アプリ連携がもう少しスムーズだと嬉しいです。" },
    ],
  },
];

function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}
function relatedProducts(id, count = 3) {
  const cur = getProduct(id);
  return PRODUCTS.filter((p) => p.id !== id)
    .sort((a, b) => (a.category === cur.category ? -1 : 1))
    .slice(0, count);
}
function yen(n) {
  return "¥" + n.toLocaleString("ja-JP");
}
function starRow(rating) {
  const full = Math.round(rating);
  let s = "";
  for (let i = 0; i < 5; i++) {
    s += `<span style="opacity:${i < full ? 1 : 0.25}">${ICONS.star}</span>`;
  }
  return `<span class="stars">${s}</span>`;
}
function ratingBarsHTML(breakdown) {
  const total = breakdown.reduce((a, b) => a + b, 0) || 1;
  const labels = [5, 4, 3, 2, 1];
  return labels
    .map((label, i) => {
      const count = breakdown[i];
      const pct = Math.round((count / total) * 100);
      return `<div class="rbar-row">
        <span class="rbar-label">${label}.0</span>
        <div class="rbar-track"><div class="rbar-fill" style="width:${pct}%"></div></div>
        <span class="rbar-count">${count}件</span>
      </div>`;
    })
    .join("");
}
function reviewCardHTML(r, productName) {
  const initial = r.name.charAt(0);
  return `<div class="review-card">
    <div class="review-head">
      <div class="avatar">${initial}</div>
      <div>
        <div class="review-name">${r.name}</div>
        <div class="review-date">${r.date}${productName ? " ・ " + productName : ""}</div>
      </div>
      <div class="review-stars">${starRow(r.rating)}</div>
    </div>
    <div class="review-tags">${r.tags.map((t) => `<span class="rtag">${t}</span>`).join("")}</div>
    <p class="review-text">${r.text}</p>
  </div>`;
}
function productBadgeHTML(p) {
  if (!p.badge) return "";
  const cls = p.badge.includes("SALE") ? "pbadge-sale" : p.badge.includes("NEW") ? "pbadge-new" : "pbadge-pop";
  return `<span class="pbadge ${cls}">${p.badge}</span>`;
}

/* ---------------- FAQ data ---------------- */
const FAQS = [
  { q: "レンタル料金はいくらですか？", a: "商品によって異なりますが、月額1,680円〜ご利用いただけます。各商品ページで月額制プラン／ワンタイムプランの料金をご確認いただけます。" },
  { q: "最短・最長のレンタル期間はありますか？", a: "ワンタイムプランは最短1泊2日から、月額制プランは最低利用期間の縛りなくご利用いただけます（商品による）。" },
  { q: "レンタルした商品はいつ届きますか？", a: "在庫がある場合、最短で翌日にお届けします。配送手数料は全国一律480円です。" },
  { q: "商品が故障・破損した場合はどうなりますか？", a: "お客様に過失のない故障・破損は費用を一切請求しません。過失がある場合もご負担は都度上限2,000円までです。" },
  { q: "気に入った商品はそのまま購入できますか？", a: "はい。レンタル期間中に気に入れば、マイページから追加料金をお支払いいただくだけでそのままご購入いただけます。" },
  { q: "返却方法を教えてください。", a: "マイページに表示される専用バーコードをコンビニ・宅配ロッカーでご提示いただくだけで返却できます。送り状の準備は不要、返却送料も無料です。" },
];

/* ---------------- header / footer chrome ---------------- */
function headerHTML(active) {
  // matchKey is only truthy for links that represent a distinct page (flow.html).
  // In-page anchors (料金プラン / よくある質問) never get an "active" state since
  // they jump within index.html rather than navigating to a separate page.
  const nav = (href, label, matchKey) =>
    `<a href="${href}" class="${matchKey && active === matchKey ? "active" : ""}">${label}</a>`;
  return `
  <div class="promo-bar">
    <span>${ICONS.bolt} 初回特典：月額制プラン最大3ヶ月<b>50%OFF</b></span>
    <span class="sep">｜</span>
    <span>全国送料込み・返却送料無料</span>
    <span class="sep">｜</span>
    <span>最短翌日お届け</span>
  </div>
  <header class="site-header">
    <div class="header-inner">
      <a class="logo" href="index.html">
        <span class="logo-mark">共</span>
        <span class="logo-word">共創レンタル</span>
      </a>
      <nav class="main-nav">
        <div class="nav-item has-dropdown">
          <span>商品一覧 ${ICONS.chevronDown}</span>
          <div class="dropdown">
            <a href="index.html?cat=beauty">美容家電</a>
            <a href="index.html?cat=kitchen">キッチン家電</a>
            <a href="index.html?cat=cleaning">掃除家電</a>
          </div>
        </div>
        ${nav("flow.html", "ご利用の流れ", "flow")}
        ${nav("index.html#pricing", "料金プラン", null)}
        ${nav("index.html#faq", "よくある質問", null)}
      </nav>
      <form class="header-search" id="header-search-form" role="search">
        <input type="text" placeholder="商品名・カテゴリーで検索" id="search-input" autocomplete="off">
        <button type="submit" aria-label="検索">${ICONS.search}</button>
      </form>
      <div class="header-actions">
        <a class="icon-btn" href="mypage.html" title="マイページ">${ICONS.user}</a>
        <a class="icon-btn cart-icon-btn" href="cart.html" title="カート">
          ${ICONS.cart}<span class="cart-badge" data-cart-badge style="display:none;">0</span>
        </a>
      </div>
    </div>
  </header>`;
}

function footerHTML() {
  return `
  <section class="trust-strip">
    <div class="wrap trust-grid">
      <div class="trust-item">${ICONS.truck}<span>全国送料込み・最短翌日出荷</span></div>
      <div class="trust-item">${ICONS.shield}<span>安心保証つきで気軽にお試し</span></div>
      <div class="trust-item">${ICONS.buy}<span>気に入ればそのまま購入OK</span></div>
      <div class="trust-item">${ICONS.lock}<span>SSL暗号化で安全なお支払い</span></div>
    </div>
  </section>
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <a class="logo footer-logo" href="index.html"><span class="logo-mark">共</span><span class="logo-word">共創レンタル</span></a>
          <p class="footer-desc">美容家電・キッチン家電・掃除家電のレンタル／サブスクサービス。買う前に試せる、新しい家電体験を。</p>
          <div class="footer-social">
            <span class="social-dot">X</span><span class="social-dot">IG</span><span class="social-dot">FB</span>
          </div>
        </div>
        <div>
          <h5>ショップ</h5>
          <ul>
            <li><a href="index.html">商品一覧</a></li>
            <li><a href="index.html?cat=beauty">美容家電</a></li>
            <li><a href="index.html?cat=kitchen">キッチン家電</a></li>
            <li><a href="index.html?cat=cleaning">掃除家電</a></li>
          </ul>
        </div>
        <div>
          <h5>ご利用ガイド</h5>
          <ul>
            <li><a href="flow.html">ご利用の流れ</a></li>
            <li><a href="index.html#pricing">料金プラン</a></li>
            <li><a href="index.html#faq">よくあるご質問</a></li>
            <li><a href="mypage.html">マイページ</a></li>
          </ul>
        </div>
        <div>
          <h5>法人のお客様へ</h5>
          <ul>
            <li><a href="#">まとめて導入のご相談</a></li>
            <li><a href="#">見積書の発行</a></li>
            <li><a href="#">請求書払い対応</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-methods">
        <div class="footer-methods-label">お支払い方法</div>
        <div class="pay-badges">
          <span class="pay-badge">クレジットカード</span>
          <span class="pay-badge">後払い</span>
          <span class="pay-badge">Amazon Pay</span>
          <span class="pay-badge">請求書払い（法人）</span>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="legal-links">
          <a href="legal.html">特定商取引法に基づく表記</a>
          <a href="legal.html#terms">利用規約</a>
          <a href="legal.html#privacy">プライバシーポリシー</a>
        </div>
        <span>© 2026 共創サービス株式会社</span>
      </div>
      <p class="ref-note">本サイトは共創サービス株式会社のご提案用に制作された参考サイトです。実際の注文・決済・配送は発生しません。</p>
    </div>
  </footer>`;
}

function mountChrome(active) {
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.innerHTML = headerHTML(active);
  if (f) f.innerHTML = footerHTML();
  updateCartBadge();

  const form = document.getElementById("header-search-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = document.getElementById("search-input").value.trim();
      location.href = "index.html" + (q ? "?q=" + encodeURIComponent(q) : "");
    });
  }
}

/* ---------------- cart (localStorage, demo only) ---------------- */
const CART_KEY = "kyoso_rental_demo_cart";

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}
function writeCart(items) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch (e) {}
}
function addToCart(item) {
  const cart = readCart();
  cart.push(item);
  writeCart(cart);
  updateCartBadge();
}
function removeFromCart(index) {
  const cart = readCart();
  cart.splice(index, 1);
  writeCart(cart);
}
function clearCart() {
  writeCart([]);
}
function updateCartBadge() {
  const badge = document.querySelector("[data-cart-badge]");
  if (!badge) return;
  const count = readCart().length;
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

/* ---------------- orders (mypage demo) ---------------- */
const ORDER_KEY = "kyoso_rental_demo_orders";
function readOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDER_KEY)) || [];
  } catch (e) {
    return [];
  }
}
function writeOrders(orders) {
  try {
    localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
  } catch (e) {}
}
function seedOrderIfEmpty() {
  const orders = readOrders();
  if (orders.length === 0) {
    orders.push({
      id: "KS-240610-0001",
      productId: "facial",
      planLabel: "月額制プラン",
      price: 1740,
      status: "using",
      orderedAt: "2026-06-10",
    });
    writeOrders(orders);
  }
}

/* ---------------- toast ---------------- */
function showToast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------------- date / calendar helpers (delivery date picker) ---------------- */
const WEEKDAYS_JA = ["日", "月", "火", "水", "木", "金", "土"];
function addDays(d, n) {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}
function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function fmtMD(d) {
  return `${d.getMonth() + 1}/${d.getDate()}(${WEEKDAYS_JA[d.getDay()]})`;
}
function fmtMonthLabel(d) {
  return `${d.getFullYear()}年${d.getMonth() + 1}月`;
}
// Local-calendar-date key (NOT toISOString, which converts to UTC and shifts
// the date by a day in positive-UTC-offset zones like JST — exactly the zone
// this site's users are in).
function isoLocal(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
/**
 * Builds a delivery-date calendar widget (Sun-Sat grid, ~6 weeks) starting from
 * the week containing today. Dates before `earliest` are disabled.
 */
function calendarWidgetHTML(earliest, selected) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const gridStart = addDays(firstOfMonth, -firstOfMonth.getDay());
  const weeks = 6;
  let monthLabel = "";
  let rows = "";
  for (let w = 0; w < weeks; w++) {
    rows += `<tr>`;
    for (let d = 0; d < 7; d++) {
      const day = addDays(gridStart, w * 7 + d);
      if (day.getDate() === 1 || (w === 0 && d === 0)) monthLabel = fmtMonthLabel(day);
      const disabled = day < earliest;
      const isSun = d === 0, isSat = d === 6;
      const isSelected = selected && sameDay(day, selected);
      const cls = [
        "cal-cell",
        disabled ? "disabled" : "",
        isSun ? "sun" : "",
        isSat ? "sat" : "",
        isSelected ? "selected" : "",
      ].filter(Boolean).join(" ");
      rows += `<td>
        <button type="button" class="${cls}" ${disabled ? "disabled" : ""} data-date="${isoLocal(day)}">
          <span class="cal-num">${day.getDate()}</span><span class="cal-dash">${disabled ? "" : "-"}</span>
        </button>
      </td>`;
    }
    rows += `</tr>`;
  }
  return `
    <div class="cal-month-label">${monthLabel}</div>
    <div class="cal-scroll">
      <table class="cal-table">
        <thead><tr>${WEEKDAYS_JA.map((w, i) => `<th class="${i===0?"sun":i===6?"sat":""}">${w}</th>`).join("")}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

/* ---------------- accordion helper ---------------- */
function initAccordions(root = document) {
  root.querySelectorAll(".accordion-item").forEach((item) => {
    const head = item.querySelector(".accordion-head");
    head.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      item.parentElement.querySelectorAll(".accordion-item").forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
