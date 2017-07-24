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
  import articles from '~assets/data/articles.json'
  export default {
    validate({ params }) {
      // assets/static/articles に存在する id と一致しない場合は 404
      return !!articles.find(item => {
        return item.id === params.id
      })
    },
    async asyncData (context) {
      // NOTICE
      // static のリソースを更新した時は事前レンダリングしたHTMLも更新する必要がある。
      // Nuxt.js の事前レンダリングは非同期で取得した内容を書き込んでいるので、リソース側が更新されても反映されないのが原因。
      // 直接リンクから遷移する場合や、GoogleBotからのアクセスの場合に表示内容が古いままとなってしまうので注意。
      // (きっとなんかいい方法があると思うけど初回アクセス時の速度を考えたらトレードオフな気もする)

      // markdown を取得して HTML にレンダリングして出力
      let { text } = await request.get(`${context.env.staticBaseUrl}/articles/${context.params.id}.md`)
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
