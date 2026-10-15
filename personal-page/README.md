# personal-page

既存の静的HTMLをAstroで動かすためのプロジェクトです。
主要4ページは`src/pages/`へ移動して`.astro`に変更し、CSS・画像などは`public/`へ移動しています。
本文や既存スクリプトは変更せず、Astroによる処理を避けるための`is:inline`指定だけ加えています。
独立したゲームは`src/pages/apps/baby-programming/index.html`として維持しています。

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
コンポーネント化、ルートディレクトリへの展開、公開設定の切り替えは後続で行います。
