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
    font-size: 14px;
    a {
      color: #555555;
    }
  }
  section {
    margin-bottom: 50px;
  }
  .cover {
    height: 200px;
    overflow: hidden;
    margin-bottom: -80px;
    img {
      width: 100%;
    }
  }
  .container {
    max-width: 1020px;
    margin: 0 auto;
    .section-title {
      color: #ffffff;
    }
  }
  .section-title {
    font-size: 28px;
    font-weight: bold;
    padding: 0 20px;
    text-shadow: 0 1px 2px rgba(0,0,0,.3);
    span {
      font-size: 14px;
      padding-left: 5px;
    }
  }
  .item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0 10px;
  }
</style>
