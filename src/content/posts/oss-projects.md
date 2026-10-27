---
title: 作っているもの・公開しているもの
published: 2026-10-05
description: 完成品と試作に分けて、公開しているプロダクトやOSSをまとめます。
tags: [OSS, AI, MCP, プロダクト開発]
category: つくっているもの
draft: false
lang: ja
---

公開しているものを、**完成品**と**試作**に分けてまとめます。

## 完成品

### Reki note

[Reki note](https://rekinote.app/ja/lp/business/) は、会話を文字起こし・議事録として蓄積し、あとから検索・参照できるデスクトップアプリです。

会議ツールごとに記録を分断せず、会話の履歴をまとめて扱える場所を目指しています。

### Japanese UX Writing Skill

[Japanese UX Writing Skill](https://github.com/tanakaisworking/japanese-ux-writing-skill) は、日本語SaaSのUIテキストをAIに書かせるためのルールセットです。

「コンポーネント種別 × シーン」の2軸で、ボタン、エラー、確認ダイアログ、空状態などの文字数やトーンを定義しています。Claude CodeのSkillやシステムプロンプトとしてそのまま使えます。

### Secret Manager（スキル）

[Secret Manager](https://github.com/tanakaisworking/secret-manager) は、AIコーディングアシスタントにAPIキーやトークンそのものを渡さず、**秘密情報の名前と用途だけをAIに見せて使わせる**ためのローカルスキルです。

実際の値は人間がローカルのTerminalに入力し、1回だけ子プロセスへ渡したり、期限付きのメモリ内セッションとして保持したりできます。

## 試作

### mikan chat

[mikan chat](https://github.com/tanakaisworking/mikan-chat) は、シナリオの中の一人としてAIキャラクターと会話する、無料・オープンソースのAIチャットアプリの試作です。

1対1だけでなく複数キャラクターの物語を扱え、シナリオは持ち運べる `.mikanchat` 形式のChat Packとして作成・共有できます。Web Early Accessも公開しています。

- [ブラウザで試す](https://mikanchat.mikan-chat.workers.dev/)
- [GitHub](https://github.com/tanakaisworking/mikan-chat)

### Dot Taskboard

[Dot Taskboard](https://github.com/tanakaisworking/dot-taskboard) は、タスクと「次の一手」をまとめるMCP対応タスクワークスペースの試作です。

List / Kanban / Project / Activity の表示に加えてMCPインターフェースを持ち、AIからも人からも同じタスクを扱えるようにしています。

### readapp

[readapp](https://github.com/tanakaisworking/readapp) は、PC上の通知を取得し、ローカルAIでキャラクター口調に変換してTTSで読み上げる常駐アプリの試作です。

Tauri 2 + Rustを軸に、macOS / Windowsの通知取得の違いをネイティブ側に閉じ込める設計です。

### Parallel Insight

[Parallel Insight](https://github.com/tanakaisworking/parallel-insight-lp) は、CSVだけで施策前後のデータを読み込み、「施策を打たなかった場合」を予測して実績との差分を見る分析プロダクトの試作です。

公開repoはLPで、コード不要・ローカル完結で施策効果を見るというアイデアを形にしています。

### Miftah 日本語版

[Miftah 日本語版](https://github.com/tanakaisworking/miftah-ja) は、[mohanagy/miftah](https://github.com/mohanagy/miftah) の日本向けforkとして作っている試作です。

複数アカウントのMCP接続をPC上で管理するMiftahを、日本語だけでもセットアップしやすくするため、案内や入力サポートを追加しています。

---

公開repoは [GitHub / tanakaisworking](https://github.com/tanakaisworking) にあります。
