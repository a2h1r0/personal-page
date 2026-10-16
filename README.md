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
| Apps | アプリケーション一覧と紹介 | <https://atsuhi.ro/apps/> |
| はちさんと おはな | 4〜6歳向けの無料プログラミング体験ゲーム | <https://atsuhi.ro/apps/baby-programming/> |

## アプリ一覧の管理

アプリ一覧は`src/pages/apps/index.astro`で管理します。はちさんとおはなの紹介画像は、[アプリのリポジトリ](https://github.com/a2h1r0/baby-programming)の`docs/success-1024x680.jpg`を`public/apps/baby-programming/bee-and-flower/ogp.jpg`へコピーしたものです。
現在のアプリHTMLには`og:image`がないため、紹介画像のパスを一覧側で指定しています。アプリ側の公開処理はHTMLのみを同期するため、紹介画像を更新する場合は同じパスへ再コピーします。

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

## 公開

GitHub Pagesで`https://atsuhi.ro/`に公開します。
`master`へのpush時に[Deploy to GitHub Pages](https://github.com/a2h1r0/personal-page/actions/workflows/deploy.yml)がAstroをビルドし、`dist/`を公開します。プルリクエストではビルドのみ確認します。

リポジトリの[Settings → Pages](https://github.com/a2h1r0/personal-page/settings/pages)で、公開元のSourceを**GitHub Actions**、Custom domainを**atsuhi.ro**に設定します。Jekyllによるブランチ直接公開は使用しません。
独自ドメインはPages側にも設定が必要です。`public/CNAME`だけでは、カスタムワークフローの公開ドメインは設定されません。

手動で再公開する場合は、Actionsの**Deploy to GitHub Pages → Run workflow**から`master`を選択します。完了後、公開サイトの各ページとデータセット・ゲームへのリンクを確認します。

詳細は[AstroのGitHub Pages公開ガイド](https://docs.astro.build/en/guides/deploy/github/)と[GitHubの独自ドメイン設定](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)を参照してください。

## 構成

```text
src/
  components/  ヘッダー、フッター、metaタグなどの共通部品
  layouts/     ページ共通のレイアウト
  pages/       各ページとプログラミング体験ゲーム
public/        CSS、画像、favicon、サイトマップなどの静的ファイル
```

ページ固有の掲載内容は`src/pages/`、共通部分は`src/components/`と`src/layouts/`で管理します。
