<template>
  <section class="apps">
    <div class="cover">
      <img src="~assets/images/cover_apps.jpg" />
    </div>
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
    .item-parts {
      width: 100%;
      max-width: 333px;
      padding: 10px;
    }
  }
</style>
