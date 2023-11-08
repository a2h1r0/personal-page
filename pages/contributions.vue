<template lang="pug">
v-container
  article
    section
      v-container
        v-row.mt-4.mb-8(justify='center')
          a.text-h4.white--text.text-decoration-none(
            href='https://github.com/a2h1r0',
            target='_blank',
            rel='noopener noreferrer'
          )
            img.mr-4(src='/github.svg', width='40px')
            | a2h1r0

        v-row.mb-8
          v-col
            v-img(src='/html.svg', max-height='45px', contain)
          v-col
            v-img(src='/css.svg', max-height='45px', contain)
          v-col
            v-img(src='/javascript.svg', max-height='45px', contain)
          v-col
            v-img(src='/typescript.svg', max-height='45px', contain)
          v-col
            v-img(src='/vue.svg', max-height='45px', contain)
          v-col
            v-img(src='/firebase.svg', max-height='45px', contain)
          v-col
            v-img(src='/php.svg', max-height='45px', contain)
          v-col
            v-img(src='/laravel.svg', max-height='45px', contain)
          v-col
            v-img(src='/python.svg', max-height='45px', contain)
          v-col
            v-img(src='/scikit-learn.svg', max-height='45px', contain)
          v-col
            v-img(src='/pytorch.svg', max-height='45px', contain)

    v-timeline(dense)
      section
        v-timeline-item(small, fill-dot)
          v-row(align='center')
            v-col(cols='2')
              div
                span.headline.font-weight-bold 2023
                br
                span.font-weight-bold エンジニア

            v-col(cols='10')
              a(
                href='https://grant-terminal.com/',
                target='_blank',
                rel='noopener noreferrer'
              )
                v-img.mr-auto.mb-4(
                  src='/grant-terminal.png',
                  max-width='250px',
                  contain
                )
              span
                a(
                  href='https://www.techterminal.co.jp/',
                  target='_blank',
                  rel='noopener noreferrer'
                ) 株式会社テックターミナル
                | による，研究者向けに特化した補助金を一括検索できるサービス．

      section
        v-timeline-item(small, fill-dot)
          v-row(align='center')
            v-col(cols='2')
              div
                span.headline.font-weight-bold 2023
                br
                span.font-weight-bold エンジニア

            v-col(cols='10')
              a(
                href='https://www.gilgiltown.co.jp/',
                target='_blank',
                rel='noopener noreferrer'
              )
                v-img.mr-auto.mb-4(
                  src='/gilgiltown.ico',
                  max-width='40px',
                  contain
                )
              span
                a(
                  href='https://www.gilgiltown.co.jp/',
                  target='_blank',
                  rel='noopener noreferrer'
                ) 株式会社ギルギルタウン
                | の社内利用のための動画共有およびアンケートアプリケーション．

      section
        v-timeline-item(small, fill-dot)
          v-row(align='center')
            v-col(cols='2')
              div
                span.headline.font-weight-bold 2020
                br
                span.font-weight-bold エンジニア

            v-col(cols='10')
              a(
                href='https://theshare.info/',
                target='_blank',
                rel='noopener noreferrer'
              )
                v-img.mr-auto.mb-4(
                  src='/share_info.svg',
                  max-width='250px',
                  contain
                )
              span
                a(
                  href='https://coolware.jp/',
                  target='_blank',
                  rel='noopener noreferrer'
                ) 株式会社Coolware
                | が運営する簡単に投稿型サイトが開設できるWebサービス．
                br
                | フォーラム，Q&Aのような掲示板，まとめサイトやマッチングサイトを簡単作成できる．
                br
                | 無料試用から法人様向け
                a(
                  href='https://theshare.info/biz/',
                  target='_blank',
                  rel='noopener noreferrer'
                ) Biz プラン
                | まで５種類のプランから選択可能．
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head(): object {
    return {
      title: '仕事',
    }
  },
})
</script>
