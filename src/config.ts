import type { ExpressiveCodeConfig, LicenseConfig, NavBarConfig, ProfileConfig, SiteConfig } from './types/config';

export const siteMetadata = {
  description: '田中貴士の個人サイト。AIとプロダクト開発、つくっているもの、日々の試行錯誤を記録します。',
  socialImage: '/og.png',
};

export const siteConfig: SiteConfig = {
  title: 'tanaka.',
  subtitle: 'つくること、考えること。',
  lang: 'ja',
  themeColor: { hue: 155, fixed: false },
  banner: {
    enable: false,
    src: 'assets/images/avatar.png',
    position: 'center',
    credit: { enable: false, text: '', url: '' },
  },
  toc: { enable: true, depth: 2 },
  favicon: [{ src: '/favicon.svg', sizes: 'any' }],
};

export const navBarConfig: NavBarConfig = {
  links: [
    { name: '記事', url: '/' },
    { name: '取り組み', url: '/projects/' },
    { name: 'プロフィール', url: '/about/' },
    { name: 'アーカイブ', url: '/archive/' },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.png',
  name: '田中 貴士',
  bio: 'AIとプロダクトをつくる。ヒバチ株式会社代表。',
  links: [
    { name: 'X', icon: 'fa6-brands:x-twitter', url: 'https://x.com/tanakaisworking' },
    { name: 'GitHub', icon: 'fa6-brands:github', url: 'https://github.com/tanakaisworking' },
    { name: 'ヒバチ株式会社', icon: 'fa6-solid:globe', url: 'https://hibachi-inc.jp/' },
  ],
};

// Source code retains Fuwari's MIT license; personal writing is not automatically CC-licensed.
export const licenseConfig: LicenseConfig = { enable: false, name: '', url: '' };
export const expressiveCodeConfig: ExpressiveCodeConfig = { theme: 'github-dark' };
