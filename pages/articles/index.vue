<template>
  <div>
    <header-parts></header-parts>
    <section class="articles-page">
      <div class="articles-header">
        <div class="container">
          <div class="section-title">
            <h2>記事・お知らせ</h2>
            <p>Articles</p>
          </div>
          <nav class="articles-nav">
            <ul>
              <li @click="onSelectFilter('all')" :class="{'selected': this.selectedFilter === 'all'}">全て</li>
              <li @click="onSelectFilter('kawaii')" :class="{'selected': this.selectedFilter === 'kawaii'}">かわいい</li>
              <li @click="onSelectFilter('programming')" :class="{'selected': this.selectedFilter === 'programming'}">プログラミング</li>
              <li @click="onSelectFilter('travel')" :class="{'selected': this.selectedFilter === 'travel'}">おでかけ</li>
              <li @click="onSelectFilter('other')" :class="{'selected': this.selectedFilter === 'other'}">その他</li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="container">
        <template v-if="!filteredArticles.length">
          <p class="nothing-message">まだないみたいですん(´・ω・`)</p>
        </template>
        <ul class="item-container">
          <template v-for="item in filteredArticles">
            <item-parts
              :type="'articles'"
              :id="item.id"
              :href="item.href"
              :thumbnail="item.thumbnail"
              :title="item.title"
              :tag="item.tag"
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
    computed: {
      filteredArticles() {
        if (!this.articles) {
          return []
        }
        let targetTag = ''
        switch (this.selectedFilter) {
          case 'all':
            return this.articles;
          case 'kawaii':
            targetTag = 'かわいい'
            break
          case 'programming':
            targetTag = 'プログラミング'
            break
          case 'travel':
            targetTag = 'おでかけ'
            break
          case 'other':
            targetTag = 'その他'
            break
        }
        return this.articles.filter((item) => {
          return item.tag.split(/\s*,\s*/).indexOf(targetTag) !== -1
        })
      }
    },
    methods: {
      onSelectFilter(target) {
        this.selectedFilter = target;
      }
    },
    data() {
      return {
        articles: [],
        selectedFilter: 'all'
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
          articles: JSON.parse(results[0])
        }
      })
    }
  }
</script>

<style lang="scss">
  .articles-page {
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
            cursor: pointer;
            font-size: 20px;
            width: 180px;
            text-align: center;
            margin: 5px;
            padding: 5px 10px;
            border-bottom: 3px solid transparent;
            &.selected {
              border-bottom: 3px solid #ffffff;
              font-weight: bold;
            }
          }
        }
      }
    }
    .nothing-message {
      text-align: center;
      font-size: 20px;
      margin: 40px;
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
