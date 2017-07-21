<template>
  <section class="books">
    <div class="container">
      <h2 class="section-title">かいたもの</h2>
      <ul>
        <item-parts
          :type="'book'"
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
