<template>
  <section class="articles">
    <div class="cover">
      <img src="~assets/images/cover_articles.jpg" />
    </div>
    <div class="container">
      <h2 class="section-title">Articles<span>記事・ブログ</span></h2>
      <ul class="item-container">
        <template v-for="item in data">
          <item-parts
            :type="'article'"
            :id="item.id"
            :href="item.href"
            :title="item.title"
            :meta="item.meta"
            :description="item.description"
          ></item-parts>
        </template>
        <item-parts
          :type="'article'"
          :title="'まだありません'"
          :description="'公開までしばらくおまちください'"
        ></item-parts>
      </ul>
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
      padding: 10px;
    }
    .item-parts {
      width: 100%;
      padding: 0;
    }
  }
</style>
