<template>
  <section class="welcome">
    <div class="container">
      <div class="title">
        <h1>くろくろわーくす</h1>
        <p>kurokuroworks</p>
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
    height: 100vh;
    background-color: #a669ff;
    background-image: url("~assets/images/dummy.png");
    background-attachment: fixed;
    background-position: bottom;
    background-size: cover;
    color: #ffffff;
    overflow: hidden;
    .chloe {
      //
    }
    .title {
      h1, p {
        position: absolute;
        background-color: rgba(0,0,0,0.8);
        padding: 2px 8px;
        left: 20px;
      }
      h1 {
        font-size: 28px;
        line-height: 28px;
        bottom: 48px;
      }
      p {
        bottom: 20px;
      }
    }
  }
</style>
