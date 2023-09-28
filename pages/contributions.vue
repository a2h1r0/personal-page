<template lang="pug">
v-container
  article
    section
      p.text-center これまでに携わってきたアプリケーション．

    v-timeline
      section
        v-timeline-item(small, fill-dot)
          template(v-slot:opposite)
            span.headline.font-weight-bold 2023

          a(
            href='https://grant-terminal.com/',
            target='_blank',
            rel='noopener noreferrer'
          )
            v-img.mr-auto.mb-4(
              src='grant-terminal.png',
              max-width='250px',
              contain
            )
          p
            a(
              href='https://www.techterminal.co.jp/',
              target='_blank',
              rel='noopener noreferrer'
            ) 株式会社テックターミナル
            | による，研究者向けに特化した補助金を一括検索できるサービス．

      section
        v-timeline-item(small, fill-dot)
          template(v-slot:opposite)
            span.headline.font-weight-bold 2023

          a(
            href='https://www.gilgiltown.co.jp/',
            target='_blank',
            rel='noopener noreferrer'
          )
            v-img.mr-auto.mb-4(src='gilgiltown.ico', max-width='40px', contain)
          p
            a(
              href='https://www.gilgiltown.co.jp/',
              target='_blank',
              rel='noopener noreferrer'
            ) 株式会社ギルギルタウン
            | の社内利用のための動画共有およびアンケートアプリケーション．

      section
        v-timeline-item(small, fill-dot)
          template(v-slot:opposite)
            span.headline.font-weight-bold 2020

          a(
            href='https://theshare.info/',
            target='_blank',
            rel='noopener noreferrer'
          )
            v-img.mr-auto.mb-4(
              src='share_info.svg',
              max-width='250px',
              contain
            )
          p
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

interface contribution {
  title: string
  body: string
}

export type DataType = contribution[]

export default Vue.extend({
  data(): DataType {
    return [
      {
        title:
          'User Identification Method based on Head Shape Using Pressure Sensors Embedded in a Helmet',
        body: 'J-STAGE',
      },
    ]
  },
  head(): object {
    return {
      title: '仕事',
    }
  },
})
</script>

<style lang="stylus" scoped>
h2
  font-size 1em
  font-weight bold
  margin-bottom 12px
</style>
