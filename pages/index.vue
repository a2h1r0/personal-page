<template lang="pug">
v-container
  h1.text-h4.mb-8 藤井 敦寛

  p
    | メールアドレスは公開しておりません．お手数ですがSNS経由でご連絡をお願い致します．
    br
    | （SNS経由でメールアドレスをお伝えすることは可能です．）
  a.twitter-mention-button(
    href='https://twitter.com/intent/tweet?screen_name=_a2h1r0&ref_src=twsrc%5Etfw',
    data-show-count='false'
  ) Tweet to @_a2h1r0
  script(async, src='https://platform.twitter.com/widgets.js', charset='utf-8')

  v-divider.my-4

  h2.text-h5.mb-2 略歴
  p 1998年生まれ．2022年，立命館大学大学院情報理工学研究科博士課程前期課程修了．修士（工学）．2022年より民間企業で勤務．

  v-divider.my-4

  h2.text-h5.mb-2 学歴
  p
    | Apr. 2013–Mar. 2016
    br
    | 大阪明星学園 明星高等学校 卒業
  p
    | Apr. 2016–Mar. 2020
    br
    | 立命館大学情報理工学部情報システム学科 卒業（指導教員：村尾和哉准教授）
  p
    | Apr. 2020–Mar. 2022
    br
    | 立命館大学大学院情報理工学研究科博士課程前期課程 修了（指導教員：村尾和哉准教授）
    br
    | 修士（工学）
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
