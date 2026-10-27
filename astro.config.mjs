import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://tanakaisworking.github.io",
	trailingSlash: "always",
	integrations: [sitemap()],
	// 旧サイト（Fuwari）のURLを新しいページへ転送する
	redirects: {
		"/archive": "/posts/",
		"/about": "/",
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
