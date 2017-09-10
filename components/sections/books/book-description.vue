<template>
  <div class="book-description-section">
    <img class="book-description-section-thumbnail" :src="image">
    <div class="book-description-section-data" v-html="data"></div>
  </div>
</template>

<script>
  export default {
    props: ['image','data']
  }
</script>

<style lang="scss">
  .book-description-section {
    overflow: hidden;
    margin-bottom: 50px;
    .book-description-section-thumbnail {
      float: left;
      margin-right: 10px;
      width: 100%;
      padding: 15px;
      @media (min-width: 735px) { // 720 + 15
        width: 250px;
        padding: 0;
      }
      @media (min-width:1095px) { // 1080 + 15
        width: 350px;
      }
    }
  }
</style>
