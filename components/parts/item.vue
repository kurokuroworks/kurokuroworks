<template>
  <li class="item-parts" :class="type">
    <div>
      <template v-if="id">
        <nuxt-link :to="`/${type}/${id}`">
          <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
          <div class="text">
            <h4 class="title">{{title}}</h4>
            <p class="description">{{description}}</p>
            <ul class="tag">
              <li v-for="item in splittedMetaTag">{{item}}</li>
            </ul>
          </div>
        </nuxt-link>
      </template>
      <template v-else-if="href">
        <a :href="href">
          <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
          <div class="text">
            <h4 class="title">{{title}}</h4>
            <p class="description">{{description}}</p>
            <ul class="tag">
              <li v-for="item in splittedMetaTag">{{item}}</li>
            </ul>
          </div>
        </a>
      </template>
      <template v-else>
        <div>
          <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
          <div class="text">
            <h4 class="title">{{title}}</h4>
            <p class="description">{{description}}</p>
            <ul class="tag">
              <li v-for="item in splittedMetaTag">{{item}}</li>
            </ul>
          </div>
        </div>
      </template>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['type', 'id', 'href', 'thumbnail', 'title', 'tag', 'description'],
    computed: {
      splittedMetaTag() {
        return this.tag.split(',')
      }
    }
  }
</script>

<style lang="scss">
  .item-parts {
    .thumbnail {
      display: block;
    }
    .text {
      padding: 10px;
      .title {
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 3px;
      }
      .tag {
        display: flex;
        flex-wrap: wrap;
        li {
          border: 1px solid #4183C4;
          border-radius: 1px;
          padding: 0 5px;
          margin: 1px 4px 1px 0;
          color: #4183C4;
          font-size: 14px;
        }
      }
      .tag, .description {
        font-size: 15px;
        line-height: 18px;
        margin-bottom: 3px;
      }
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
    }
  }
</style>
