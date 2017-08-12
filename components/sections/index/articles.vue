<template>
  <section class="articles">
    <div class="container">
      <div class="section-title">
        <h2>記事・お知らせ</h2>
        <p>Articles</p>
      </div>
      <ul class="item-container">
        <item-parts
          :type="'articles'"
          :id="pickup.id"
          :href="pickup.href"
          :thumbnail="pickup.thumbnail"
          :title="pickup.title"
          :meta="pickup.meta"
          :description="pickup.description"
        ></item-parts>
        <li class="side-container">
          <div class="ads">
            <p>middle rectangle ads 300x250</p>
          </div>
          <div class="ads">
            <p>middle rectangle ads 300x250</p>
          </div>
        </li>
        <template v-for="item in articles">
          <item-parts
            :type="'articles'"
            :id="item.id"
            :href="item.href"
            :thumbnail="item.thumbnail"
            :title="item.title"
            :meta="item.meta"
            :description="item.description"
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
  import slice from 'lodash.slice'
  import ItemParts from '~components/parts/item.vue'
  import ButtonParts from '~components/parts/button.vue'
  export default {
    props: ['data'],
    components: {
      ItemParts,
      ButtonParts
    },
    computed: {
      pickup() {
        return this.data[0]
      },
      articles() {
        return slice(this.data, 1, 7)
      }
    }
  }
</script>

<style lang="scss">
  .articles {
    .item-container {
      display: flex;
      flex-wrap: wrap;
      margin-top: -10px;
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
          &:first-child {
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
