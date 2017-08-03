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
    },
    mounted() {
      window.kurokuroworks = function() {
        console.log('にゃーん！') // eslint-disable-line
      }
    }
  }
</script>

<style lang="scss">
  @import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);
  body {
    font-family: 'Noto Sans Japanese', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #555555;
    background-color: #f5f5f5;
    font-size: 16px;
    a {
      color: #555555;
    }
  }
  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
</style>
