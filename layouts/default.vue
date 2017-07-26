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
  @import url(//fonts.googleapis.com/earlyaccess/roundedmplus1c.css);
  body {
    font-family: 'Rounded Mplus 1c', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
    a {
      color: #333333;
    }
  }
  .section-title {
    font-size: 24px;
    text-align: center;
    padding: 40px 0;
  }
  .item-container {
    display: flex;
    justify-content: space-between;
  }
</style>
