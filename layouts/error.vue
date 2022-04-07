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

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
