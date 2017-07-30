<template>
  <section class="welcome">
    <div class="container">
      <div class="chloe">
        <img src="~assets/images/dummy.png">
      </div>
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
    height: 90vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    .title {
      text-align: center;
      h1, p {
        padding: 2px 8px;
      }
      h1 {
        font-size: 28px;
        line-height: 28px;
      }
    }
  }
</style>
