<script lang="ts" setup>
import { pages } from '~/types/page';
import { publications } from '~/types/publication';

useHead(pages.publications.head);

// function formatDate(date: string): string {
//   return $dayjs(date).format('MMM. YYYY');
// }

function calcAcceptanceRate(acceptanceRate: string): Number {
  const split = acceptanceRate.split('/');
  const acceptancePaper = Number(split[0]);
  const submittedPaper = Number(split[1]);

  return Math.floor((acceptancePaper / submittedPaper) * 1000) / 10;
}
</script>

<template>
  <v-container>
    <v-container>
      <h2>著者情報 / Author information</h2>
      <a
        href="https://orcid.org/0000-0002-9292-2912"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="mr-2"
          alt="ORCID logo"
          src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png"
          width="16"
          height="16"
        />
        0000-0002-9292-2912
      </a>
    </v-container>

    <v-divider class="my-4" />

    <v-container>
      <h2>学術論文誌発表論文 / Journal paper</h2>

      <ol>
        <li v-for="paper in publications.journalPaper">
          <span v-for="(author, i) in paper.authors">
            {{ author }}<span v-if="i < paper.authors.length - 1">,&nbsp;</span
            ><span v-else>:&nbsp;</span>
          </span>

          <span>{{ paper.title }},&nbsp;</span>
          <span>{{ paper.journal }},&nbsp;</span>
          <span v-if="paper.volume">Vol. {{ paper.volume }},&nbsp;</span>
          <span v-if="paper.number">No. {{ paper.number }},&nbsp;</span>
          <span v-if="paper.issue">Issue {{ paper.issue }},&nbsp;</span>
          <span>pp. {{ paper.pageFrom }}&ndash;</span>
          <span>{{ paper.pageTo }},&nbsp;</span>
          <!-- <span>({{ formatDate(paper.date) }}).&nbsp;</span> -->
          <span>
            <span>[</span>
            <a :href="paper.url" target="_blank" rel="noopener noreferrer">
              {{ paper.publisher }}
            </a>
            <span>]</span>
          </span>
        </li>
      </ol>
    </v-container>

    <v-divider class="my-4" />

    <v-container>
      <h2>国際会議等発表論文 / International conference paper</h2>

      <ol>
        <li v-for="paper in publications.internationalConferencePaper">
          <span v-for="(author, i) in paper.authors">
            {{ author }}<span v-if="i < paper.authors.length - 1">,&nbsp;</span
            ><span v-else>:&nbsp;</span>
          </span>

          <span>{{ paper.title }},&nbsp;</span>
          <span>{{ paper.bookTitle }}</span>
          <span v-if="paper.series">&nbsp;({{ paper.series }})</span>
          <span>, pp. {{ paper.pageFrom }}&ndash;</span>
          <span>{{ paper.pageTo }},&nbsp;</span>
          <span>{{ paper.location }}&nbsp;</span>
          <!-- <span>({{ formatDate(paper.date) }}).&nbsp;</span> -->
          <span class="award">{{ paper.award }}&nbsp;</span>
          <span class="acceptance-rate" v-if="paper.acceptanceRate">
            ({{
              `Acceptance rate: ${paper.acceptanceRate}=${calcAcceptanceRate(
                paper.acceptanceRate
              )}%`
            }})&nbsp;
          </span>
          <span>
            <span>[</span>
            <a :href="paper.url" target="_blank" rel="noopener noreferrer">
              {{ paper.publisher }}
            </a>
            <span>]</span>
          </span>
        </li>
      </ol>
    </v-container>

    <v-divider class="my-4" />

    <v-container>
      <h2>国内研究会等発表論文 / Domestic conference paper</h2>

      <ol>
        <li v-for="paper in publications.domesticConferencePaper">
          <span v-for="(author, i) in paper.authors">
            {{ author }}<span v-if="i < paper.authors.length - 1">,&nbsp;</span
            ><span v-else>:&nbsp;</span>
          </span>

          <span>{{ paper.title }},&nbsp;</span>
          <span>{{ paper.conference }}</span>
          <span v-if="paper.series">&nbsp;({{ paper.series }})</span>
          <span v-if="paper.volume">,&nbsp;Vol. {{ paper.volume }}</span>
          <span v-if="paper.number">,&nbsp;No. {{ paper.number }}</span>
          <span v-if="paper.pageFrom != paper.pageTo">
            , pp.&nbsp;{{ paper.pageFrom }}&ndash;{{ paper.pageTo }},&nbsp;
          </span>
          <span v-else>, p.&nbsp;{{ paper.pageFrom }},&nbsp;</span>
          <span>{{ paper.location }}&nbsp;</span>
          <!-- <span>({{ formatDate(paper.date) }}).&nbsp;</span> -->
          <span class="award">{{ paper.award }}&nbsp;</span>
          <span v-if="paper.url">
            <span>[</span>
            <a :href="paper.url" target="_blank" rel="noopener noreferrer">
              {{ paper.publisher }}
            </a>
            <span>]</span>
          </span>
        </li>
      </ol>
    </v-container>

    <v-divider class="my-4" />

    <v-container>
      <h2>卒業論文 / Bachelor thesis</h2>
      <ol>
        <li>圧力センサ搭載ヘルメットを用いた本人認証手法の提案</li>
      </ol>
    </v-container>

    <v-container>
      <h2>修士論文 / Master thesis</h2>
      <ol>
        <li>Pulse Wave Generation Method for PPG by using Display</li>
      </ol>
    </v-container>
  </v-container>
</template>

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
