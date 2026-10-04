# このリポジトリを編集するAIへ

田中貴士の個人サイトです。Astro + Fuwariの静的サイトとして維持してください。

- 日常更新はMarkdownと `src/data/projects.ts` で完結させます。不要なバックエンド、CMS、認証、分析SDKを追加しません。
- 本人の実績や意見を創作しません。数値・顧客名・メール・議事録・未公開情報は、公開許可を確認せず掲載しません。
- 新しい記事は原則 `draft: true`。公開は明示指示があるときだけです。非公開GitHubと公開Webの区別に注意します。
- Fuwariの見た目とレスポンシブ表示、ライト／ダーク、キーボード操作を維持します。
- 変更後は `pnpm check`、`pnpm build`、`pnpm verify` を実行します。検索は `pnpm preview` で確認します。
- canonical、RSS、sitemapは `SITE_URL` を使用します。実在しない本番ドメインをハードコードしません。
- CloudflareへのデプロイやGitHub公開設定の変更は、明示依頼がある場合のみ行います。
- upstreamの `LICENSE` と出典を残します。本文にライセンスを勝手に追加しません。
