<template>
  <section class="works">
    <div class="container">
      <h2 class="section-title">つくったもの</h2>
      <ul>
        <template v-for="item in data">
          <item-parts
            :type="'work'"
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
  .works {

  }
</style>
