<template>
  <div class="book-overview-section">
    <div class="container">
      <div class="book-overview" v-html="data"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="scss">
  .book-overview-section {
    margin-bottom: 50px;
  }
</style>
