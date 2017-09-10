<template>
  <div class="book-sample-section">
    <div class="book-sample" v-html="data"></div>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="scss">
  .book-sample-section {
    margin-bottom: 50px;
    .book-sample {
      ul {
        display: flex;
        flex-wrap: wrap;
        @media (min-width: 735px) { // 720 + 15
          flex-wrap: nowrap;
        }
        li {
          width: 50%;
          padding: 5px;
        }
      }
    }
  }
</style>
