<template lang="pug">
v-container
  div(v-if='error.statusCode === 404')
    p.mb-0 404 Not Found
    p お探しのページは存在しないようです．．．
  div(v-else)
    p.mb-0 An error occurred
    p エラーが発生しました．．．

  NuxtLink(to='/') > home
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
  pageNotFound: string
  otherError: string
}

export default Vue.extend({
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data(): DataType {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head(): object {
    return {
      title:
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError,
    }
  },
})
</script>
