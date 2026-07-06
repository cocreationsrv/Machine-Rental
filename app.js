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
  "人体用X線": { key: "human", bgFrom: "#EAF3FB", bgTo: "#CFE3F5", accent: "#2E6DA4" },
  "小動物用X線": { key: "smallanimal", bgFrom: "#E8F8F6", bgTo: "#CFEFEA", accent: "#028090" },
  "馬用X線": { key: "equine", bgFrom: "#FBF3E7", bgTo: "#F0DFC0", accent: "#A9762F" },
};
function categoryByKey(key) {
  return Object.keys(CATEGORY_META).find((c) => CATEGORY_META[c].key === key);
}

/* ---------------- prefectures (for delivery estimate demo) ---------------- */
const PREFS = ["東京都", "神奈川県", "大阪府", "愛知県", "北海道", "福岡県"];
const PREF_EXTRA_DAYS = { "北海道": 1, "福岡県": 1 };

/* ---------------- rich product illustrations ---------------- */
const PRODUCT_ART = {
  trb9020h: `
  <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gTrbBody" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#EDEFF1"/><stop offset="1" stop-color="#C7CDD2"/>
      </linearGradient>
      <radialGradient id="gTrbLens" cx="0.35" cy="0.3" r="0.8">
        <stop offset="0" stop-color="#5B7C8C"/><stop offset="1" stop-color="#1F3540"/>
      </radialGradient>
    </defs>
    <ellipse cx="120" cy="214" rx="56" ry="9" fill="#0B3D42" opacity=".08"/>
    <path d="M96 58 q24 -26 48 0" stroke="#8B979E" stroke-width="7" fill="none" stroke-linecap="round"/>
    <rect x="70" y="66" width="100" height="70" rx="16" fill="url(#gTrbBody)"/>
    <rect x="82" y="80" width="34" height="20" rx="4" fill="#0B3D42"/>
    <rect x="86" y="84" width="26" height="4" rx="2" fill="#02C39A"/>
    <rect x="86" y="91" width="18" height="4" rx="2" fill="#5FD6C4" opacity=".7"/>
    <rect x="126" y="82" width="30" height="4" rx="2" fill="#8B979E" opacity=".6"/>
    <rect x="126" y="90" width="30" height="4" rx="2" fill="#8B979E" opacity=".6"/>
    <rect x="126" y="98" width="30" height="4" rx="2" fill="#8B979E" opacity=".6"/>
    <rect x="104" y="136" width="32" height="24" rx="6" fill="#9BA6AC"/>
    <circle cx="120" cy="176" r="30" fill="url(#gTrbLens)"/>
    <circle cx="120" cy="176" r="17" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>
    <circle cx="120" cy="176" r="7" fill="#02C39A" fill-opacity=".85"/>
    <path d="M170 120 q26 6 24 34" stroke="#8B979E" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>
  </svg>`,
  atomscopexhu: `
  <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gHuCase" x1="0" y1="0" x2="1" y2="0.4">
        <stop offset="0" stop-color="#4A5560"/><stop offset="1" stop-color="#2C343B"/>
      </linearGradient>
      <linearGradient id="gHuPanel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#DCE7EA"/><stop offset="1" stop-color="#B7C7CC"/>
      </linearGradient>
    </defs>
    <ellipse cx="120" cy="216" rx="62" ry="9" fill="#0B3D42" opacity=".08"/>
    <rect x="46" y="150" width="150" height="46" rx="10" fill="url(#gHuCase)"/>
    <rect x="54" y="158" width="134" height="6" rx="3" fill="#5B6771" opacity=".7"/>
    <rect x="60" y="46" width="86" height="106" rx="10" fill="url(#gHuPanel)" transform="rotate(-6 103 99)"/>
    <rect x="70" y="58" width="66" height="82" rx="4" fill="#fff" fill-opacity=".35" transform="rotate(-6 103 99)"/>
    <path d="M132 118 h56 l8 34 h-72 Z" fill="#2C343B"/>
    <rect x="140" y="90" width="48" height="34" rx="4" fill="#0B3D42"/>
    <rect x="145" y="95" width="38" height="24" rx="2" fill="#02C39A" fill-opacity=".8"/>
  </svg>`,
  hf200a: `
  <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gHf200Body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#F5F7F7"/><stop offset="1" stop-color="#D3DADC"/>
      </linearGradient>
    </defs>
    <ellipse cx="120" cy="222" rx="58" ry="9" fill="#0B3D42" opacity=".08"/>
    <rect x="66" y="120" width="108" height="92" rx="14" fill="url(#gHf200Body)"/>
    <rect x="80" y="134" width="80" height="26" rx="6" fill="#0B3D42"/>
    <rect x="88" y="140" width="30" height="5" rx="2.5" fill="#02C39A"/>
    <rect x="88" y="150" width="46" height="5" rx="2.5" fill="#8FCFC9" opacity=".7"/>
    <circle cx="150" cy="147" r="8" fill="#02C39A" fill-opacity=".85"/>
    <path d="M174 150 q34 -4 40 -54" stroke="#9BA6AC" stroke-width="7" fill="none" stroke-linecap="round"/>
    <circle cx="214" cy="94" r="15" fill="#5B7C8C"/>
    <circle cx="214" cy="94" r="7" fill="#02C39A" fill-opacity=".8"/>
    <rect x="80" y="212" width="16" height="10" rx="3" fill="#8B979E"/>
    <rect x="144" y="212" width="16" height="10" rx="3" fill="#8B979E"/>
  </svg>`,
  hf400va: `
  <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gHf400Body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#EFF3F3"/><stop offset="1" stop-color="#C7D1D3"/>
      </linearGradient>
    </defs>
    <ellipse cx="120" cy="224" rx="64" ry="9" fill="#0B3D42" opacity=".08"/>
    <rect x="54" y="88" width="132" height="128" rx="16" fill="url(#gHf400Body)"/>
    <rect x="70" y="104" width="100" height="34" rx="7" fill="#0B3D42"/>
    <rect x="80" y="112" width="40" height="6" rx="3" fill="#02C39A"/>
    <rect x="80" y="124" width="60" height="6" rx="3" fill="#8FCFC9" opacity=".7"/>
    <circle cx="150" cy="121" r="9" fill="#02C39A" fill-opacity=".85"/>
    <rect x="70" y="150" width="100" height="46" rx="8" fill="#fff" fill-opacity=".4"/>
    <line x1="80" y1="164" x2="160" y2="164" stroke="#8FCFC9" stroke-width="2.5" opacity=".6"/>
    <line x1="80" y1="178" x2="150" y2="178" stroke="#8FCFC9" stroke-width="2.5" opacity=".6"/>
    <rect x="90" y="216" width="18" height="10" rx="3" fill="#8B979E"/>
    <rect x="132" y="216" width="18" height="10" rx="3" fill="#8B979E"/>
  </svg>`,
  atomscopexeq: `
  <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gEqCase" x1="0" y1="0" x2="1" y2="0.4">
        <stop offset="0" stop-color="#8A6A45"/><stop offset="1" stop-color="#5E4626"/>
      </linearGradient>
      <linearGradient id="gEqShoe" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#C79A5D"/><stop offset="1" stop-color="#8A6A45"/>
      </linearGradient>
    </defs>
    <ellipse cx="120" cy="216" rx="60" ry="9" fill="#0B3D42" opacity=".08"/>
    <path d="M88 44 L88 128 C88 160 172 160 172 128 L172 44"
      fill="none" stroke="url(#gEqShoe)" stroke-width="26" stroke-linecap="round"/>
    <circle cx="88" cy="58" r="5" fill="#4A2F1A"/>
    <circle cx="172" cy="58" r="5" fill="#4A2F1A"/>
    <circle cx="100" cy="150" r="5" fill="#4A2F1A"/>
    <circle cx="160" cy="150" r="5" fill="#4A2F1A"/>
    <rect x="66" y="176" width="108" height="40" rx="10" fill="url(#gEqCase)"/>
    <rect x="76" y="184" width="88" height="6" rx="3" fill="#3E2E18" opacity=".6"/>
    <rect x="104" y="164" width="32" height="16" rx="3" fill="#3E2E18"/>
  </svg>`,
};

/* ---------------- product catalogue ---------------- */
const PRODUCTS = [
  {
    id: "trb9020h",
    name: "ポータブルX線装置 ミカサ TRB9020H",
    tagline: "訪問診療・災害医療の現場へ。国内最小最軽量クラス7.3kg",
    category: "人体用X線",
    badge: "人気No.1",
    rating: 4.7,
    reviews: 86,
    ratingBreakdown: [58, 18, 7, 2, 1],
    monthly: 148000,
    monthlySale: 98000,
    saleUntil: "7/13(月)",
    onetime: 42000,
    onetimeNights: "7泊8日",
    newAvailable: true,
    desc: "バッテリー内蔵で本体重量わずか7.3kg。訪問診療や病院の手術室・ICU、災害医療の現場など、電源のない場所でも高精細な撮影が可能なポータブルX線装置です。数百万円規模の高額機器だからこそ、まず現場で使用感を確かめてから導入をご検討いただけるよう、月額98,000円（キャンペーン価格）からレンタルをご用意しました。",
    specs: [
      ["カテゴリー", "人体用X線装置 / ポータブル型"],
      ["寸法・重量", "L340×W220×H192mm　7.3kg"],
      ["出力・電源", "90kV 15mA 1sec 1,350W　DC57.6V（バッテリー駆動）"],
      ["管電圧", "40kV-90kV（2kVステップ）"],
      ["連続撮影", "1回の充電で約500回撮影可能（撮影条件により変動）"],
      ["付属品", "バッテリー／充電器（ACアダプター付き）／ハンドスイッチ"],
    ],
    reviewsList: [
      { name: "訪問診療クリニック 医師", date: "2026/06/28", rating: 5, tags: ["性能に満足しました", "また借りたいです"], text: "7kg台の軽さで在宅患者様のお宅でもスムーズに撮影できました。導入前にレンタルで現場運用を確認できたのは大きな安心材料でした。" },
      { name: "匿名（病院勤務）", date: "2026/06/15", rating: 4, tags: ["操作が簡単でした"], text: "バッテリー駆動なので停電時の訓練にも活用しています。もう少し連続撮影回数が多いとなお安心です。" },
    ],
  },
  {
    id: "atomscopexhu",
    name: "X線診断システム AtomscopeX-HU",
    tagline: "DRパネル・NRソフト・専用ケースを1セットに",
    category: "人体用X線",
    badge: "NEW",
    rating: 4.5,
    reviews: 42,
    ratingBreakdown: [24, 12, 4, 1, 1],
    monthly: 168000,
    onetime: 58000,
    onetimeNights: "5泊6日",
    newAvailable: true,
    desc: "高い描出力を備えたDRパネルと、ディープラーニング技術による先進のノイズ低減処理「Intelligent NR」、耐衝撃のジェラルミンケースを組み合わせた専用セットです。ポータブルX線装置と組み合わせることで、訪問診療先や病院、災害現場でも確かな画像診断を実現します。",
    specs: [
      ["カテゴリー", "人体用X線装置 / デジタル診断システム"],
      ["セット内容", "DRパネル＆保護ケース／NRソフト搭載パソコン／ジェラルミンケース"],
      ["DRパネル", "CXDI-820CW／CXDI-403CW／CXDI-420CWよりお選びいただけます"],
      ["ノイズ低減処理", "Intelligent NR（従来比 最大約50%のノイズ低減）"],
      ["対応機器", "ポータブルX線装置 TRB9020Hほか"],
    ],
    reviewsList: [
      { name: "救急病院 放射線技師", date: "2026/06/20", rating: 5, tags: ["画質に満足しました"], text: "Intelligent NRのおかげで少ない線量でも鮮明な画像が得られます。まずレンタルで自院の運用に合うか確認できて助かりました。" },
      { name: "匿名（訪問診療）", date: "2026/06/05", rating: 4, tags: ["導入しやすかったです"], text: "専用ケースにまとめて収納できるので持ち運びがしやすいです。" },
    ],
  },
  {
    id: "hf200a",
    name: "動物用X線撮影装置 HF200A+GEN2",
    tagline: "コンパクトボディで高出力。小動物診療のベストセラーモデル",
    category: "小動物用X線",
    badge: "人気",
    rating: 4.6,
    reviews: 134,
    ratingBreakdown: [80, 34, 14, 4, 2],
    monthly: 62000,
    onetime: 24000,
    onetimeNights: "7泊8日",
    newAvailable: true,
    desc: "犬・猫などの小動物診療に最適化された、コンパクトボディながら高出力な動物用X線撮影装置です。照射機と操作パネルが一体型で院内スペースを有効活用でき、開業準備中の動物病院様や繁忙期の増設用としてもご好評をいただいています。",
    specs: [
      ["カテゴリー", "動物医療用X線装置 / 小動物用"],
      ["寸法・重量", "L400×W290×H230mm　16.2kg"],
      ["出力・電源", "AC 単相交流100V　3kVA"],
      ["管電圧", "30kV-100kV（2kVステップ）"],
      ["タイマー", "0.01-2.00sec"],
      ["付属品", "電源コード／ハンドスイッチ／露出スイッチとコード"],
    ],
    reviewsList: [
      { name: "動物病院 院長", date: "2026/07/02", rating: 5, tags: ["性能に満足しました", "また借りたいです"], text: "開業前にレンタルで実機を試せたのは大きな決め手になりました。パネルタッチで操作も簡単です。" },
      { name: "匿名（動物病院勤務）", date: "2026/06/18", rating: 4, tags: ["コンパクトです"], text: "省スペースで診察室に置いても圧迫感がありません。繁忙期の増設用に重宝しています。" },
    ],
  },
  {
    id: "hf400va",
    name: "動物用X線撮影装置 HF400VA",
    tagline: "高出力・大型ボディで院内の本格運用に",
    category: "小動物用X線",
    badge: null,
    rating: 4.3,
    reviews: 51,
    ratingBreakdown: [24, 16, 7, 3, 1],
    monthly: 78000,
    onetime: 28000,
    onetimeNights: "5泊6日",
    newAvailable: false,
    desc: "30kV〜120kVの幅広い管電圧に対応する高出力モデル。中大型の動物病院や複数診療科での本格運用にも対応します。改装期間中の代替機や、繁忙期の一時増強用としてもご利用いただけます。",
    specs: [
      ["カテゴリー", "動物医療用X線装置 / 小動物用（大型）"],
      ["寸法・重量", "L430×W340×H240mm　21.8kg"],
      ["出力・電源", "単相交流200V　4kVA 50/60Hz"],
      ["管電圧", "30-120kV（2kVステップ）"],
      ["管電流", "28mA-100mA"],
      ["付属品", "電源ケーブル(6m)／フットスイッチ"],
    ],
    reviewsList: [
      { name: "匿名（動物病院勤務）", date: "2026/06/10", rating: 4, tags: ["高出力で安心"], text: "大型犬の撮影でも十分な出力で助かっています。改装工事中の代替機として利用しました。" },
      { name: "動物病院 事務", date: "2026/05/22", rating: 4, tags: ["導入がスムーズでした"], text: "レンタルなので繁忙期だけ台数を増やせて便利でした。" },
    ],
  },
  {
    id: "atomscopexeq",
    name: "馬用X線診断システム AtomscopeX-EQ",
    tagline: "競馬場・厩舎での診断に必要なすべてを、ひとつに",
    category: "馬用X線",
    badge: null,
    rating: 4.8,
    reviews: 19,
    ratingBreakdown: [16, 2, 1, 0, 0],
    monthly: 135000,
    onetime: null,
    onetimeNights: null,
    newAvailable: true,
    desc: "高い描出力を備えたDRパネル、Intelligent NRによるノイズ低減処理、耐衝撃のジェラルミンケースを組み合わせた馬用の専用セットです。競馬場や厩舎など、競走馬の診断が求められる現場に確かな画像診断をお届けします。継続的なご利用を想定し、月額制プランのみのご提供です。",
    specs: [
      ["カテゴリー", "動物医療用X線装置 / 馬用"],
      ["セット内容", "DRパネル＆保護ケース／NRソフト搭載パソコン／ジェラルミンケース"],
      ["DRパネル", "CXDI-820CW／CXDI-403CW／CXDI-420CWよりお選びいただけます"],
      ["ノイズ低減処理", "Intelligent NR（従来比 最大約50%のノイズ低減）"],
      ["ご利用シーン", "競馬場・厩舎での定期診断、遠征先での臨時撮影"],
    ],
    reviewsList: [
      { name: "競走馬診療所 獣医師", date: "2026/06/25", rating: 5, tags: ["性能に満足しました", "また借りたいです"], text: "厩舎への持ち運びもしやすく、画質も申し分ありません。遠征先での臨時撮影にも対応できて助かっています。" },
      { name: "匿名（競馬場勤務）", date: "2026/05/30", rating: 5, tags: ["導入しやすかったです"], text: "高額な機材のため購入前にレンタルで運用を確認できたのがありがたかったです。" },
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
  { q: "レンタル料金はいくらですか？", a: "商品によって異なりますが、月額62,000円〜ご利用いただけます。各商品ページで月額制プラン／短期レンタルプランの料金をご確認いただけます。" },
  { q: "最短・最長のレンタル期間はありますか？", a: "短期レンタルプランは最短5泊6日から、月額制プランは最低利用期間の縛りなくご利用いただけます（商品による）。" },
  { q: "レンタルした装置はいつ届きますか？", a: "在庫がある場合、最短で翌日に設置員がお届け・設置いたします。配送・設置手数料は全国一律8,800円です。" },
  { q: "装置が故障・破損した場合はどうなりますか？", a: "お客様に過失のない故障・破損は費用を一切請求しません。過失がある場合もご負担は都度上限20,000円までです。" },
  { q: "気に入った装置はそのまま購入できますか？", a: "はい。レンタル期間中に気に入れば、マイページから追加料金をお支払いいただくだけでそのままご購入いただけます。" },
  { q: "返却方法を教えてください。", a: "マイページから回収希望日を選ぶだけで、スタッフが指定日にご自宅・院内まで引き取りに伺います。梱包・送り状のご用意は不要、引取送料も無料です。" },
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
          <span>製品一覧 ${ICONS.chevronDown}</span>
          <div class="dropdown">
            <a href="index.html?cat=human">人体用X線</a>
            <a href="index.html?cat=smallanimal">小動物用X線</a>
            <a href="index.html?cat=equine">馬用X線</a>
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
          <p class="footer-desc">医療用・動物用X線装置のレンタル／リースサービス。導入前に現場で試せる、新しい設備調達のかたち。</p>
          <div class="footer-social">
            <span class="social-dot">X</span><span class="social-dot">IG</span><span class="social-dot">FB</span>
          </div>
        </div>
        <div>
          <h5>製品</h5>
          <ul>
            <li><a href="index.html">製品一覧</a></li>
            <li><a href="index.html?cat=human">人体用X線</a></li>
            <li><a href="index.html?cat=smallanimal">小動物用X線</a></li>
            <li><a href="index.html?cat=equine">馬用X線</a></li>
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
      productId: "trb9020h",
      planLabel: "月額制プラン",
      price: 98000,
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
