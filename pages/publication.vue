<template lang="pug">
v-container(dark, v-if='true')
  p.text-center.mt-12 現在準備中です．．．

v-container(v-else)
  v-container
    h2 学術論文誌発表論文 / Journal paper
    ol
      li(v-for='paper in publications.journalPaper')
        span(v-for='(author, i) in paper.authors') {{ author }}
          span(v-if='i < paper.authors.length - 1') ,&nbsp;
          span(v-else) :&nbsp;
        span {{ paper.title }},&nbsp;
        span {{ paper.journal }},&nbsp;
        span(v-if='paper.volume') {{ paper.volume }},&nbsp;
        span(v-if='paper.number') {{ paper.number }},&nbsp;
        span(v-if='paper.issue') {{ paper.issue }},&nbsp;
        span pp. {{ paper.pageFrom }}&ndash;
        span {{ paper.pageTo }},&nbsp;
        span ({{ formatDate(paper.date) }}).&nbsp;
        span [
        a(:href='paper.url', target='_blank', rel='noopener noreferrer') {{ paper.publisher }}
        span ]

    v-divider.mt-6

  v-container
    h2 国際会議等発表論文 / International conference paper
    ol
      li(v-for='paper in publications.internationalConferencePaper')
        span(v-for='(author, i) in paper.authors') {{ author }}
          span(v-if='i < paper.authors.length - 1') ,&nbsp;
          span(v-else) :&nbsp;
        span {{ paper.title }},&nbsp;
        span {{ paper.bookTitle }}
        span(v-if='paper.series') &nbsp;({{ paper.series }})
        span , pp. {{ paper.pageFrom }}&ndash;
        span {{ paper.pageTo }},&nbsp;
        span {{ paper.location }}&nbsp;
        span ({{ formatDate(paper.date) }}).&nbsp;
        span.award {{ paper.award }}&nbsp;
        span.acceptance-rate(v-if='paper.acceptanceRate') ({{ `Acceptance rate: ${paper.acceptanceRate}=${calcAcceptanceRate(paper.acceptanceRate)}%` }})&nbsp;
        span [
        a(:href='paper.url', target='_blank', rel='noopener noreferrer') {{ paper.publisher }}
        span ]
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'

interface journalPaper {
  authors: string[]
  title: string
  journal: string
  volume: Number | null
  number: Number | null
  issue: Number | null
  pageFrom: Number
  pageTo: Number
  date: string
  publisher: string
  url: string
}

interface internationalConferencePaper {
  authors: string[]
  title: string
  bookTitle: string
  series: string | null
  pageFrom: Number
  pageTo: Number
  location: string
  date: string
  award: string | null
  acceptanceRate: string | null
  publisher: string
  url: string
}

export type DataType = {
  publications: {
    journalPaper: journalPaper[]
    internationalConferencePaper: internationalConferencePaper[]
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
            journal: 'Journal of Information Processing',
            volume: 29,
            number: null,
            issue: null,
            pageFrom: 610,
            pageTo: 619,
            date: '2021-10-15',
            publisher: 'J-STAGE',
            url: 'https://doi.org/10.2197/ipsjjip.29.610',
          },
        ],
        internationalConferencePaper: [
          {
            authors: ['A. Fujii', 'D. Kajiwara', 'K. Murao'],
            title:
              'Cooking Activity Recognition with Convolutional LSTM Using Multi-label Loss Function and Majority Vote',
            bookTitle:
              'in Proc. of International Conference on Activity and Behavior Computing',
            series: 'ABC 2020',
            pageFrom: 91,
            pageTo: 101,
            location: 'Fukuoka, Japan',
            date: '2020-11-21',
            award: null,
            acceptanceRate: null,
            publisher: 'Springer',
            url: 'https://doi.org/10.1007/978-981-15-8269-1_8',
          },
          {
            authors: ['A. Fujii', 'K. Murao'],
            title:
              'User Identification Method Based on Head Shape Using a Helmet with Pressure Sensors',
            bookTitle:
              'in Proc. of the 18th International Conference on Advances in Mobile Computing & Multimedia',
            series: 'MoMM 2020',
            pageFrom: 210,
            pageTo: 214,
            location: 'Virtual',
            date: '2020-11-30',
            award: null,
            acceptanceRate: null,
            publisher: 'ACM',
            url: 'https://doi.org/10.1145/3428690.3429158',
          },
          {
            authors: ['A. Fujii', 'K. Murao', 'N. Matsuhisa'],
            title:
              'disp2ppg: Pulse Wave Generation to PPG Sensor using Display',
            bookTitle:
              'in Proc. of the 25th International Symposium on Wearable Computers',
            series: 'ISWC 2021',
            pageFrom: 119,
            pageTo: 123,
            location: 'Virtual',
            date: '2021-09-21',
            award: null,
            acceptanceRate: '24/88',
            publisher: 'ACM',
            url: 'https://doi.org/10.1145/3460421.3478823',
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
    calcAcceptanceRate(acceptanceRate: string): Number {
      const split = acceptanceRate.split('/')
      const acceptancePaper = Number(split[0])
      const submittedPaper = Number(split[1])

      return Math.floor((acceptancePaper / submittedPaper) * 1000) / 10
    },
  },
})
</script>

<style lang="stylus" scoped>
h2
  font-size 1em
  font-weight bold
  margin-bottom 12px

ol
  font-size 0.9em
  .award
    color red
    font-weight bold
  .acceptance-rate
    color red
</style>
