<template>
  <li class="item-parts" :class="type">
    <a :href="href">
      <img class="thumbnail" :src="thumbnail">
      <h3 class="title">{{title}}</h3>
      <p class="meta">{{meta}}</p>
      <p class="description">{{description}}</p>
    </a>
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
