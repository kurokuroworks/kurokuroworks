<template>
  <div>
    <header-parts></header-parts>
    <section class="books-page">
      <div class="books-header">
        <div class="container">
          <div class="section-title">
            <h2>技術誌・同人誌</h2>
            <p>Books</p>
          </div>
        </div>
      </div>
      <div class="container">
        <ul class="item-container">
          <template v-for="item in books">
            <item-parts
              :type="'books'"
              :id="item.id"
              :href="item.href"
              :thumbnail="item.thumbnail"
              :title="item.title"
              :tag="item.tag"
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
      let booksData
      if (context.isClient && sessionStorage) {
        booksData = sessionStorage.getItem('booksData')
      }
      const queue = [
        booksData ? booksData : request.get(`${context.env.staticBaseUrl}/www/books.json`).then(res => res.text)
      ]
      return Promise.all(queue).then(results => {
        if (context.isClient && sessionStorage) {
          if (!booksData) sessionStorage.setItem('booksData', results[0])
        }
        return {
          books: JSON.parse(results[0])
        }
      })
    },
    data() {
      return {
        books: null
      }
    }
  }
</script>

<style lang="scss">
  .books-page {
    padding-top: 0;
    padding-bottom: 50px;
    .books-header {
      text-align: center;
      background-color: #555555;
      background-image: repeating-linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 1px, transparent 1px, transparent 4px);
      background-size: 6px 6px;
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
    }
    .item-container {
      display: flex;
      flex-wrap: wrap;
      margin-top: -10px;
      .item-parts {
        width: 50%;
        padding: 10px;
        .text {
          background-color: #ffffff;
        }
        @media (min-width: 735px) { // 720 + 15
          width: 180px;
        }
        @media (min-width:1095px) { // 1080 + 15
          width: 216px;
        }
      }
    }
  }
</style>
