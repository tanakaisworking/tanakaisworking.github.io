// note の記事とフォロワー数を、ビルド時に note の公開APIから取り込む。
// 取得に失敗してもビルドは止めない（その場合 note の表示だけ消える）。

const CREATOR = "tanakaisworking";
const headers = { "User-Agent": "Mozilla/5.0 (tanakaisworking.github.io build)" };

export type NoteArticle = { key: string; title: string; url: string; date: string; image?: string; likes: number };
export type NoteStats = { followers: number; count: number; likes: number };
type NoteData = { articles: NoteArticle[]; stats: NoteStats | null };

let cache: Promise<NoteData> | undefined;
export const getNote = () => (cache ??= load());

async function getJson(url: string) {
	const res = await fetch(url, { headers });
	if (!res.ok) throw new Error(res.status + " " + url);
	return (await res.json()).data;
}

async function load(): Promise<NoteData> {
	try {
		const creator = await getJson("https://note.com/api/v2/creators/" + CREATOR);
		const articles: NoteArticle[] = [];
		for (let page = 1; page <= 20; page++) {
			const d = await getJson("https://note.com/api/v2/creators/" + CREATOR + "/contents?kind=note&page=" + page);
			for (const c of d.contents) {
				articles.push({
					key: c.key,
					title: c.name,
					url: c.noteUrl,
					date: String(c.publishAt).slice(0, 10),
					image: c.eyecatch ? c.eyecatch + "?width=640" : undefined,
					likes: c.likeCount ?? 0,
				});
			}
			if (d.isLastPage) break;
		}
		articles.sort((a, b) => (a.date < b.date ? 1 : -1));
		const likes = articles.reduce((s, a) => s + a.likes, 0);
		return { articles, stats: { followers: creator.followerCount, count: creator.noteCount, likes } };
	} catch (e) {
		console.warn("[note] 取得できなかったので note の表示を省きます:", e);
		return { articles: [], stats: null };
	}
}
