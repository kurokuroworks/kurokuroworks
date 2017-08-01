<template>
  <li class="item-parts" :class="type">
    <div class="block">
      <template v-if="id">
        <nuxt-link :to="href">
          <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
          <div class="inner">
            <h3 class="title">{{title}}</h3>
            <p class="meta">{{meta}}</p>
            <p class="description">{{description}}</p>
          </div>
        </nuxt-link>
      </template>
      <template v-else-if="href">
        <a :href="href">
          <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
          <div class="inner">
            <h3 class="title">{{title}}</h3>
            <p class="meta">{{meta}}</p>
            <p class="description">{{description}}</p>
          </div>
        </a>
      </template>
      <template v-else>
        <div>
          <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
          <div class="inner">
            <h3 class="title">{{title}}</h3>
            <p class="meta">{{meta}}</p>
            <p class="description">{{description}}</p>
          </div>
        </div>
      </template>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['type', 'id', 'href', 'thumbnail', 'title', 'meta', 'description']
  }
</script>

<style lang="scss">
  .item-parts {
    .block {
      width: 100%;
      background-color: #ffffff;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
      margin-bottom: 2px;
    }
    a {
      text-decoration: none;
      display: block;
    }
    .thumbnail {
      display: block;
    }
    .inner {
      padding: 10px;
    }
    .title {
      font-size: 17px;
      line-height: 18px;
      padding: 1px 0 4px;
      font-weight: bold;
    }
    .meta {
      color: #417793;
    }
    .description {
      color: #777777;
    }
    .meta, .description {
      line-height: 14px;
      padding-bottom: 2px;
    }
  }
</style>
