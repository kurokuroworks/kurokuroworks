<template>
  <section class="books">
    <div class="cover">
      <div class="base"></div>
      <div class="wrapper"></div>
    </div>
    <div class="container">
      <h2 class="section-title">Books<span>技術誌・同人誌</span></h2>
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
  .books {
    .cover {
      .base {
        background-image: url("~assets/images/cover_books.jpg");
      }
      .wrapper {
        background-image: linear-gradient(120deg, #fab900 0%, #f5784c 100%);
      }
    }
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
        @media screen and (min-width: 735px) { // 720 + 15
          width: 180px;
        }
      }
    }
  }
</style>
