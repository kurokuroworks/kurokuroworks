<template>
  <section class="articles">
    <div class="container">
      <h2 class="section-title">Articles<span>記事・ブログ</span></h2>
      <ul class="item-container">
        <item-parts
          :type="'pickup'"
          :id="'example'"
          :href="'example'"
          :thumbnail="'https://static.kurokuroworks.net/www/dummy/dummy_16x9.jpg'"
          :title="'example'"
          :meta="'example'"
          :description="'example'"
        ></item-parts>
        <li class="side-container">
          <div class="ads">
            <p>middle rectangle ads 300x250</p>
          </div>
          <div class="ads">
            <p>middle rectangle ads 300x250</p>
          </div>
        </li>
        <template v-for="item in data">
          <item-parts
            :type="'article'"
            :id="item.id"
            :href="item.href"
            :thumbnail="item.thumbnail"
            :title="item.title"
            :meta="item.meta"
            :description="item.description"
          ></item-parts>
        </template>
      </ul>
      <div>
        <p>もっと見る</p>
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
  .articles {
    .item-container {
      display: flex;
      flex-wrap: wrap;
      .item-parts {
        width: 100%;
        padding: 10px;
        .thumbnail {
          width: 100%;
        }
        .text {
          background-color: #ffffff;
        }
        @media screen and (min-width: 735px) { // 720 + 15
          width: 360px;
          &.pickup {
            width: 720px;
          }
        }
      }
      .side-container {
        width: 100%;
        padding: 10px 0 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .ads {
          width: 300px;
          height: 250px;
          background-color: #333234;
          margin: 0 10px 10px;
        }
        @media (min-width:1095px) {
          width: 360px;
        }
      }
    }
  }
</style>
