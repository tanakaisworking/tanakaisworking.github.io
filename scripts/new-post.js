import fs from 'node:fs';
import path from 'node:path';
const [slug, suppliedTitle] = process.argv.slice(2);
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error('使い方: pnpm new-post <半角英数字とハイフンのslug> "記事タイトル"');
  process.exit(1);
}
const date = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
const file = path.join('src', 'content', 'posts', `${slug}.md`);
const text = `---\ntitle: ${JSON.stringify(suppliedTitle || slug)}\npublished: ${date}\ndescription: ''\ntags: []\ncategory: 開発ノート\ndraft: true\nlang: ja\n---\n\nここから本文を書きます。\n`;
try {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text, { flag: 'wx' });
  console.log(`${file} を下書きとして作成しました。公開するときは draft: false に変更してください。`);
} catch (error) {
  console.error(error.code === 'EEXIST' ? '同じslugの記事がすでにあります。上書きしませんでした。' : error.message);
  process.exit(1);
}
