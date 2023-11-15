<script lang="ts" setup>
useHead({
  titleTemplate: (title) => {
    return title ? `${title} | Atsuhiro Fujii` : 'Atsuhiro Fujii';
  },
});

const pages = [
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
];
</script>

<template>
  <v-layout>
    <v-app-bar app="app" fixed="fixed">
      <v-tabs centered="centered" icons-and-text="icons-and-text">
        <v-tab
          v-for="page in pages"
          :key="page.to"
          :to="page.to"
          router="router"
          exact="exact"
          >{{ page.title }}
          <v-icon>{{ page.icon }}</v-icon>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <v-container class="mb-8">
        <slot />
      </v-container>

      <div id="footer">
        Copyright © 2022–{{ new Date().getFullYear() }} Atsuhiro Fujii
      </div>
    </v-main>
  </v-layout>
</template>

<style lang="stylus" scoped>
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
