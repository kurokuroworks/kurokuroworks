<template>
  <li class="item-parts" :class="type">
    <nuxt-link :to="href">
      <img class="thumbnail" :src="thumbnail">
      <h3 class="title">{{title}}</h3>
      <p class="meta">{{meta}}</p>
      <p class="description">{{description}}</p>
    </nuxt-link>
  </li>
</template>

<script>
  export default {
    props: ['type', 'href', 'thumbnail', 'title', 'meta', 'description']
  }
</script>

<style lang="scss">
  .item-parts {
    //
    &.work {
      //
    }
    &.book {
      //
    }
    &.article {
      //
    }
    &.member {
      //
    }
  }
</style>
