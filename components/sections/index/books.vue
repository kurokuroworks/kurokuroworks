<template>
  <section class="books">
    <div class="container">
      <h2 class="section-title">かいたもの</h2>
      <ul>
        <template v-for="item in data">
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

  }
</style>
