# tanaka. — 田中貴士の個人サイト

公開URL: **https://profile.tanakaisworking.workers.dev**

[Fuwari](https://github.com/saicaca/fuwari) をベースにしています。サイトのUI・ページ構成・検索・記事表示などの実装は、原則としてFuwariのデフォルト構成をそのまま使用しています。

このリポジトリでFuwariから変更している主な内容は次の通りです。

- サイト名、プロフィール、SNSリンク
- テーマカラー: hue **235**
- 田中貴士のプロフィール本文
- 記事コンテンツ
- GitHubプロフィール画像
- 公開先URL

## 公開中の内容

- 「個人サイトをはじめました」
- 「つくっているもの：Reki note」
- 「公開しているOSS：Dot TaskboardとMiftah日本語版」
- プロフィールページ
- 開発ログ用の非公開下書きテンプレート

記事は `src/content/posts/`、プロフィール本文は `src/content/spec/about.md` にあります。

## Cloudflareでビルドする場合

| 項目 | 設定 |
| --- | --- |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Production branch | `main` |

Astroの `site` は `https://profile.tanakaisworking.workers.dev/` に設定済みです。

## ローカル

```sh
pnpm install --frozen-lockfile
pnpm dev
```

本番ビルド:

```sh
pnpm build
```

## ベーステーマ

Fuwari: https://github.com/saicaca/fuwari

Fuwari由来のコードは、元リポジトリのMIT Licenseに従います。
