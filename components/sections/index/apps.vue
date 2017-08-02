<template>
  <section class="apps">
    <div class="container">
      <h2 class="section-title">Apps<span>公開中のアプリ</span></h2>
      <ul class="item-container">
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
  .apps {

  }
</style>
