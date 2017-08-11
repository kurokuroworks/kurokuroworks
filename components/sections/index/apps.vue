<template>
  <section class="apps">
    <div class="container">
      <h2 class="section-title">Apps<span>公開中のアプリ</span></h2>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .apps {
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
  }
</style>
