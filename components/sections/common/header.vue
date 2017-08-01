<template>
  <header :class="{ 'is-visible': isVisible }">
    <h1 class="header-title">
      <img src="~assets/images/logo.png" />
    </h1>
  </header>
</template>

<script>
  import throttle from 'lodash.throttle'
  export default {
    data() {
      return {
        isVisible: false
      }
    },
    mounted() {
      if (window) {
        window.addEventListener('scroll', throttle(() => {
          this.isVisible = (window.innerHeight * 0.9) < window.pageYOffset
        }, 100))
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  header {
    position: fixed;
    z-index: 1;
    top: -50px;
    left: 0;
    right: 0;
    background-image: url("~assets/images/background.png");
    text-align: center;
    transition-duration: .5s;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
    .header-title {
      padding: 5px;
      img {
        display: block;
        margin: 0 auto;
        height: 40px;
      }
    }
    &.is-visible {
      top: 0;
    }
  }
</style>
