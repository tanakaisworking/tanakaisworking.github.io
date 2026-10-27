// AI エージェント向けの要約（https://llmstxt.org/ の形式）。
// トップと同じデータから作るので、profile.ts を直せばここも変わる。
import { contactUrl, isNotePicked, links, manualLog, person, products, stats } from "../data/profile";
import { getNote } from "../lib/note";
import { getPosts, postUrl } from "../lib/posts";

const SITE = "https://tanakaisworking.github.io";

export async function GET() {
	const posts = await getPosts();
	const note = await getNote();
	const picked = note.articles.filter(isNotePicked);
	// トップに出していない項目（hidden）も含めて、経歴・作ったもの・取材をすべて載せる
	const career = manualLog;
	const allStats = [
		...stats,
		...(note.stats ? [{ value: note.stats.followers + "人", title: "note のフォロワー", desc: note.stats.count + "本・累計" + note.stats.likes.toLocaleString("ja-JP") + "スキ" }] : []),
	];

	const lines = [
		"# " + person.name.replace(" ", "") + "（" + person.handle + "）",
		"",
		"> " + person.title + "。" + person.bio.join(""),
		"",
		"このファイルは、AI が田中貴士について調べるときのための要約です。詳しくは " + SITE + "/ を参照してください。",
		"",
		"## 実績の数字",
		"",
		...allStats.map((s) => "- " + s.value + "：" + s.title + "（" + s.desc + "）"),
		"",
		"## つくっているもの",
		"",
		...products.map((p) => "- [" + p.name + "](" + p.href + ")：" + p.desc),
		"",
		"## 経歴（新しい順）",
		"",
		...career.map((c) => "- " + c.date + (c.end ? "〜" + c.end : "") + "：" + c.title + (c.sub ? "。" + c.sub : "") + (c.href ? "（" + c.href + "）" : "")),
		"",
		"## このサイトの記事",
		"",
		...posts.map((p) => "- [" + p.data.title + "](" + SITE + postUrl(p.id) + ")" + (p.data.description ? "：" + p.data.description : "")),
		"",
		"## note の記事（抜粋）",
		"",
		...picked.map((a) => "- [" + a.title + "](" + a.url + ")（" + a.date + "）"),
		"",
		"## 連絡・リンク",
		"",
		"- 相談：[MTGを予約する（60分）](" + contactUrl + ")",
		...links.map((l) => "- [" + l.name + "](" + l.href + ")"),
		"",
	];
	return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
