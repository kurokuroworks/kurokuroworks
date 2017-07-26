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
          this.isVisible = window.innerHeight - 50 < window.pageYOffset
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
    padding: 5px;
    color: #ffffff;
    background-color: #333333;
    text-align: center;
    transition-duration: .3s;
    transition-timing-function: ease-in-out;
    &.is-visible {
      top: 0;
    }
  }
</style>
