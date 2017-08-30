<template>
  <footer>
    <div class="container">
      <p class="title"><img src="~assets/images/logo_white.png" /></p>
      <div class="copyright">
        <p>2011 - 2017 kurokuroworks.</p>
        <p>Made with <i class="fa fa-heart" aria-hidden="true"></i> in Tokyo & Nagoya</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  footer {
    background-color: #555555;
    color: #ffffff;
    padding: 15px 20px 40px;
    text-align: center;
    .title {
      width: 160px;
      margin: 0 auto;
    }
    .copyright {
      p {
        font-size: 12px;
        line-height: 16px;
      }
    }
    @media screen and (min-width: 735px) {
      text-align: left;
      .title {
        margin: 0;
      }
    }
  }
</style>
