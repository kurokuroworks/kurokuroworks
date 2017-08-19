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
      height: 600px;
      background-size: cover;
      background-color: #33bbff;
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
        z-index: 2;
        text-shadow: 0 0 10px #555555;
        top: 450px;
        left: 0;
        right: 0;
        height: 150px;
        text-align: center;
        color: #ffffff;
        h2 {
          font-size: 2.5rem;
        }
        p {
          margin-top: 10px;
          font-size: 1.6rem;
        }
      }
      .chloe {
        position: absolute;
        z-index: 1;
        width: 300px;
        left: 0;
        right: 0;
        margin: auto;
        @keyframes fuwafuwa {
          0% {
            top: 50px;
            filter: drop-shadow(5px 5px 0 rgba(0,0,0,0.4));
          }
          50% {
            top: 80px;
            filter: drop-shadow(10px 10px 0 rgba(0,0,0,0.2));
          }
          100% {
            top: 50px;
            filter: drop-shadow(5px 5px 0 rgba(0,0,0,0.4));
          }
        }
        animation: fuwafuwa 3s infinite;
      }
      @media (min-width: 450px) {
        .message {
          h2 {
            font-size: 3.8rem;
          }
          p {
            font-size: 2rem;
          }
        }
        .chloe {
          width: 350px;
        }
      }
      @media (min-width: 1100px) {
        .message {
          position: relative;
          text-align: left;
          top: 200px;
          h2 {
            font-size: 5rem;
          }
          p {
            font-size: 2.5rem;
            padding-left: 30px;
          }
        }
        .chloe {
          position: absolute;
          left: 600px;
          width: 550px;
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
