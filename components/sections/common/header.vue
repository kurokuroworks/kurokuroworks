<template>
  <header v-show="isVisibleHeader">
    <h1 class="header-title">くろくろわーくす</h1>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isVisibleHeader: true
      }
    },
    mounted() {
      // TODO
      // スクロール位置によってisVisibleを切り替える処理
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  header {

  }
</style>
