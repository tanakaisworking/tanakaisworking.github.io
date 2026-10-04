import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "tanaka.",
	subtitle: "つくること、考えること。",
	lang: "ja",
	themeColor: {
		hue: 235,
		fixed: false,
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/tanakaisworking",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png",
	name: "田中 貴士",
	bio: "AIとプロダクトをつくる。ヒバチ株式会社代表。",
	links: [
		{
			name: "X",
			icon: "fa6-brands:x-twitter",
			url: "https://x.com/tanakaisworking",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/tanakaisworking",
		},
		{
			name: "ヒバチ株式会社",
			icon: "fa6-solid:globe",
			url: "https://hibachi-inc.jp/",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "",
	url: "",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
