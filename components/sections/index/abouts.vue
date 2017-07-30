<template>
  <section class="abouts">
    <div class="container">
      <h2 class="section-title">About<span>サークルについて</span></h2>
      <div>
        <h3>"かわいい"をつくっています</h3>
        <p>サークルしょうかいサークルしょうかいサークルしょうかい</p>
      </div>
      <div>
        <h3>なかのひと</h3>
        <ul class="item-container">
          <template v-for="item in data">
            <item-parts
              :type="'abouts'"
              :href="item.href"
              :thumbnail="item.thumbnail"
              :title="item.title"
              :meta="item.meta"
              :description="item.description"
            ></item-parts>
          </template>
        </ul>
      </div>
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
  .abouts {
    .item-parts {
      width: 50%;
      padding: 10px;
    }
  }
</style>
