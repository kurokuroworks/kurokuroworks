<template>
  <section class="works cover">
    <div class="container">
      <h2 class="section-title">Works<span>公開中のアプリ</span></h2>
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
  .works {
    &.cover {
      background-image: url("~assets/images/cover_works.jpg");
    }
    .item-parts {
      width: 100%;
      padding: 10px;
    }
  }
</style>
