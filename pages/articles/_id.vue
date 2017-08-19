<template>
  <div>
    <header-parts></header-parts>
    <ArticleSection :content="content" :meta="meta" />
    <footer-parts></footer-parts>
  </div>
</template>

<script>
  import request from 'superagent'
  import marked from 'marked'
  import HeaderParts from '~components/parts/header.vue'
  import FooterParts from '~components/parts/footer.vue'
  import ArticleSection from '~components/sections/articles/article.vue'
  export default {
    components: {
      HeaderParts,
      FooterParts,
      ArticleSection
    },
    validate(context) {
      let articles
      if (context.isClient && sessionStorage) {
        articles = JSON.parse(sessionStorage.getItem(`articlesData`))
      }
      // 記事一覧が sessionStorage に無ければチェックしない
      // (直接リンクやGooglebot相手なら事前レンダリング結果で404を返せるのでチェック不要）
      if (!articles) {
        return true
      }
      // articles に存在する id と一致しない場合は 404
      return !!articles.find(item => {
        return item.id === context.params.id
      })
    },
    asyncData(context) {
      let articlesData, article
      if (context.isClient && sessionStorage) {
        articlesData = sessionStorage.getItem(`articlesData`)
        article = sessionStorage.getItem(`articles/${context.params.id}`)
      }
      const queue = [
        articlesData ? articlesData : request.get(`${context.env.staticBaseUrl}/www/articles.json`).then(res => res.text),
        article ? article : request.get(`${context.env.staticBaseUrl}/www/articles/${context.params.id}/${context.params.id}.md`).then(res => res.text)
      ]
      return Promise.all(queue).then(results => {
        if (context.isClient && sessionStorage) {
          if (!articlesData) sessionStorage.setItem('articlesData', JSON.stringify(results[0]))
          if (!article) sessionStorage.setItem(`articles/${context.params.id}`, results[1])
        }
        return {
          meta: JSON.parse(results[0]).filter(item => {
            return item.id === context.params.id
          })[0],
          content: marked(results[1])
        }
      })
    },
    data() {
      return {
        content: null,
        meta: null
      }
    }
  }
</script>

<style lang="scss">

</style>
