<template>
  <section class="books">
    <div class="container">
      <div class="section-title">
        <h2>技術誌・同人誌</h2>
        <p>Books</p>
      </div>
      <ul class="item-container">
        <template v-for="item in data">
          <item-parts
            :type="'book'"
            :id="item.id"
            :href="item.href"
            :thumbnail="item.thumbnail"
            :title="item.title"
            :meta="item.meta"
          ></item-parts>
        </template>
      </ul>
      <button-parts
        :href="'#'"
        :message="'もっとみる'"
      ></button-parts>
    </div>
  </section>
</template>

<script>
  import ItemParts from '~components/parts/item.vue'
  import ButtonParts from '~components/parts/button.vue'
  export default {
    props: ['data'],
    components: {
      ItemParts,
      ButtonParts
    }
  }
</script>

<style lang="scss">
  .books {
    .item-container {
      display: flex;
      flex-wrap: wrap;
      margin-top: -10px;
      .item-parts {
        width: 50%;
        padding: 10px;
        .text {
          background-color: #ffffff;
        }
        @media (min-width: 735px) { // 720 + 15
          width: 180px;
        }
        @media (min-width:1095px) {
          width: 216px;
        }
      }
    }
  }
</style>
