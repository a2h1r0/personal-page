<template lang="pug">
v-container(dark, v-if='true')
  p.text-center.mt-12 現在準備中です．．．

v-container(v-else)
  v-container
    h2.text-h6.font-weight-bold.mb-4 学術論文誌発表論文 / Journal paper
    ol
      li(v-for='publication in publications.journalPaper')
        span(v-for='(author, i) in publication.authors') {{ author }}
          span(v-if='i < publication.authors.length - 1') ,&nbsp;
          span(v-else) :&nbsp;
        span {{ publication.title }},&nbsp;
        span {{ publication.book }},&nbsp;
        span(v-if='publication.volume') {{ publication.volume }},&nbsp;
        span(v-if='publication.number') {{ publication.number }},&nbsp;
        span(v-if='publication.issue') {{ publication.issue }},&nbsp;
        span pp. {{ publication.pageFrom }}&ndash;
        span {{ publication.pageTo }},&nbsp;
        span {{ formatDate(publication.date) }} [
        a(
          :href='publication.link.url',
          target='_blank',
          rel='noopener noreferrer'
        ) {{ publication.link.text }}
        span ]
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'

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
        link: {
          text: string
          url: string
        }
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
            authors: ['A. Fujii', 'K. Murao'],
            title:
              'User Identification Method based on Head Shape Using Pressure Sensors Embedded in a Helmet',
            book: 'Journal of Information Processing',
            volume: 29,
            number: null,
            issue: null,
            pageFrom: 610,
            pageTo: 619,
            date: '2021-10-15',
            link: {
              text: 'J-STAGE',
              url: 'https://doi.org/10.2197/ipsjjip.29.610',
            },
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
  methods: {
    formatDate(date: string): string {
      return dayjs(date).format('MMM. YYYY')
    },
  },
})
</script>
