<template>
  <section class="articles">
    <div class="container">
      <h2 class="section-title">にっき</h2>
      <ul>
        <template v-for="item in articlesData">
          <item-parts
            :type="'article'"
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
  import articlesData from '~assets/data/articles.json'
  import ItemParts from '~components/parts/item.vue'
  export default {
    components: {
      ItemParts
    },
    data() {
      return {
        articlesData
      }
    }
  }
</script>
