<template>
  <section class="welcome">
    <div class="container">
      <img class="chloe" src="~assets/images/dummy.png" />
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
    padding: 5vh 5vw;
    background-color: #333333;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    .chloe {
      height: auto;
    }
    .title {
      text-align: center;
      padding: 10px 0;
      h1 {
        font-size: 28px;
        line-height: 28px;
      }
    }
  }
</style>
