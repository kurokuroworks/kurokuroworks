<template>
  <section class="welcome">
    <div class="container">
      <div class="chloe">
        <img src="~assets/images/chloe.png">
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
    .chloe {
      @keyframes fuwafuwa {
        0% {
          top: -10px;
          filter: drop-shadow(5px 5px 0 rgba(0,0,0,0.4));
        }
        50% {
          top: 10px;
          filter: drop-shadow(10px 10px 0 rgba(0,0,0,0.2));
        }
        100% {
          top: -10px;
          filter: drop-shadow(5px 5px 0 rgba(0,0,0,0.4));
        }
      }
      animation: fuwafuwa 3s infinite;
      position: relative;
    }
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
