<template lang="pug">
v-container
  v-container
    h2 hoge
    p hoge app

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
