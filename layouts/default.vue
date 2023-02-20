<template lang="pug">
v-app(dark)
  v-app-bar(app, fixed)
    v-tabs(centered, icons-and-text)
      v-tab(
        v-for='page in pages',
        :key='page.to',
        :to='page.to',
        router,
        exact
      )
        | {{ page.title }}
        v-icon {{ page.icon }}

  v-main
    v-container.mb-8
      Nuxt

    #footer
      | Copyright © 2022–{{ new Date().getFullYear() }} Atsuhiro Fujii
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
  pages: object[]
}

export default Vue.extend({
  data(): DataType {
    return {
      pages: [
        {
          icon: 'mdi-home',
          title: 'Top page',
          to: '/',
        },
        {
          icon: 'mdi-book-open',
          title: 'Publications',
          to: '/publications',
        },
        // {
        //   icon: 'mdi-briefcase',
        //   title: 'Contributions',
        //   to: '/contributions',
        // },
      ],
    }
  },
})
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Nunito')

::-webkit-scrollbar
  width 10px

::-webkit-scrollbar-track
  border-radius 10px
  box-shadow inset 0 0 6px rgba(0, 0, 0, 0.1)

::-webkit-scrollbar-thumb
  background-color #c0c0c0
  border-radius 10px
  box-shadow 0 0 0 1px rgba(255, 255, 255, 0.3)

#app
  font-family 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro', 'Yu Gothic Medium', '游ゴシック Medium', YuGothic, '游ゴシック体', 'メイリオ', sans-serif !important
  [class^='text-']
    font-family 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro', 'Yu Gothic Medium', '游ゴシック Medium', YuGothic, '游ゴシック体', 'メイリオ', sans-serif !important

  overflow-wrap break-word

  .v-main
    max-width 900px
    margin 0 auto

  #footer
    position absolute
    bottom 0
    left 50%
    transform translateX(-50%)
    -webkit-transform translateX(-50%)
    -ms-transform translateX(-50%)
</style>
