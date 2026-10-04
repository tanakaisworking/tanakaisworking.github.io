export type Project = {
  id: string;
  name: string;
  label: string;
  summary: string;
  detail: string;
  tags: string[];
  href: string;
  linkLabel: string;
  note?: string;
};

export const projects: Project[] = [
  {
    id: 'reki-note', name: 'Reki note', label: 'プロダクト',
    summary: '日々の会話を、あとから活かせる記録に。',
    detail: '会議の文字起こしと議事録づくりを支えるデスクトップアプリ。会話を記録し、蓄積した議事録を検索・参照できるプロダクトを開発しています。',
    tags: ['議事録', 'AI', 'デスクトップアプリ'],
    href: 'https://rekinote.app/ja/lp/business/', linkLabel: 'サービスを見る',
  },
  {
    id: 'dot-taskboard', name: 'Dot Taskboard', label: 'オープンソース',
    summary: 'タスクと「次の一手」を、ひとつの場所に。',
    detail: 'リスト・カンバン・プロジェクト表示とMCP連携を備えた、個人向けタスクワークスペース。タスクの状態や次のアクションを整理するためのソース公開プロジェクトです。',
    tags: ['タスク管理', 'MCP', 'OSS'],
    href: 'https://github.com/tanakaisworking/dot-taskboard', linkLabel: 'GitHubを見る',
    note: 'ソースコードの公開版です。ホスティング済みサービスではなく、利用には環境構築が必要です。',
  },
  {
    id: 'miftah-ja', name: 'Miftah 日本語版', label: '日本語化フォーク',
    summary: 'MCPの複数アカウント管理を、日本語で。',
    detail: '複数アカウントのMCP接続を管理するMiftahの非公式フォーク。元プロジェクトの設計を活かし、日本語でセットアップしやすい案内を整えています。',
    tags: ['MCP', '日本語化', 'OSS'],
    href: 'https://github.com/tanakaisworking/miftah-ja', linkLabel: 'GitHubを見る',
    note: '元プロジェクトは mohanagy/miftah です。Miftah本体の作者ではなく、日本語化に取り組んでいます。',
  },
];
