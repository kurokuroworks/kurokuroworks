<template>
  <div>
    <reset-parts />
    <nuxt/>
  </div>
</template>

<script>
  import ResetParts from '~components/parts/reset.vue'
  export default {
    components: {
      ResetParts
    }
  }
</script>

<style lang="scss">
  @import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);
  body {
    font-family: 'Noto Sans Japanese', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
    background-color: rgb(250,250,250);
    a {
      color: #333333;
    }
  }
  .section-title {
    font-size: 20px;
    font-weight: bold;
    padding: 40px 0 30px;
  }
  .item-container {
    display: flex;
    justify-content: space-between;
  }
</style>
