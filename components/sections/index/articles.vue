<template>
  <section class="articles">
    <div class="container">
      <h2 class="section-title">にっき</h2>
      <ul>
        <item-parts
          :type="'article'"
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
import ItemParts from '~components/parts/item.vue'
export default {
  components: {
    ItemParts
  }
}
</script>
