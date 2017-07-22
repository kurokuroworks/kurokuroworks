<template>
  <section class="books">
    <div class="container">
      <h2 class="section-title">かいたもの</h2>
      <ul>
        <template v-for="item in booksData">
          <item-parts
            :type="'book'"
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
  import booksData from '~assets/data/books.json'
  import ItemParts from '~components/parts/item.vue'
  export default {
    components: {
      ItemParts
    },
    data() {
      return {
        booksData
      }
    }
  }
</script>
