<template>
  <section class="welcome">
    <img class="chloe" src="~assets/images/chloe.png" >
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .welcome {
    height: 300px;
    background-color: #71bfb6;
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
      position: absolute;
      left: 0;
      right: 0;
      margin: 25px auto 0;
      z-index: 10;
      height: 270px;
    }
  }
</style>
