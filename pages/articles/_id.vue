<template>
  <div>
    <header-parts></header-parts>
    <div class="container">
      <div v-html="content"></div>
    </div>
    <footer-parts></footer-parts>
  </div>
</template>

<script>
  import request from 'superagent'
  import marked from 'marked'
  import HeaderParts from '~components/parts/header.vue'
  import FooterParts from '~components/parts/footer.vue'
  export default {
    components: {
      HeaderParts,
      FooterParts
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
      let article
      if (context.isClient && sessionStorage) {
        article = sessionStorage.getItem(`articles/${context.params.id}`)
      }
      return Promise.resolve().then(() => {
        return article ? article : request.get(`${context.env.staticBaseUrl}/www/articles/${context.params.id}.md`).then(res => res.text)
      }).then((res) => {
        if (context.isClient && sessionStorage) {
          if (!article) sessionStorage.setItem(`articles/${context.params.id}`, res)
        }
        return { content: marked(res) }
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
