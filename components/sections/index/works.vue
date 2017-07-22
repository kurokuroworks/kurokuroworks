<template>
  <section class="works">
    <div class="container">
      <h2 class="section-title">つくったもの</h2>
      <ul>
        <template v-for="item in worksData">
          <item-parts
            :type="'work'"
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
  import worksData from '~assets/data/works.json'
  import ItemParts from '~components/parts/item.vue'
  export default {
    components: {
      ItemParts
    },
    data() {
      return {
        worksData
      }
    }
  }
</script>

<style lang="scss">
  .works {

  }
</style>
