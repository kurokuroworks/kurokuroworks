<template>
  <li class="item-parts" :class="type">
    <div class="block">
      <template v-if="id">
        <nuxt-link :to="href">
          <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
          <h3 class="title">{{title}}</h3>
          <p class="meta">{{meta}}</p>
          <p class="description">{{description}}</p>
        </nuxt-link>
      </template>
      <template v-else-if="href">
        <a :href="href">
          <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
          <h3 class="title">{{title}}</h3>
          <p class="meta">{{meta}}</p>
          <p class="description">{{description}}</p>
        </a>
      </template>
      <template v-else>
        <div>
          <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
          <h3 class="title">{{title}}</h3>
          <p class="meta">{{meta}}</p>
          <p class="description">{{description}}</p>
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
    a {
      text-decoration: none;
    }
    .block {
      width: 100%;
      background-color: #ffffff;
      border: 1px solid #f0f0f0;
      padding: 10px;
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
