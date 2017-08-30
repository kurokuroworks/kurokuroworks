<template>
  <section class="index-abouts-section">
    <div class="container">
      <div class="section-title">
        <h2>サークルについて</h2>
        <p>About</p>
      </div>
      <div class="block">
        <div class="separator">
          <h3>技術で「かわいい！」を作ります</h3>
          <img src="~assets/images/chloe.png" />
          <div class="paragraph">
            <p>"くろくろわーくす"は「かわいい！」を作るために、もくもく活動している技術系サークルです。</p>
            <p>Webアプリ開発、Androidアプリ開発、技術誌発行、デザイン、映像制作など多分野で雑多に作業しています。</p>
            <p>かわいいは正義なので、直感でかわいいと思うものに技術を注ぎ込みたいと思っています。</p>
          </div>
        </div>
        <button-parts
          :href="'/abouts'"
          :message="'もっとみる'"
        ></button-parts>
      </div>
    </div>
  </section>
</template>

<script>
  import ItemParts from '~components/parts/item.vue'
  import ButtonParts from '~components/parts/button.vue'
  export default {
    props: ['staff', 'contributor'],
    components: {
      ItemParts,
      ButtonParts
    }
  }
</script>

<style lang="scss">
  .index-abouts-section {
    background-image: url("~assets/images/cover_abouts.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .section-title {
      color: #ffffff;
    }
    .block {
      background-color: #ffffff;
      padding: 10px 0;
      margin: 20px;
      text-align: center;
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
      .separator {
        margin:20px 0;
      }
      h3 {
        font-size: 2.5rem;
        padding: 10px 0 20px;
      }
      .paragraph {
        padding: 10px;
      }
    }
  }
</style>
