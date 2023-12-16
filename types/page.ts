interface Page {
  name: string; // ページ識別名
  path: string; // パス
  head: { // headタグ設定
    title: string,
    meta: [
      {
        name: string,
        content: string
      }
    ],
    script?: [
      {
        type: string,
        async: boolean,
        src: string
      }
    ]
  }
}

export interface Pages {
  index: Page
}

export const pages: Pages = {
  index: {
    name: 'ホーム',
    path: '/',
    head: {
      title: 'Atsuhiro Fujii',
      meta: [
        {
          name: 'description',
          content: "藤井敦寛の個人ページです． / This page is Atsuhiro Fujii's personal page."
        }
      ],
      script: [
        {
          type: 'text/javascript',
          async: true,
          src: 'https://platform.twitter.com/widgets.js'
        }
      ]
    }
  }
}
