import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts, postUrl } from "../lib/posts";

export async function GET(context: APIContext) {
	const posts = await getPosts();
	return rss({
		title: "田中 貴士",
		description: "プロダクト企画・事業開発の記録",
		site: context.site ?? "https://tanakaisworking.github.io",
		items: posts.map((p) => ({
			title: p.data.title,
			pubDate: p.data.published,
			description: p.data.description,
			link: postUrl(p.id),
		})),
	});
}
