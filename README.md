# personal-page

Atsuhiro Fujii（藤井 敦寛）の個人サイトです。プロフィール、開発プロジェクト、研究業績、研究で使用したデータセットを掲載しています。Astroで静的サイトを生成しています。

公開サイト：<https://atsuhi.ro/>

## ページ

| ページ | 内容 | URL |
| --- | --- | --- |
| Top | プロフィール、スキル、個人開発、学歴 | <https://atsuhi.ro/> |
| Projects | 職歴と開発プロジェクト | <https://atsuhi.ro/projects.html> |
| Publications | 論文、発表、受賞などの研究業績 | <https://atsuhi.ro/publications.html> |
| Dataset | 研究で使用したデータセット | <https://atsuhi.ro/dataset.html> |
| はちさんと おはな | 4〜6歳向けの無料プログラミング体験ゲーム | <https://atsuhi.ro/apps/baby-programming/> |

## 開発

リポジトリのルートディレクトリで実行します。Node.js 22.12.0以上とpnpmが必要です。

```sh
pnpm install --frozen-lockfile
pnpm dev --background
```

開発サーバーはバックグラウンドで起動します。`http://localhost:4321/`でサイトを確認できます。

```sh
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

## ビルドとプレビュー

```sh
pnpm build
pnpm preview
```

ビルド結果は`dist/`に出力されます。`pnpm preview`で生成したサイトをローカルで確認できます。

## 構成

```text
src/
  components/  ヘッダー、フッター、metaタグなどの共通部品
  layouts/     ページ共通のレイアウト
  pages/       各ページとプログラミング体験ゲーム
public/        CSS、画像、favicon、サイトマップなどの静的ファイル
```

ページ固有の掲載内容は`src/pages/`、共通部分は`src/components/`と`src/layouts/`で管理します。
