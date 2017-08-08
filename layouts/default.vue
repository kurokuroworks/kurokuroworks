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
    color: #444444;
    background-color: #fafafa;
    font-size: 16px;
    a {
      color: #555555;
      text-decoration: none;
    }
  }
  .container {
    margin: 0 auto;
    width: 100%;
    @media screen and (min-width: 735px) { // 720 + 15
      width: 720px;
    }
    @media screen and (min-width: 1095px) { // 1080 + 15
      width: 1080px;
    }
  }
</style>
