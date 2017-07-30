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
          <item-parts
            :type="'member'"
            :thumbnail="'#'"
            :title="'たいとる'"
            :meta="'めためためためた'"
            :description="'せつめいぶんせつめいぶんせつめいぶん'"
          ></item-parts>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import ItemParts from '~components/parts/item.vue'
export default {
  components: {
    ItemParts
  }
}
</script>

<style lang="scss">
  .abouts {

  }
</style>
