<template>
  <div>
    <header-parts></header-parts>
    <section class="articles">
      <div class="articles-header">
        <div class="container">
          <div class="section-title">
            <h2>記事・お知らせ</h2>
            <p>Articles</p>
          </div>
          <nav class="articles-nav">
            <ul>
              <li class="selected">全て</li>
              <li>かわいい</li>
              <li>プログラミング</li>
              <li>おでかけ</li>
              <li>その他</li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="container">
        <ul class="item-container">
          <template v-for="item in articles">
            <item-parts
              :type="'articles'"
              :id="item.id"
              :href="item.href"
              :thumbnail="item.thumbnail"
              :title="item.title"
              :meta="item.meta"
              :description="item.description"
            ></item-parts>
          </template>
        </ul>
      </div>
    </section>
    <advertisement-parts></advertisement-parts>
    <footer-parts></footer-parts>
  </div>
</template>

<script>
  import request from 'superagent'
  import ItemParts from '~components/parts/item.vue'
  import HeaderParts from '~components/parts/header.vue'
  import FooterParts from '~components/parts/footer.vue'
  import AdvertisementParts from '~components/parts/advertisement.vue'
  export default {
    components: {
      AdvertisementParts,
      ItemParts,
      HeaderParts,
      FooterParts
    },
    asyncData(context) {
      let articlesData
      if (context.isClient && sessionStorage) {
        articlesData = sessionStorage.getItem('articlesData')
      }
      const queue = [
        articlesData ? articlesData : request.get(`${context.env.staticBaseUrl}/www/articles.json`).then(res => res.text)
      ]
      return Promise.all(queue).then(results => {
        if (context.isClient && sessionStorage) {
          if (!articlesData) sessionStorage.setItem('articlesData', results[0])
        }
        return {
          articles: JSON.parse(results[0])
        }
      })
    },
    data() {
      return {
        articles: null
      }
    }
  }
</script>

<style lang="scss">
  .articles {
    padding-top: 0;
    padding-bottom: 50px;
    .articles-header {
      text-align: center;
      background-color: #444444;
      background-size: cover;
      background-repeat: no-repeat;
      color: #ffffff;
      .section-title {
        padding: 100px 0 40px;
        text-align: center;
        color: #ffffff;
        h2 {
          font-size: 32px;
          line-height: 40px;
        }
        p {
          font-size: 20px;
          line-height: 30px;
        }
      }
      .articles-nav {
        margin: 20px 10px;
        color: #ffffff;
        ul {
          display: flex;
          justify-content: center;
          li {
            font-size: 20px;
            width: 180px;
            text-align: center;
            margin: 5px;
            padding: 5px 10px;
            border-bottom: 3px solid transparent;
            &.selected {
              border-bottom: 3px solid #ffffff;
            }
          }
        }
      }
    }
    .item-container {
      display: flex;
      flex-wrap: wrap;
      margin-top: -10px;
      .item-parts {
        width: 100%;
        padding: 10px;
        .thumbnail {
          width: 100%;
        }
        .text {
          background-color: #ffffff;
        }
        @media screen and (min-width: 735px) { // 720 + 15
          width: 360px;
        }
      }
    }
  }
</style>
