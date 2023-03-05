<template lang="pug">
v-container
  v-container
    h2 hoge
    p hoge app

    v-card.mx-auto(elevation='24', max-width='444')
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
