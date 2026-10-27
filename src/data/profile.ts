// トップページの内容。ここを書き換えるとトップが変わります。
// 経歴の出どころ：Notion「田中貴士｜職務経歴・実績マスター（ALL）」（2026-10-08 更新版）

export const person = {
	name: "田中 貴士",
	title: "代表取締役 / ヒバチ株式会社",
	handle: "@tanakaisworking",
	bio: [
		"Webメディアからキャリアを始め、ディップでUXデザイナー・PdM、生成AIプロダクトのPOを経験。",
		"いまはヒバチ株式会社の代表として、自社プロダクトと新規事業をつくっています。",
	],
};

export type LinkIcon = "x" | "note" | "github" | "youtube" | "globe" | "instagram" | "facebook" | "card";
// hero: true はトップの丸ボタンにも出す。それ以外はフッターだけ
export const links: { name: string; href: string; icon: LinkIcon; hero?: boolean }[] = [
	{ name: "X", href: "https://x.com/tanakaisworking", icon: "x", hero: true },
	{ name: "note", href: "https://note.com/tanakaisworking", icon: "note", hero: true },
	{ name: "YouTube", href: "https://www.youtube.com/@fly5948", icon: "youtube", hero: true },
	{ name: "GitHub", href: "https://github.com/tanakaisworking", icon: "github", hero: true },
	{ name: "ヒバチ株式会社", href: "https://hibachi-inc.jp/", icon: "globe", hero: true },
	{ name: "Instagram", href: "https://instagram.com/0908tnk", icon: "instagram" },
	{ name: "Facebook", href: "https://www.facebook.com/profile.php?id=100025292162802", icon: "facebook" },
	{ name: "Eight（名刺）", href: "https://8card.net/virtual_cards/XgmYCAuF1KtdVuCdVybEnw", icon: "card" },
];

// 問い合わせ：60分のMTGをカレンダーから予約できる（TimeRex）
export const contactUrl = "https://timerex.net/s/hibachi/95ceef8b/";
export const contactLabel = "MTGを予約する（60分）";

// 「AIに田中貴士について調べてもらう」：プロンプト入りで各AIを開く。
// どれも公式に保証された仕様ではないので、動かなくなったら外す
export const aiPrompt =
	"https://tanakaisworking.github.io/llms.txt と https://tanakaisworking.github.io/ を読んで、田中貴士がどんな人か、経歴・実績・つくっているプロダクトを要約してください。仕事を頼むなら、どんな相談が向いているかも教えてください。";
export const aiLinks = [
	{ name: "ChatGPT", base: "https://chatgpt.com/?q=" },
	{ name: "Claude", base: "https://claude.ai/new?q=" },
	{ name: "Perplexity", base: "https://www.perplexity.ai/search?q=" },
	{ name: "Grok", base: "https://grok.com/?q=" },
].map((a) => ({ name: a.name, href: a.base + encodeURIComponent(aiPrompt) }));

// サイトに載せる note の記事（PdM・UX・企画・生成AI・事業づくりと、マーケの代表作）。
// ここにない記事は「note ですべて見る」から。noteCuratedAt より後に公開した記事は自動で載る
export const noteCuratedAt = "2026-10-26";
export const notePicks = [
	"n66a472f53f25", // Erabo-2B
	"nf375ed7344ff", // なぜ2026年に起業して議事録アプリを作るのか
	"n4dfdd4fdd448", // HR×AI 創業エントリ
	"n3881278e5d3b", // モックでのユーザー検証をやめた方がいい話
	"nf873d58cfe62", // 新米PdMの意思決定のつくりかた
	"nfd7af65aefdb", // プロダクトをパチンコ台と考える KPI
	"nbd013ac31b18", // PO・PdMとして退職までに考えたこと
	"n53a181efe939", // 生成AI組み込みアプリ開発の知見と反省点
	"na58fe08597f1", // 決裁者視点で企画を固める（ROI思考）
	"nc0ad5a569627", // 書籍レコメンドサービスのリリース
	"n6fa81af1a85f", // 広告コピー × 遺伝的アルゴリズム × ChatGPT
	"nbd851355f54b", // プロトタイプ検証したのに使われない機能
	"ne2775cac2cb5", // 仕事で使える初心者Webライティング
	"nc4a46f921b7d", // SQL と Looker Studio でインタビュー対象者を観察
	"nd380fd2630a6", // 新卒PdMの1年目の振り返り
	"n29bebc0b7e90", // 星のカービィとプロダクト開発
	"ndfaee138b6f2", // 営業効率化アプリのプロダクト改善の進め方
	"na9dbb4cf27b2", // 新卒PdMが社内でUXリサーチを学ぶ過程
];
export const isNotePicked = (a: { key: string; date: string }) => notePicks.includes(a.key) || a.date > noteCuratedAt;

// 実績の数字。公開済みの値を優先（動画は 2026-10-26 に YouTube で確認）
export const stats = [
	{ value: "2億円+", title: "年間の外注費削減", desc: "生成AIプロダクト Aipen（PO/PdM）" },
	{ value: "1.6万時間", title: "年間の業務削減", desc: "営業向けCRMの改善企画" },
	{ value: "530万+", title: "動画の累計再生回数", desc: "同じ企画の2本の合計" },
	{ value: "月2万PV", title: "個人メディア", desc: "約3か月でグロース" },
];

export const products = [
	{
		name: "Reki note",
		desc: "会話を文字起こし・議事録として蓄積し、あとから検索・参照できるデスクトップアプリ",
		href: "https://rekinote.app/ja/lp/business/",
		image: "/images/products/reki-note.webp",
		badges: ["Mac", "Windows"],
	},
	{
		name: "ClockClock",
		desc: "業務委託・副業・インターンが1人から使える、無料の打刻・勤怠・請求管理アプリ。利用社数40社以上",
		href: "https://clock-clock.biz/",
		image: "/images/products/clockclock.webp",
		badges: ["Web"],
	},
	{
		name: "Erabo-2B",
		desc: "業務の判断を「任せてよいか・人に確認すべきか」まで含めて返す、日本語の小型判断モデル",
		href: "https://huggingface.co/tanakaisworking/Erabo-2B",
		image: "/images/products/erabo-2b.webp",
		badges: ["Hugging Face", "OSS"],
	},
	{
		name: "Japanese UX Writing Skill",
		desc: "日本語SaaSのUIテキストをAIに書かせるための、UXライティングのスキル",
		href: "https://github.com/tanakaisworking/japanese-ux-writing-skill",
		badges: ["OSS"],
	},
];

export type LogType = "career" | "release" | "article" | "appeared";
export type LogItem = {
	type: LogType;
	label?: string; // Joined / Belonged / Founded / Released / Published / Appeared。省略時は種類ごとの既定
	date: string; // YYYY-MM-DD / YYYY-MM / YYYY
	end?: string; // 期間で出すときの終わり（"現在" も可）
	title: string;
	sub?: string;
	href?: string;
	image?: string;
	external?: boolean;
	badge?: string;
	hidden?: boolean; // トップのログには出さず、llms.txt だけに入れる
};

// トップのログに出す、このサイトの記事（旧ブログから）
export const logPosts = ["spirited-away-phantom-ending", "blog-report-2020-04", "soundpeats-clear-review"];

// トップのログに出す note（本人の考えが出ている記事に絞る）。noteCuratedAt より後の記事は自動で入る
export const noteLogPicks = [
	"nf375ed7344ff", // なぜ2026年に起業して議事録アプリを作るのか
	"n4dfdd4fdd448", // HR×AI 創業エントリ
	"n3881278e5d3b", // モックでのユーザー検証をやめた方がいい話
	"nbd013ac31b18", // PO・PdMとして退職までに考えたこと
	"n53a181efe939", // 生成AI組み込みアプリ開発の知見と反省点
	"nd380fd2630a6", // 新卒PdMの1年目の振り返り
	"n29bebc0b7e90", // 星のカービィとプロダクト開発
];

// 記事以外のログ。経歴の出どころは Notion の職務経歴マスター。顧客案件は社名を出さない
export const manualLog: LogItem[] = [
	{
		type: "release",
		date: "2026-10-19",
		title: "Erabo-2B",
		sub: "業務の判断を「任せてよいか・人に確認すべきか」まで返す日本語の判断モデル。42回の実験から選び、不要な確認を160問中101→29に減らした",
		href: "https://huggingface.co/tanakaisworking/Erabo-2B",
		image: "/images/products/erabo-2b.webp",
		external: true,
	},
	{
		type: "release",
		date: "2026",
		title: "Reki note",
		sub: "会話を文字起こし・議事録として蓄積し、あとから検索・参照できるデスクトップアプリ",
		href: "https://rekinote.app/ja/lp/business/",
		image: "/images/products/reki-note.webp",
		external: true,
	},
	{
		type: "release",
		date: "2026-02",
		title: "Clockインボイス",
		sub: "請求書をPDFではなくURLと構造化データで渡す、請求業務の作り直し",
		hidden: true,
	},
	{
		type: "career",
		date: "2026",
		title: "留学比較サイトの企画・開発（受託）",
		sub: "Webサービスの企画から開発まで",
		hidden: true,
	},
	{
		type: "career",
		date: "2025-11",
		title: "HR新規事業の市場調査と事業設計（支援）",
		sub: "学生・企業・大学への調査とサウンディングから、ビジネスモデル、カスタマージャーニー、5か年計画まで",
		hidden: true,
	},
	{
		type: "appeared",
		date: "2025-02-28",
		title: "年間2億円以上のコスト削減！バイトル原稿作成Copilotで注目される生成AI活用事例「Aipen」チームにインタビュー",
		sub: "ディップ公式（Wantedly）。PO・PdMとして取材を受けました",
		href: "https://www.wantedly.com/companies/dip/post_articles/959072",
		image: "/images/log/aipen-interview.webp",
		external: true,
	},
	{
		type: "career",
		date: "2025-02",
		title: "ワーカー管理SaaSのUXと営業戦略（支援）",
		sub: "実地試験で仮説を確かめてから開発するかを決める進め方で、UXレビューと市場検証",
		hidden: true,
	},
	{
		type: "career",
		label: "Founded",
		date: "2025",
		end: "現在",
		title: "ヒバチ株式会社",
		sub: "代表取締役。自社プロダクトをつくりながら、新規事業の市場調査・事業設計やプロダクト開発を支援",
		href: "https://hibachi-inc.jp/",
		image: "/images/log/hibachi.webp",
		external: true,
	},
	{
		type: "release",
		date: "2023-12",
		title: "ClockClock",
		sub: "業務委託の稼働を記録する打刻アプリ。企画1週間・開発2週間で個人開発し、いまは利用社数40社以上の自社プロダクトに",
		href: "https://clock-clock.biz/",
		image: "/images/products/clockclock.webp",
		external: true,
	},
	{
		type: "career",
		label: "Belonged",
		date: "2022-04",
		end: "2025-01",
		title: "ディップ株式会社",
		sub: "営業向けCRMのUXデザイナーからPdMへ（四半期VP受賞・年約1.6万時間の業務削減）。生成AIプロダクト Aipen の PO/PdM として年間2億円以上の外注費削減",
		image: "/images/log/dip.webp",
	},
	{
		type: "career",
		label: "Belonged",
		date: "2020-10",
		end: "2022-03",
		title: "ディップ株式会社（長期インターン）",
		sub: "AIメディアのポータル化（情報設計・ワイヤー）、SDGsメディアの会員事業、CRMのユーザーインタビュー",
		image: "/images/log/dip.webp",
	},
	{
		type: "career",
		label: "Entered",
		date: "2018-04",
		title: "大学に入学",
		sub: "在学中からWebメディアのSEO・企業サイト制作・RPAの実務に携わる",
		image: "/images/log/university.webp",
	},
	{
		type: "release",
		date: "2017-02-28",
		title: "千と千尋の神隠し 幻のエンディング（日本語タイトル版）",
		sub: "1,314,929 回再生・高評価 6,817",
		href: "https://www.youtube.com/watch?v=gILVEGWQtPQ",
		image: "/images/videos/gILVEGWQtPQ.webp",
		external: true,
	},
	{
		type: "release",
		date: "2017-01-25",
		title: "千と千尋の神隠し 幻のエンディング（Minecraft 再現）",
		sub: "4,022,462 回再生・高評価 29,009",
		href: "https://www.youtube.com/watch?v=YkRXOxEuICI",
		image: "/images/videos/YkRXOxEuICI.webp",
		external: true,
	},
];
