<template lang="pug">
v-container
  v-container
    h2 著者情報 / Author information
    a(href='https://orcid.org/0000-0002-9292-2912')
      img.mr-2(
        alt='ORCID logo',
        src='https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png',
        width='16',
        height='16'
      )
      | 0000-0002-9292-2912

  v-divider.my-4

  v-container
    h2 学術論文誌発表論文 / Journal paper
    ol
      li(v-for='paper in publications.journalPaper')
        span(v-for='(author, i) in paper.authors') {{ author }}
          span(v-if='i < paper.authors.length - 1') ,&nbsp;
          span(v-else) :&nbsp;
        span {{ paper.title }},&nbsp;
        span {{ paper.journal }},&nbsp;
        span(v-if='paper.volume') Vol. {{ paper.volume }},&nbsp;
        span(v-if='paper.number') No. {{ paper.number }},&nbsp;
        span(v-if='paper.issue') Issue {{ paper.issue }},&nbsp;
        span pp. {{ paper.pageFrom }}&ndash;
        span {{ paper.pageTo }},&nbsp;
        span ({{ formatDate(paper.date) }}).&nbsp;
        span
          span [
          a(:href='paper.url', target='_blank', rel='noopener noreferrer') {{ paper.publisher }}
          span ]

  v-divider.my-4

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
        span
          span [
          a(:href='paper.url', target='_blank', rel='noopener noreferrer') {{ paper.publisher }}
          span ]

  v-divider.my-4

  v-container
    h2 国内研究会等発表論文 / Domestic conference paper
    ol
      li(v-for='paper in publications.domesticConferencePaper')
        span(v-for='(author, i) in paper.authors') {{ author }}
          span(v-if='i < paper.authors.length - 1') ,&nbsp;
          span(v-else) :&nbsp;
        span {{ paper.title }},&nbsp;
        span {{ paper.conference }}
        span(v-if='paper.series') &nbsp;({{ paper.series }})
        span(v-if='paper.volume') ,&nbsp;Vol. {{ paper.volume }}
        span(v-if='paper.number') ,&nbsp;No. {{ paper.number }}
        span(v-if='paper.pageFrom != paper.pageTo') , pp.&nbsp;
          span {{ paper.pageFrom }}&ndash;
          span {{ paper.pageTo }},&nbsp;
        span(v-else) , p.&nbsp;
          span {{ paper.pageFrom }},&nbsp;
        span {{ paper.location }}&nbsp;
        span ({{ formatDate(paper.date) }}).&nbsp;
        span.award {{ paper.award }}&nbsp;
        span(v-if='paper.publisher')
          span [
          a(:href='paper.url', target='_blank', rel='noopener noreferrer') {{ paper.publisher }}
          span ]

  v-divider.my-4

  v-container
    h2 卒業論文 / Bachelor thesis
    ol
      li 圧力センサ搭載ヘルメットを用いた本人認証手法の提案

  v-container
    h2 修士論文 / Master thesis
    ol
      li Pulse Wave Generation Method for PPG by using Display
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

interface domesticConferencePaper {
  authors: string[]
  title: string
  conference: string
  series: string | null
  volume: string | null
  number: Number | null
  pageFrom: Number
  pageTo: Number
  location: string
  date: string
  award: string | null
  publisher: string | null
  url: string | null
}

export type DataType = {
  publications: {
    journalPaper: journalPaper[]
    internationalConferencePaper: internationalConferencePaper[]
    domesticConferencePaper: domesticConferencePaper[]
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
          {
            authors: ['A. Fujii', 'K. Murao', 'N. Matsuhisa'],
            title: 'Pulse Wave Generation Method for PPG by using Display',
            journal: 'IEEE Access',
            volume: null,
            number: null,
            issue: null,
            pageFrom: 1,
            pageTo: 1,
            date: '2023-03-24',
            publisher: 'IEEE',
            url: 'https://doi.org/10.1109/ACCESS.2023.3260862',
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
          {
            authors: ['A. Fujii', 'K. Yoshida', 'K. Shirai', 'K. Murao'],
            title:
              'Bento Packaging Activity Recognition with Convolutional LSTM Using Autocorrelation Function and Majority Vote',
            bookTitle:
              'Sensor- and Video-Based Activity and Behavior Computing',
            series: 'ABC 2021',
            pageFrom: 237,
            pageTo: 247,
            location: 'Online',
            date: '2022-05-04',
            award: null,
            acceptanceRate: null,
            publisher: 'Springer',
            url: 'https://doi.org/10.1007/978-981-19-0361-8_16',
          },
        ],
        domesticConferencePaper: [
          {
            authors: ['藤井敦寛', '村尾和哉'],
            title: '圧カセンサ搭載ヘルメットを用いた個人識別手法の提案',
            conference: 'ユビキタスウェアラブルワークショップ2019論文集',
            series: 'UWW 2019',
            volume: null,
            number: null,
            pageFrom: 49,
            pageTo: 49,
            location: '兵庫',
            date: '2019-12-21',
            award: null,
            publisher: null,
            url: null,
          },
          {
            authors: ['藤井敦寛', '村尾和哉'],
            title: '圧力センサ搭載ヘルメットを用いた個人識別手法',
            conference:
              '情報処理学会マルチメディア，分散，協調とモバイルシンポジウム論文集',
            series: 'DICOMO 2020',
            volume: '2020',
            number: null,
            pageFrom: 1215,
            pageTo: 1222,
            location: 'オンライン',
            date: '2020-06-26',
            award: '最優秀プレゼンテーション賞，優秀論文賞',
            publisher: '情報学広場',
            url: 'http://id.nii.ac.jp/1001/00210783/',
          },
          {
            authors: ['藤井敦寛', '村尾和哉'],
            title: 'ディスプレイを用いた擬似的脈波生成手法の検討',
            conference: 'ユビキタスウェアラブルワークショップ2020論文集',
            series: 'UWW 2020',
            volume: null,
            number: null,
            pageFrom: 39,
            pageTo: 39,
            location: '兵庫',
            date: '2020-12-13',
            award: null,
            publisher: null,
            url: null,
          },
          {
            authors: ['藤井敦寛', '村尾和哉'],
            title: 'ディスプレイを用いた脈波生成手法の検討',
            conference: 'インタラクション2021論文集',
            series: null,
            volume: null,
            number: null,
            pageFrom: 475,
            pageTo: 478,
            location: 'オンライン',
            date: '2021-03-01',
            award: null,
            publisher: 'インタラクション2021',
            url: 'https://www.interaction-ipsj.org/proceedings/2021/data/bib/3A10.html',
          },
          {
            authors: ['藤井敦寛', '村尾和哉'],
            title:
              'ディスプレイを用いて光電脈波センサに任意の脈波を計測させる手法の提案',
            conference:
              '情報処理学会マルチメディア，分散，協調とモバイルシンポジウム論文集',
            series: 'DICOMO 2021',
            volume: '2021',
            number: 1,
            pageFrom: 702,
            pageTo: 708,
            location: 'オンライン',
            date: '2021-07-01',
            award: null,
            publisher: '情報学広場',
            url: 'http://id.nii.ac.jp/1001/00212888/',
          },
          {
            authors: ['藤井敦寛', '村尾和哉'],
            title: '注水音を用いた容器内水位推定手法の提案',
            conference: 'ユビキタスウェアラブルワークショップ2021論文集',
            series: 'UWW 2021',
            volume: null,
            number: null,
            pageFrom: 49,
            pageTo: 49,
            location: '兵庫',
            date: '2021-12-20',
            award: null,
            publisher: null,
            url: null,
          },
          {
            authors: ['藤井敦寛', '村尾和哉'],
            title: '注水音を用いた容器内水位推定手法',
            conference: '研究報告ユビキタスコンピューティングシステム',
            series: 'UBI 73',
            volume: '2022-UBI-73',
            number: 18,
            pageFrom: 1,
            pageTo: 8,
            location: 'オンライン',
            date: '2022-03-07',
            award: null,
            publisher: '情報学広場',
            url: 'http://id.nii.ac.jp/1001/00216626/',
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
