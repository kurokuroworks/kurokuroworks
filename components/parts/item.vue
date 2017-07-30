<template>
  <li class="item-parts" :class="type">
    <div class="block">
      <template v-if="id">
        <nuxt-link :to="href">
          <img class="thumbnail" :src="thumbnail">
          <h3 class="title">{{title}}</h3>
          <p class="meta">{{meta}}</p>
          <p class="description">{{description}}</p>
        </nuxt-link>
      </template>
      <template v-else-if="href">
        <a :href="href">
          <img class="thumbnail" :src="thumbnail">
          <h3 class="title">{{title}}</h3>
          <p class="meta">{{meta}}</p>
          <p class="description">{{description}}</p>
        </a>
      </template>
      <template v-else>
        <div>
          <img class="thumbnail" :src="thumbnail">
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
    .block {
      width: 100%;
      background-color: #ffffff;
      border: 1px solid #f0f0f0;
      padding: 10px;
      &:last-child {
        border-bottom: 1px solid #f0f0f0;
      }
    }
  }
</style>
