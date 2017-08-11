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
  .welcome {
    height: 90vh;
    overflow: hidden;
    padding-top: 0;
    margin-bottom: -80px;
    .main {
      width: 100%;
      height: 100vh;
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
        padding: 23vh 20px;
        text-align: center;
        color: #ffffff;
        h2 {
          font-size: 3rem;
        }
        p {
          margin-top: 10px;
          font-size: 1.6rem;
        }
        @media (min-width: 450px) {
          h2 {
            font-size: 4rem;
          }
          p {
            font-size: 2rem;
          }
        }
        @media (min-width: 1100px) {
          h2 {
            font-size: 5rem;
          }
          p {
            font-size: 2.5rem;
          }
        }
      }
    }
    .cutter {
      position: relative;
      z-index: 3;
      background-color: #fafafa;
      width: 120vw;
      height: 200px;
      margin: -150px -10% 0;
      transform: rotate(-3deg);
    }
  }
</style>
