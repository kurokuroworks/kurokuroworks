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
          this.isVisible = window.innerHeight - 20 < window.pageYOffset
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
    padding: 10px;
    color: #ffffff;
    background-color: rgba(0,0,0,0.8);
    text-align: center;
    transition-duration: .3s;
    &.is-visible {
      top: 0;
    }
  }
</style>
