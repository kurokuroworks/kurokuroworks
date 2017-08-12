<template>
  <section class="welcome">
    <div class="main">
      <div class="container">
        <h1 class="logo">
          <img src="~assets/images/logo_white.png" />
        </h1>
        <div class="message">
          <h2>「かわいい！」を技術で作ります</h2>
          <p>ゆるふわ開発サークル"くろくろわーくす"</p>
        </div>
        <img class="chloe" src="~assets/images/chloe.png" />
      </div>
    </div>
    <div class="cutter"></div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .welcome + section {
    padding-top: 0;
  }
  .welcome {
    overflow: hidden;
    padding-top: 0;
    padding-bottom: 0;
    .main {
      width: 100%;
      min-height: 500px;
      height: 80vh;
      background-size: cover;
      background-image: url("~assets/images/cover_welcome.jpg");
      .logo {
        height: 80px;
        padding: 20px;
        img {
          height: 100%;
        }
      }
      .message {
        position: absolute;
        top: -100px;
        bottom:0;
        left: 0;
        right: 0;
        margin: auto;
        height: 150px;
        text-align: center;
        color: #ffffff;
        h2 {
          font-size: 3rem;
        }
        p {
          margin-top: 10px;
          font-size: 1.6rem;
        }
      }
      .chloe {
        display: none;
        position: absolute;
        z-index:4;
        width: 600px;
        bottom: 0;
        right: 0;
      }
      @media (min-width: 450px) {
        .message {
          h2 {
            font-size: 4rem;
          }
          p {
            font-size: 2rem;
          }
        }
      }
      @media (min-width: 1100px) {
        .message {
          text-align: left;
          left: inherit;
          right: inherit;
          h2 {
            font-size: 5rem;
          }
          p {
            font-size: 2.5rem;
            padding-left: 30px;
          }
        }
        .chloe {
          display: block;
        }
      }
    }
    .cutter {
      position: relative;
      background-color: #555555;
      width: 120%;
      height: 200px;
      margin: 0 -10% -150px;
      transform: rotate(3deg);
      &:before {
        content: '';
        position: absolute;
        width: 120%;
        height: 400px;
        margin: 0 -10% 0;
        background: #fafafa;
        transform: rotate(-6deg);
      }
    }
  }
</style>
