<template>
  <section class="index-apps-section">
    <div class="container">
      <div class="section-title">
        <h2>公開中のアプリ</h2>
        <p>Apps</p>
      </div>
      <a href="https://www.nyanpass.net/" target="_blank" rel="noopener">
        <div class="app-item">
          <h2>にゃんぱす！</h2>
          <p>Twitterサークル検索サービス</p>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .index-apps-section {
    text-align: center;
    background-image: url("~assets/images/cover_apps.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    color: #ffffff;
    .app-item {
      border-radius: 3px;
      color: #333333;
      padding: 60px;
      background-color: #ffffff;
      background-image: url("~assets/images/nyanpass.png");
      background-position: right top;
      background-repeat: no-repeat;
      box-shadow: 0 2px 2px rgba(0,0,0,0.2);
      cursor: pointer;
      h2 {
        font-size: 24px;
      }
      &:hover {
        box-shadow: 0 0 10px 5px rgba(255,255,255,0.3);
      }
    }
  }
</style>
