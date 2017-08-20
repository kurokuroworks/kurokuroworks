<template>
  <div>
    <header-parts></header-parts>
    <section class="articles">
      <div class="container">
        <div class="section-title">
          <h2>記事・お知らせ</h2>
          <p>Articles</p>
        </div>
        <ul class="item-container">
          <item-parts
            :type="'articles'"
            :id="pickup.id"
            :href="pickup.href"
            :thumbnail="pickup.thumbnail"
            :title="pickup.title"
            :meta="pickup.meta"
            :description="pickup.description"
          ></item-parts>
          <li class="side-container">
            <p class="sticker">スポンサーリンク</p>
            <advertisement-parts></advertisement-parts>
          </li>
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
    <footer-parts></footer-parts>
  </div>
</template>

<script>
  import slice from 'lodash.slice'
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
    computed: {
      pickup() {
        return this.articlesData[0]
      },
      articles() {
        return slice(this.articlesData, 1, 7)
      }
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
          articlesData: JSON.parse(results[0])
        }
      })
    },
    data() {
      return {
        articlesData: null
      }
    }
  }
</script>

<style lang="scss">
  .articles {
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
          &:first-child {
            width: 720px;
          }
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
