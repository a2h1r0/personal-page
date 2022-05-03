<template lang="pug">
v-container
  v-container
    h2 学術論文誌発表論文 / Journal paper
    v-list(color='dark')
      v-list-item(v-for='publication in publications.journalPaper')
        span(v-for='author in publication.authors') {{ author }}:&nbsp;
        span {{ publication.title }},&nbsp;
        span {{ publication.book }},&nbsp;
        span(v-if='publication.volume') {{ publication.volume }},&nbsp;
        span(v-if='publication.number') {{ publication.number }},&nbsp;
        span(v-if='publication.issue') {{ publication.issue }},&nbsp;
        span {{ publication.pageFrom }}&ndash;
        span {{ publication.pageTo }},&nbsp;
        span {{ publication.date }}
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
  publications: {
    journalPaper: [
      {
        authors: string[]
        title: string
        book: string
        volume: Number | null
        number: Number | null
        issue: Number | null
        pageFrom: Number
        pageTo: Number
        date: string
      }
    ]
  }
}

export default Vue.extend({
  data(): DataType {
    return {
      publications: {
        journalPaper: [
          {
            authors: ['me'],
            title: 'test',
            book: 'book',
            volume: 1,
            number: 2,
            issue: null,
            pageFrom: 10,
            pageTo: 100,
            date: '2022-01-01',
          },
        ],
      },
    }
  },
  head(): object {
    return {
      title: '業績',
    }
  },
})
</script>
