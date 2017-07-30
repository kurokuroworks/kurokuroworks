<template>
  <section class="books cover">
    <div class="container">
      <h2 class="section-title">Books<span>技術書・同人誌</span></h2>
      <ul class="item-container">
        <template v-for="item in data">
          <item-parts
            :type="'book'"
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
  .books {
    &.cover {
      background-image: url("~assets/images/cover_books.jpg");
    }
    .item-parts {
      width: 50%;
      padding: 10px;
    }
  }
</style>
