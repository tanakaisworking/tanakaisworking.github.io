// サイトに載っている note の最新記事URL。
// GitHub Actions がこれと note の RSS を比べ、新しい記事があるときだけ作り直す。
import { getNote } from "../lib/note";

export async function GET() {
	const { articles } = await getNote();
	return new Response(articles[0]?.url ?? "", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
