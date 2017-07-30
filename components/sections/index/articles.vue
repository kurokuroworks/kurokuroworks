<template>
  <section class="articles cover">
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
    &.cover {
      background-image: url("~assets/images/galaxy.jpg");
    }
    .item-container {
      padding: 10px;
    }
    .item-parts {
      width: 100%;
      padding: 0;
    }
  }
</style>
