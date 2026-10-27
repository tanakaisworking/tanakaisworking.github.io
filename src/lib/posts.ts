import { type CollectionEntry, getCollection } from "astro:content";

export type Post = CollectionEntry<"posts">;

export async function getPosts(): Promise<Post[]> {
	const all = await getCollection("posts", ({ data }) => !data.draft);
	return all.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
}

export const postUrl = (id: string) => `/posts/${id}/`;
export const tagUrl = (tag: string) => `/posts/tags/${encodeURIComponent(tag)}/`;
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const jpDate = (d: Date) => `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;
export const slashDate = (iso: string) => iso.replace(/-/g, "/");

export function tagCounts(posts: Post[]) {
	const map = new Map<string, number>();
	for (const p of posts) for (const t of p.data.tags) map.set(t, (map.get(t) ?? 0) + 1);
	return [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ja"));
}
