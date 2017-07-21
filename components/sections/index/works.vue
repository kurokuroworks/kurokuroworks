<template>
  <section class="works">
    <div class="container">
      <h2 class="section-title">つくったもの</h2>
      <ul>
        <item-parts
          :type="'work'"
          :href="'#'"
          :thumbnail="'#'"
          :title="'たいとる'"
          :meta="'めためためためた'"
          :description="'せつめいぶんせつめいぶんせつめいぶん'"
        ></item-parts>
      </ul>
    </div>
  </section>
</template>

<script>
import request from 'superagent'
import ItemParts from '~components/parts/item.vue'
export default {
  components: {
    ItemParts
  },
  mounted() {

  }
}
</script>
