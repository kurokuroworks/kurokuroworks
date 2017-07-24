<template>
  <section>
    <div class="container">
      <div v-html="content"></div>
    </div>
  </section>
</template>

<script>
  import request from 'superagent'
  import marked from 'marked'
  import articlesData from '~assets/data/articles.json'
  export default {
    validate({ params }) {
      // MEMO: assets/data/articles に存在する id と一致しない場合は 404
      return !!articlesData.find(item => {
        return item.id === params.id
      })
    },
    async asyncData ({ params }) {
      // MEMO: static/articles/*.md を取得して HTML にレンダリングして出力
      const baseUrl = `${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
      let { text } = await request.get(`${baseUrl}/articles/${params.id}.md`)
      return { content: marked(text) }
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
