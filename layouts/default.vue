<template>
  <div>
    <reset-parts />
    <nuxt/>
    <link rel="stylesheet" href="/css/font-awesome.min.css">
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
  @font-face {
    font-family: 'JK Gothic M';
    font-style: normal;
    src: url("/fonts/jk_gothic_m.woff2") format('woff2'),
    url("/fonts/jk_gothic_m.woff") format('woff');
  }
  @font-face {
    font-family: 'Mplus 1p';
    font-style: normal;
    font-weight: 400;
    src: url(//fonts.gstatic.com/ea/mplus1p/v1/Mplus1p-Regular.woff2) format('woff2'),
    url(//fonts.gstatic.com/ea/mplus1p/v1/Mplus1p-Regular.woff) format('woff');
  }
  body {
    .page-enter-active, .page-leave-active {
      transition-duration: .3s;
    }
    .page-enter, .page-leave-active {
      opacity: 0;
    }
    font-family: 'Mplus 1p', 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #555555;
    background-color: #fafafa;
    font-size: 16px;
    h1, h2, h3 {
      font-family: 'JK Gothic M', 'Mplus 1p', 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif;
    }
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
