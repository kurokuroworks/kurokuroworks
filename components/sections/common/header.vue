<template>
  <header :class="{'is-visible': isVisible}">
    <div class="container">
      <h1 class="header-title">
        <img src="~assets/images/logo_white.png" />
      </h1>
    </div>
  </header>
</template>

<script>
  import throttle from 'lodash.throttle'
  export default {
    data() {
      return {
        isVisible: true,
        currentPosition: 0
      }
    },
    mounted() {
      if (window) {
        window.addEventListener('scroll', throttle(() => {
          if (window.innerWidth < 1095) {
            this.isVisible = 500 < window.pageYOffset // TODO スマホではヘッダーの高さを若干短くした方がいい
          } else {
            this.isVisible = 500 < window.pageYOffset
          }
          this.currentPosition = window.pageYOffset
        }, 100))
      }
    }
  }
</script>

<style lang="scss">
  header {
    display: none; //debug
    position: fixed;
    z-index: 1;
    top: -80px;
    left: 0;
    right: 0;
    transition-duration: .5s;
    background-color: #00677d;
    &.is-visible {
      top: 0;
    }
    .header-title {
      height: 80px;
      padding: 20px 0;
      img {
        height: 100%;
      }
    }
  }
</style>
