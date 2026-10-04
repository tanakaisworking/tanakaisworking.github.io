# 検証記録

確認日: 2026-10-05（日本時間）

環境: Node.js 22.22.1 / pnpm 9.14.4 / Chromium 147.0.7727.101 built on Debian GNU/Linux 12 (bookworm)

## 静的検証

- `pnpm check`: 0 errors / 0 warnings / 0 hints
- `pnpm build`: 8 HTMLページ生成。Pagefindは日本語5ページを索引化
- `pnpm verify`: 310件のローカル参照、RSS、サイトマップ、OGP、検索ファイル、下書き除外を確認
- 記事生成: 下書きで作成、既存記事を上書きしない、パス逸脱を拒否
- URL設定: 本番URL・Pagesフォールバック・不正形式の拒否

## ブラウザ確認

- Desktop 1440x1000: homepage and layout pass
- Search: Reki returns results; clearing the input clears results
- Swup navigation: homepage to projects
- Profile, article, and archive load
- Mobile 390x844: no overflow; menu and page navigation work
- Theme: switch and dark preference persist after navigation
- No uncaught browser errors or missing local assets

## 範囲

実際のChromiumで、ローカルの本番ビルドを配信して確認しています。ブラウザ操作にはPlaywrightを使用しました。Cloudflare Pagesへのデプロイ、独自ドメインの接続、Safari/Firefoxでの実機確認、全面的なアクセシビリティ監査は行っていません。

プレビュー画像は `docs/preview/` に保存しています。
