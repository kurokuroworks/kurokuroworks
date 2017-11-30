<template>
  <section class="index-articles-section">
    <div class="container">
      <div class="section-title">
        <h2>記事・お知らせ</h2>
        <p>Articles</p>
      </div>
      <ul class="item-container">
        <template v-for="item in articles">
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
      <button-parts
        :href="'/articles'"
        :message="'もっとみる'"
      ></button-parts>
    </div>
  </section>
</template>

<script>
  import slice from 'lodash.slice'
  import ItemParts from '~components/parts/item.vue'
  import ButtonParts from '~components/parts/button.vue'
  import AdvertisementParts from '~components/parts/advertisement.vue'
  export default {
    props: ['data'],
    components: {
      ItemParts,
      ButtonParts,
      AdvertisementParts
    },
    computed: {
      articles() {
        return slice(this.data, 0, 6)
      }
    }
  }
</script>

<style lang="scss">
  .index-articles-section {
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
