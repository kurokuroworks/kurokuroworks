<template>
  <div>
    <header-parts></header-parts>
    <section class="articles">
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
            <li>旅行</li>
            <li>その他</li>
          </ul>
        </nav>
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
    padding-top: 50px;
    padding-bottom: 50px;
    .section-title {
      text-align: center;
      margin: 30px 10px;
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
      background-color: #444444;
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
      .side-container {
        .sticker {
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: 12px;
        }
        position: relative;
        background-color: #ffffff;
        width: 100%;
        margin: 10px 0;
        padding-bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        @media (min-width:1095px) {
          width: 360px;
        }
      }
    }
  }
</style>
