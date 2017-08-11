<template>
  <section class="abouts about">
    <div class="container">
      <h2 class="section-title">About<span>サークルについて</span></h2>
      <div class="block">
        <div class="separator">
          <h3>「かわいい！」を技術で作ります</h3>
          <img src="~assets/images/chloe.png" />
          <div class="paragraph">
            <p>"くろくろわーくす"は、かわいいものを作るために、もくもく活動している技術系サークルです。</p>
            <p>Webアプリ開発、Androidアプリ開発、技術誌発行、デザイン、映像制作など多分野で雑多に作業しています。</p>
            <p>かわいいは正義なので、かわいいと思うものに技術を注ぎ込みたいと思っています。</p>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="separator staff">
          <h3 class="subtitle">サークルのなかのひと</h3>
          <ul class="item-container">
            <li class="item-parts">
              <img class="thumbnail" src="~assets/images/nanocloudx.png">
              <div class="text">
                <h4 class="title">なのくろ</h4>
                <p class="meta">フロントエンドエンジニア</p>
                <p class="description">
                  サークル主がかわいいと思った？？？
                  残念！さやかちゃんでした！！！
                </p>
              </div>
            </li>
            <li class="item-parts">
              <img class="thumbnail" src="~assets/images/kokuyouwind.png">
              <div class="text">
                <h4 class="title">黒曜</h4>
                <p class="meta">バックエンドエンジニア</p>
                <p class="description">
                  関数型言語が好きな数学者。ディズニー博士。
                  好きな投影機はカール・ツァイス社製「ツァイスIV型」プラネタリウム。
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="separator contributor">
          <h3 class="subtitle">Special thanks!</h3>
          <ul class="item-container">
            <li class="item-parts">
              <img class="thumbnail" src="~assets/images/chloe.png">
              <div class="text">
                <h4 class="title">名無しさん</h4>
                <p class="meta">まだいません</p>
              </div>
            </li>
          </ul>
          <div class="paragraph">
            <p>"くろくろわーくす"では、かわいいものに魂を吹き込むエンジニア、かわいい絵が描けるイラストレーターを募集しています。</p>
            <p>同人活動に興味があり、一緒に作ってみたい方は @nanocloudx まで気兼ねなくご連絡をお待ちしております（ ＾ω＾）</p>
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
  .abouts {
    background-image: url("~assets/images/cover_welcome.jpg");
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
        padding: 10px 0 15px;
      }
      .paragraph {
        padding: 10px;
      }
      .about {

      }
      .staff {
        .item-container {
          display: flex;
          flex-direction: column;
          .item-parts {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            .text {
              box-shadow: none;
            }
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
      .contributor {
        .item-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          .item-parts {
            width: 50%;
            max-width: 180px;
            padding: 10px;
            margin-bottom: 10px;
            .text {
              box-shadow: none;
            }
            img {
              max-height: 180px;
              margin: 0 auto;
            }
          }
          @media screen and (min-width: 735px) { // 720 + 15
            .item-parts {
              text-align: left;
            }
          }
        }
      }
    }
  }
</style>
