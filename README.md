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
| はちさんと おはな | 4〜6歳向けの無料プログラミング体験ゲーム | <https://atsuhi.ro/apps/baby-programming/bee-and-flower/> |

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
`master`へのpush時に[Deploy to GitHub Pages](https://github.com/a2h1r0/personal-page/actions/workflows/deploy.yml)がAstroをビルドし、別リポジトリのゲームを公開成果物へ組み込んだ`dist/`を公開します。プルリクエストでは同じ取り込み・テスト・ビルドを確認し、公開は行いません。

「はちさんと おはな」の編集元は[`a2h1r0/baby-programming`](https://github.com/a2h1r0/baby-programming)です。ゲーム側の`main`へのpush後、テストに成功するとGitHub Appがこのサイトの公開処理を直接起動します。テスト済みのSHAは`game_revision`入力として渡され、実行中だけ使用します。このサイトにはゲームのHTML・画像・公開版のSHAファイルを保存しません。

公開処理では、ゲームを`.external/bee-and-flower/`に一時取得して再テストし、Astroビルド後にHTML・favicon・OGP画像を`dist/apps/baby-programming/bee-and-flower/`へコピーします。取得・テスト・コピーに失敗した場合は公開しません。サイトだけの更新や入力を省略した手動実行では、ゲーム側の`main`を取得します。その場合もゲームのテストが通る必要があります。

本番の公開処理は直列に実行し、公開直前に両リポジトリの最新コミットを確認します。新しい更新がある古い実行は公開をスキップします。

通常の`pnpm dev`と`pnpm build`は個人サイトのみを対象にします。ゲームを含む公開成果物をローカルで確認する場合は、次のようにゲームを取得します。`.external/`と`dist/`はGit管理対象外です。

```sh
git clone --branch main https://github.com/a2h1r0/baby-programming.git .external/bee-and-flower
pnpm build:publish
pnpm preview
```

GitHub Appの認証情報はゲーム側に設定します。Repository permissionsの **Actions: Read and write** を持つAppをこのリポジトリだけにインストールし、ゲーム側のVariable `SITE_DEPLOY_APP_CLIENT_ID`とSecret `SITE_DEPLOY_APP_PRIVATE_KEY`にClient IDと秘密鍵を登録します。トークンは実行時に自動発行します。

リポジトリの[Settings → Pages](https://github.com/a2h1r0/personal-page/settings/pages)で、公開元のSourceを**GitHub Actions**、Custom domainを**atsuhi.ro**に設定します。Jekyllによるブランチ直接公開は使用しません。
独自ドメインはPages側にも設定が必要です。`public/CNAME`だけでは、カスタムワークフローの公開ドメインは設定されません。

手動で再公開する場合は、Actionsの**Deploy to GitHub Pages → Run workflow**から`master`を選択します。完了後、公開サイトの各ページとデータセット・ゲームへのリンクを確認します。

詳細は[AstroのGitHub Pages公開ガイド](https://docs.astro.build/en/guides/deploy/github/)と[GitHubの独自ドメイン設定](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)を参照してください。

## 構成

```text
src/
  components/  ヘッダー、フッター、metaタグなどの共通部品
  layouts/     ページ共通のレイアウト
  pages/       個人サイトの各ページ
public/        CSS、画像、favicon、サイトマップなどの静的ファイル
```

ページ固有の掲載内容は`src/pages/`、共通部分は`src/components/`と`src/layouts/`で管理します。

他のアプリを追加する場合も、編集元のリポジトリと公開時の取得・コピー処理を用意し、`dist/apps/baby-programming/<アプリ名>/`へ配置します。アプリ本体や公開版のSHAファイルは、このサイトのソースへ追加しません。
