<template>
  <div>
    <header-parts></header-parts>
    <section class="article-section">
      <div class="cover">
        <img :src="meta.thumbnail">
      </div>
      <div class="container">
        <div class="paper">
          <div class="meta">
            <h1 class="meta-title">{{meta.title}}</h1>
            <p class="meta-description">{{meta.description}}</p>
            <ul class="meta-tag">
              <li v-for="item in splittedMetaTag">{{item}}</li>
            </ul>
          </div>
          <advertisement-parts></advertisement-parts>
          <div class="content" v-html="content"></div>
          <advertisement-parts></advertisement-parts>
        </div>
      </div>
    </section>
    <footer-parts></footer-parts>
  </div>
</template>

<script>
  import request from 'superagent'
  import marked from 'marked'
  import HeaderParts from '~components/parts/header.vue'
  import FooterParts from '~components/parts/footer.vue'
  import AdvertisementParts from '~components/parts/advertisement.vue'
  export default {
    components: {
      AdvertisementParts,
      HeaderParts,
      FooterParts
    },
    computed: {
      splittedMetaTag() {
        return this.meta.meta.split(',')
      }
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
          if (!articlesData) sessionStorage.setItem('articlesData', results[0])
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
  .article-section {
    padding-top: 0;
    .cover {
      position: relative;
      z-index: 0;
      left: 0;
      right: 0;
      margin-bottom: -80px;
      @media screen and (min-width: 735px) { // 720 + 15
        margin-bottom: -100px;
      }
      @media screen and (min-width: 1095px) { // 1080 + 15
        margin-bottom: -300px;
      }
      img {
        width: 100%;
      }
    }
    .paper {
      position: relative;
      padding-bottom: 20px;
      margin: 10px;
      z-index: 1;
      background-color: #ffffff;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    }
    .meta {
      text-align: center;
      padding: 80px 0 40px;
      .meta-title {
        font-size: 30px;
        color: #444444;
      }
      .meta-description {
        font-size: 22px;
        padding: 10px;
      }
      .meta-tag {
        display: flex;
        justify-content: center;
        li {
          border: 1px solid #4183C4;
          border-radius: 1px;
          padding: 0 5px;
          margin: 1px 4px 1px 0;
          color: #4183C4;
          font-size: 14px;
        }
      }
      @media screen and (min-width: 735px) { // 720 + 15
        .meta-title {
          font-size: 40px;
        }
      }
    }
    .content {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      a {
        color: #4183C4;
      }
      h1, h2, h3 {
        margin: 20px 0 10px;
        padding: 0;
        cursor: text;
        position: relative;
      }
      h1 {
        display: none;
      }
      h2 {
        margin-top: 50px;
        font-size: 26px;
        color: #444444;
      }
      h3 {
        font-size: 18px;
      }
      p, blockquote, ul, ol, dl, li, table, pre {
        margin: 15px 0;
        font-size: 18px;
        line-height: 23px;
      }
      hr {
        background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENDRjNBN0E2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENDRjNBN0I2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0NGM0E3ODY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0NGM0E3OTY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqqezsUAAAAfSURBVHjaYmRABcYwBiM2QSA4y4hNEKYDQxAEAAIMAHNGAzhkPOlYAAAAAElFTkSuQmCC) repeat-x 0 0;
        border: 0 none;
        color: #cccccc;
        height: 4px;
        padding: 0;
      }
      ul, ol {
        padding-left: 30px;
      }
      dl {
        padding: 0;
      }
      dl dt {
        font-size: 14px;
        font-weight: bold;
        font-style: italic;
        padding: 0;
        margin: 15px 0 5px;
      }
      dl dd {
        margin: 0 0 15px;
        padding: 0 15px;
      }
      blockquote {
        border-left: 4px solid #dddddd;
        padding: 0 15px;
        color: #777777;
      }
      table {
        padding: 0;
      }
      table tr {
        border-top: 1px solid #cccccc;
        background-color: white;
        margin: 0;
        padding: 0;
      }
      table tr:nth-child(2n) {
        background-color: #f8f8f8;
      }
      table tr th {
        font-weight: bold;
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }
      table tr td {
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }
      img {
        max-width: 100%;
        margin: 10px 0 20px;
      }
      code, tt {
        margin: 0 2px;
        padding: 0 5px;
        white-space: nowrap;
        border: 1px solid #eaeaea;
        background-color: #f8f8f8;
        border-radius: 3px;
        font-size: 16px;
        font-family: "Courier New", sans-serif;
      }
      pre code {
        margin: 0;
        padding: 0;
        white-space: pre;
        border: none;
        background: transparent;
      }
      pre {
        background-color: #f8f8f8;
        border: 1px solid #cccccc;
        font-size: 13px;
        line-height: 19px;
        overflow: auto;
        padding: 6px 10px;
        border-radius: 3px;
      }
      pre code, pre tt {
        background-color: transparent;
        border: none;
      }
    }
  }
</style>
