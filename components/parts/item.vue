<template>
  <li class="item-parts" :class="type">
    <div>
      <template v-if="id">
        <nuxt-link :to="href">
          <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
          <div class="text">
            <h4 class="title">{{title}}</h4>
            <p class="meta">{{meta}}</p>
            <p class="description">{{description}}</p>
          </div>
        </nuxt-link>
      </template>
      <template v-else-if="href">
        <a :href="href">
          <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
          <div class="text">
            <h4 class="title">{{title}}</h4>
            <p class="meta">{{meta}}</p>
            <p class="description">{{description}}</p>
          </div>
        </a>
      </template>
      <template v-else>
        <div>
          <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
          <div class="text">
            <h4 class="title">{{title}}</h4>
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
    .thumbnail {
      display: block;
    }
    .text {
      padding: 5px;
      h4 {
        font-weight: bold;
        font-size: 18px;
      }
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
    }
  }
</style>
