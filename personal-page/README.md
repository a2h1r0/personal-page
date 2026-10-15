# personal-page

既存の静的HTMLをそのまま動かすためのAstroプロジェクトです。
`src/pages/`のHTMLと`public/`の配信ファイルは、リポジトリ直下の既存ファイルを内容を変更せずにコピーしています。

## 動作確認

このディレクトリで実行します。Node.js 22.12.0以上とpnpmが必要です。

```sh
pnpm install --frozen-lockfile
pnpm dev --background
```

`http://localhost:4321/`、`/projects.html`、`/publications.html`、`/dataset.html`、`/apps/baby-programming/`で確認できます。
開発サーバーは`pnpm astro dev stop`で停止します。

```sh
pnpm build
pnpm preview
```

ビルド結果は`dist/`に出力され、既存と同じ`.html`のURLを使います。
現在の公開元であるリポジトリ直下のファイルは残しています。
コンポーネント化、ルートディレクトリへの展開、公開設定の切り替えは後続で行います。
