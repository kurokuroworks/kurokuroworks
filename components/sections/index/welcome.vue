<template>
  <section class="welcome">
    <div class="container">
      <div class="chloe">
        <img src="~assets/images/dummy.png">
      </div>
      <div class="title">
        <h1><img src="~assets/images/logo.png" /></h1>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .welcome {
    margin: 0;
    height: 90vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("~assets/images/background.png");
    .title {
      text-align: center;
      h1, p {
        padding: 2px 8px;
      }
      h1 {
        img {
          display: block;
          width: 250px;
        }
      }
    }
  }
</style>
