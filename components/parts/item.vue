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
      border: 1px solid #f0f0f0;
    }
    a {
      text-decoration: none;
      display: block;
    }
    .thumbnail {
      display: block;
    }
    .inner {
      padding: 8px 10px;
    }
    .title {
      font-size: 17px;
      font-weight: bold;
    }
    .meta, .description {
      font-size: 12px;
    }
  }
</style>
