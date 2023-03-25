<template lang="pug">
v-container
  section
    v-img.mr-auto.mb-4(src='share_info.svg', max-width='250px', contain)
    p 株式会社Coolwareが運営する簡単に投稿型サイトが開設できるWebサービス．

    v-card.mx-auto.mb-5(elevation='24', max-width='444')
      v-carousel(cycle, height='300', hide-delimiter-background)
        v-carousel-item
          v-sheet(color='green', height='100%')
            .d-flex.fill-height.justify-center.align-center
              .text-h2
                | First Slide
        v-carousel-item
          v-sheet(color='secondary', height='100%')
            .d-flex.fill-height.justify-center.align-center
              .text-h2
                | Second Slide
        v-carousel-item
          v-sheet(color='yellow darken-4', height='100%')
            .d-flex.fill-height.justify-center.align-center
              .text-h2
                | Third Slide

    | 期間： 2020年2月&ndash;2022年3月
    br
    | 役割： エンジニア

  v-divider.my-4

  v-container
    h2 hoge2
    p hoge2 app
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
