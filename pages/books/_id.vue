<template>
  <div>
    <header-parts></header-parts>
    <div class="container">
      <div class="meta">
        <h1 class="meta-title">{{meta.title}}</h1>
        <p class="meta-description">{{meta.description}}</p>
        <ul class="meta-tag">
          <li v-for="item in splittedMetaTag">{{item}}</li>
        </ul>
      </div>
      <book-description-section :data="bookDescription"></book-description-section>
      <book-sample-section :data="bookSample"></book-sample-section>
      <book-overview-section :data="bookOverview"></book-overview-section>
    </div>
    <footer-parts></footer-parts>
  </div>
</template>

<script>
  import request from 'superagent'
  import marked from 'marked'
  import HeaderParts from '~components/parts/header.vue'
  import FooterParts from '~components/parts/footer.vue'
  import BookDescriptionSection from '~components/sections/books/book-description.vue'
  import BookSampleSection from '~components/sections/books/book-sample.vue'
  import BookOverviewSection from '~components/sections/books/book-overview.vue'
  export default {
    components: {
      HeaderParts,
      FooterParts,
      BookDescriptionSection,
      BookSampleSection,
      BookOverviewSection
    },
    computed: {
      splittedMetaTag() {
        return this.meta.tag.split(',')
      }
    },
    validate(context) {
      let books
      if (context.isClient && sessionStorage) {
        books = JSON.parse(sessionStorage.getItem(`articlesData`))
      }
      // 記事一覧が sessionStorage に無ければチェックしない
      // (直接リンクやGooglebot相手なら事前レンダリング結果で404を返せるのでチェック不要）
      if (!books) {
        return true
      }
      // articles に存在する id と一致しない場合は 404
      return !!books.find(item => {
        return item.id === context.params.id
      })
    },
    asyncData(context) {
      let booksData, bookDescription, bookSample, bookOverview
      if (context.isClient && sessionStorage) {
        booksData = sessionStorage.getItem('booksData')
        bookDescription = sessionStorage.getItem(`books/${context.params.id}/description`)
        bookSample = sessionStorage.getItem(`books/${context.params.id}/sample`)
        bookOverview = sessionStorage.getItem(`books/${context.params.id}/overview`)
      }
      const queue = [
        booksData ? booksData : request.get(`${context.env.staticBaseUrl}/www/books.json`).then(res => res.text),
        bookDescription ? bookDescription : request.get(`${context.env.staticBaseUrl}/www/books/${context.params.id}/description.md`).then(res => res.text),
        bookSample ? bookSample : request.get(`${context.env.staticBaseUrl}/www/books/${context.params.id}/sample.md`).then(res => res.text),
        bookOverview ? bookOverview : request.get(`${context.env.staticBaseUrl}/www/books/${context.params.id}/overview.md`).then(res => res.text)
      ]
      return Promise.all(queue).then(results => {
        // sessionStorage 保存
        if (context.isClient && sessionStorage) {
          if (!booksData) sessionStorage.setItem('booksData', results[0])
          if (!bookDescription) sessionStorage.setItem(`books/${context.params.id}/description`, results[1])
          if (!bookSample) sessionStorage.setItem(`books/${context.params.id}/sample`, results[2])
          if (!bookOverview) sessionStorage.setItem(`books/${context.params.id}/overview`, results[3])
        }
        return {
          meta: JSON.parse(results[0]).filter(item => {
            return item.id === context.params.id
          })[0],
          bookDescription: marked(results[1]),
          bookSample: marked(results[2]),
          bookOverview: marked(results[3]),
        }
      })
    },
    data() {
      return {
        //
      }
    }
  }
</script>

<style lang="scss">

</style>
