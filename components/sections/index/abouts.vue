<template>
  <section class="abouts">
    <div class="container">
      <h2 class="section-title">About<span>サークルについて</span></h2>
      <div class="block">
        <h3>「かわいい！」を作ります</h3>
        <img src="~assets/images/chloe.png" />
        <p>"くろくろわーくす"は、かわいいものを作るために、もくもく活動している技術系サークルです。</p>
        <p>Webアプリ開発、Androidアプリ開発、技術書の発行、デザイン、映像制作など多分野で雑多に作業しています。</p>
        <p>かわいいは正義なので、かわいいと思うものに技術を注ぎ込みたいと思っています。</p>
      </div>
      <div class="block">
        <h3 class="subtitle">サークルのなかのひと</h3>
        <ul class="item-container">
          <template v-for="item in data">
            <item-parts
              :type="'abouts'"
              :href="item.href"
              :thumbnail="item.thumbnail"
              :title="item.title"
              :meta="item.meta"
            ></item-parts>
          </template>
        </ul>
        <p>"くろくろわーくす"では、かわいいものに魂を吹き込むエンジニア、かわいい絵が描けるイラストレーターを募集しています。</p>
        <p>同人活動に興味があり、一緒に作ってみたい方は @nanocloudx まで気兼ねなくご連絡をお待ちしております（ ＾ω＾）</p>
      </div>
    </div>
  </section>
</template>

<script>
  import ItemParts from '~components/parts/item.vue'
  export default {
    props: ['data'],
    components: {
      ItemParts
    }
  }
</script>

<style lang="scss">
  .abouts {
    .block {
      background-color: #ffffff;
      padding: 10px;
      margin-bottom: 20px;
      text-align: center;
      h3 {
        font-size: 22px;
        padding: 10px 0 15px;
      }
      .item-container {
        display: flex;
        flex-direction: column;
        .item-parts {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          img {
            margin: 0 auto;
          }
        }
        @media screen and (min-width: 735px) { // 720 + 15
          .item-parts {
            text-align: left;
            img {
              float: left;
              margin-right: 10px;
            }
          }
        }
        @media (min-width:1095px) {
          flex-direction: row;
        }
      }
    }
  }
</style>
