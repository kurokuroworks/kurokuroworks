<template>
  <li class="item-parts" :class="type">
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
  </li>
</template>

<script>
  export default {
    props: ['type', 'id', 'href', 'thumbnail', 'title', 'meta', 'description']
  }
</script>

<style lang="scss">
  .item-parts {
    background-color: #ffffff;
    border-top: 1px solid #f0f0f0;
    padding: 15px 12px;
    &:last-child {
      border-bottom: 1px solid #f0f0f0;
    }
  }
</style>
