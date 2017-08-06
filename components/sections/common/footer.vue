<template>
  <footer>
    <div class="container">
      <p class="title"><img src="~assets/images/logo_white.png" /></p>
      <div class="copyright">
        <p><small>2011 - 2017 kurokuroworks.</small></p>
        <p><small>Made with ♥ in Akiahbara & Nagoya</small></p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  footer {
    background-color: #555555;
    color: #ffffff;
    padding: 15px 10px 20px;
    text-align: center;
    .title {
      width: 180px;
      margin: 0 auto;
    }
    .copyright {
      font-size: 14px;
      line-height: 16px;
    }
    @media screen and (min-width: 735px) {
      text-align: left;
      .title {
        margin: 0;
      }
    }
  }
</style>
