---
title: 作っているもの・公開しているもの
published: 2026-10-05
description: mikan chat、Dot Taskboard、Secret Managerなど、公開しているプロダクトやOSSをまとめます。
tags: [OSS, AI, MCP, プロダクト開発]
category: つくっているもの
draft: false
lang: ja
---

公開しているリポジトリの中から、いまの自分が何を作っているか伝わりやすいものをまとめました。

単なるforkや参照用に置いているリポジトリは除き、自分で作っているものを中心に載せています。

## mikan chat

[mikan chat](https://github.com/tanakaisworking/mikan-chat) は、シナリオの中の一人としてAIキャラクターと会話する、無料・オープンソースのAIチャットアプリです。

1対1だけでなく複数キャラクターの物語を扱え、シナリオは持ち運べる `.mikanchat` 形式のChat Packとして作成・共有できます。ローカルAIでの利用を中心にしつつ、現在はWeb Early Accessも公開しています。

- [ブラウザで試す](https://mikanchat.mikan-chat.workers.dev/)
- [GitHub](https://github.com/tanakaisworking/mikan-chat)

個人的には「モデルを使うアプリ」だけではなく、コミュニティが物語そのものを作って持ち運べるところまで含めて作りたいプロジェクトです。

## Dot Taskboard

[Dot Taskboard](https://github.com/tanakaisworking/dot-taskboard) は、タスクと「次の一手」をまとめる個人向けタスクワークスペースです。

List / Kanban / Project / Activity の表示に加えてMCPインターフェースを持ち、AIからも人からも同じタスクを扱えるようにしています。

公開版はソースコードと架空のデモだけを含み、ホスティング済みのサービスや実データは含みません。

## Secret Manager

[Secret Manager](https://github.com/tanakaisworking/secret-manager) は、AIコーディングアシスタントにAPIキーやトークンそのものを渡さず、**秘密情報の名前と用途だけをAIに見せて使わせる**ための小さなワークフローです。

実際の値は人間がローカルのTerminalに入力し、1回だけ子プロセスへ渡したり、期限付きのメモリ内セッションとして保持したりできます。

「AIにPC作業を任せたいけれど、認証情報まで会話に載せたくない」という自分の運用上の問題から作っています。

## readapp

[readapp](https://github.com/tanakaisworking/readapp) は、PC上の通知を取得し、ローカルAIでキャラクター口調に変換してTTSで読み上げる常駐アプリです。

Tauri 2 + Rustを軸に、macOS / Windowsの通知取得の違いをネイティブ側に閉じ込める設計です。通知だけでなく、将来的には会議終了、タスク完了、カレンダーなどのイベントを同じ音声パイプラインに流す構想です。

現在の公開repoは設計・検証段階の内容を中心にしています。

## Japanese UX Writing Skill

[Japanese UX Writing Skill](https://github.com/tanakaisworking/japanese-ux-writing-skill) は、日本語SaaSのUIテキストをAIに書かせるためのルールセットです。

「コンポーネント種別 × シーン」の2軸で、ボタン、エラー、確認ダイアログ、空状態などの文字数やトーンを定義しています。Claude CodeのSkillやシステムプロンプトとしてそのまま使える形にしています。

## Parallel Insight

[Parallel Insight](https://github.com/tanakaisworking/parallel-insight-lp) は、CSVだけで施策前後のデータを読み込み、「施策を打たなかった場合」を予測して実績との差分を見る分析プロダクトの実験です。

公開repoはLPですが、コード不要・ローカル完結で施策効果を確認する、というプロダクトの考え方を公開しています。

## Miftah 日本語版

[Miftah 日本語版](https://github.com/tanakaisworking/miftah-ja) は、自作プロダクトではなく [mohanagy/miftah](https://github.com/mohanagy/miftah) の日本向けforkです。

複数アカウントのMCP接続をPC上で管理するMiftahを、日本語だけでもセットアップしやすくするため、案内や入力サポートを追加しています。

---

公開repoは [GitHub / tanakaisworking](https://github.com/tanakaisworking) にあります。ここでは「自分が何を考えて作っているか」が伝わるものを選んで載せていきます。
