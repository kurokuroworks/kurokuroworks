<template>
  <section class="articles">
    <div class="container">
      <h2 class="section-title">Articles<span>記事・ブログ</span></h2>
      <ul class="item-container">
        <template v-for="item in data">
          <item-parts
            :type="'article'"
            :id="item.id"
            :href="item.href"
            :thumbnail="item.thumbnail"
            :title="item.title"
            :meta="item.meta"
            :description="item.description"
          ></item-parts>
        </template>
      </ul>
      <div>
        <p>もっと見る</p>
      </div>
    </div>
  </section>
</template>

<script>
  import ItemParts from '~components/parts/item.vue'
  export default {
    props: ['data'],
    components: {
      ItemParts
    }
  }
</script>

<style lang="scss">
  .articles {
    .item-container {
      display: flex;
      flex-wrap: wrap;
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
