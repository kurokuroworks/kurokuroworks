<template>
  <section class="books">
    <div class="cover">
      <img src="~assets/images/cover_books.jpg" />
    </div>
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
    .item-parts {
      width: 50%;
      max-width: 200px;
      padding: 10px;
    }
  }
</style>
