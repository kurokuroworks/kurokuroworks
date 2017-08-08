<template>
  <section class="apps">
    <div class="cover">
      <div class="base"></div>
      <div class="wrapper"></div>
    </div>
    <div class="container">
      <h2 class="section-title">Apps<span>公開中のアプリ</span></h2>
    </div>
    <div class="item-container nyanpass">
      <div class="container">
        <div class="item">
          <img src="https://static.kurokuroworks.net/www/dummy/dummy_16x9.jpg" />
          <div class="apps-item-text">
            <h2>次のアプリ(仮)</h2>
            <p>せつめいせつめいせつめい</p>
            <a href="#">
              <div class="button">
                <p>アプリを開く</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="item-container feature">
      <div class="container">
        <div class="item">
          <img src="https://static.kurokuroworks.net/www/dummy/dummy_16x9.jpg" />
          <div class="apps-item-text">
            <h2>次のアプリ(仮)</h2>
            <p>せつめいせつめいせつめい</p>
            <a href="#">
              <div class="button">
                <p>アプリを開く</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .apps {
    .cover {
      .base {
        background-image: url("~assets/images/cover_apps.jpg");
      }
      .wrapper {
        background-image: linear-gradient(120deg, #f5749a 0%, #813d51 100%);
      }
    }
    .item-container {
      .item {
        position: relative;
        padding: 10px;
        overflow: hidden;
        img {
          display: block;
          margin: 0 auto;
        }
        .apps-item-text {
          position: relative;
          h2 {
            font-size: 24px;
          }
        }
        @media screen and (min-width: 735px) { // 720 + 15
          img {
            margin: 0;
            width: 300px;
          }
          .apps-item-text {
            position: absolute;
            bottom: 10px;
            left: 320px;
            .button {
              background: #999999;
              color: #ffffff;
              padding: 4px 10px;
              text-align: center;
            }
          }
        }
      }
    }
    .nyanpass {
      background-color: #aaaaaa;
    }
    .feature {
      background-color: #bbbbbb;
    }
  }
</style>
