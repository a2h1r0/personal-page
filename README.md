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

「はちさんと おはな」の編集元は[`a2h1r0/baby-programming`](https://github.com/a2h1r0/baby-programming)です。このサイトにはゲームのHTML・画像を保存せず、`apps/baby-programming/bee-and-flower.json`に公開するコミットのSHAだけを記録します。ゲーム側のテスト済み更新がこのJSONを更新すると、サイトの公開処理がそのSHAを`.external/bee-and-flower/`に取得し、再テスト後に`dist/apps/baby-programming/bee-and-flower/`へHTML・favicon・OGP画像を生成します。取得・テスト・生成に失敗した場合は公開しません。

通常の`pnpm dev`と`pnpm build`は個人サイトのみを対象にします。ゲームを含む公開成果物をローカルで確認する場合は、次のように取得先を用意し、JSONの`revision`に記録されたSHAを指定します。`.external/`と`dist/`はGit管理対象外です。

```sh
git clone --no-checkout https://github.com/a2h1r0/baby-programming.git .external/bee-and-flower
git -C .external/bee-and-flower checkout --detach <revisionのSHA>
pnpm build:publish
pnpm preview
```

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
apps/          別リポジトリで管理するアプリの公開版設定
```

ページ固有の掲載内容は`src/pages/`、共通部分は`src/components/`と`src/layouts/`で管理します。

他のアプリを追加する場合も、編集元のリポジトリと公開版の設定を用意し、公開処理で`dist/apps/baby-programming/<アプリ名>/`へ生成します。アプリ本体や生成済みHTMLは、このサイトのソースへ追加しません。
