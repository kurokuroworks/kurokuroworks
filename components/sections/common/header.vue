<template>
  <header :class="{ 'is-visible': isVisible }">
    <h1 class="header-title">くろくろわーくす</h1>
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
          this.isVisible = (window.innerHeight * 0.9) - 50 < window.pageYOffset
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
    top: -50px;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #ffffff;
    text-align: center;
    transition-duration: .5s;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
    .header-title {
      line-height: 50px;
    }
    &.is-visible {
      top: 0;
    }
  }
</style>
