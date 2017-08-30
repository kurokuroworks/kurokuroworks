<template>
  <div>
    <header-parts></header-parts>
    <section class="abouts-page">
      <div class="abouts-header">
        <div class="container">
          <div class="section-title">
            <h2>サークルについて</h2>
            <p>Abouts</p>
          </div>
        </div>
      </div>
      <div class="container">
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
        </div>
        <div class="block">
          <div class="separator staff">
            <h3 class="subtitle">サークルのなかのひと</h3>
            <ul class="item-container">
              <template v-for="item in staff">
                <item-parts
                  :href="item.href"
                  :thumbnail="item.thumbnail"
                  :title="item.title"
                  :tag="item.tag"
                  :description="item.description"
                ></item-parts>
              </template>
            </ul>
          </div>
          <div class="separator contributor">
            <h3 class="subtitle">Special thanks!</h3>
            <ul class="item-container">
              <template v-for="item in contributor">
                <item-parts
                  :href="item.href"
                  :thumbnail="item.thumbnail"
                  :title="item.title"
                  :tag="item.tag"
                ></item-parts>
              </template>
            </ul>
            <div class="paragraph">
              <p>"くろくろわーくす"では、かわいいものに魂を吹き込むエンジニア、かわいい絵が描けるイラストレーターを募集しています。</p>
              <p>同人活動に興味があり、一緒に作ってみたい方はお気軽にご連絡をお待ちしております（ ＾ω＾）</p>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="separator">
            <h3>お問い合わせ</h3>
            <div class="paragraph">
              <p>ご質問やご連絡などありましたら <strong>@nanocloudx</strong> まで twitter の DM をお願い致します。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <advertisement-parts></advertisement-parts>
    <footer-parts></footer-parts>
  </div>
</template>

<script>
  import request from 'superagent'
  import ItemParts from '~components/parts/item.vue'
  import HeaderParts from '~components/parts/header.vue'
  import FooterParts from '~components/parts/footer.vue'
  import AdvertisementParts from '~components/parts/advertisement.vue'
  export default {
    components: {
      AdvertisementParts,
      ItemParts,
      HeaderParts,
      FooterParts
    },
    asyncData(context) {
      let aboutsData
      if (context.isClient && sessionStorage) {
        aboutsData = sessionStorage.getItem('aboutsData')
      }
      const queue = [
        aboutsData ? aboutsData : request.get(`${context.env.staticBaseUrl}/www/abouts.json`).then(res => res.text)
      ]
      return Promise.all(queue).then(results => {
        if (context.isClient && sessionStorage) {
          if (!aboutsData) sessionStorage.setItem('aboutsData', results[0])
        }
        return {
          staff: JSON.parse(results[0])[0], // TODO わけがわからんので直したほうがいいかも。
          contributor: JSON.parse(results[0])[1]
        }
      })
    },
    data() {
      return {
        books: null
      }
    }
  }
</script>

<style lang="scss">
  .abouts-page {
    padding-top: 0;
    padding-bottom: 50px;
    .abouts-header {
      text-align: center;
      background-color: #444444;
      background-size: cover;
      background-repeat: no-repeat;
      color: #ffffff;
      .section-title {
        padding: 100px 0 40px;
        text-align: center;
        color: #ffffff;
        h2 {
          font-size: 32px;
          line-height: 40px;
        }
        p {
          font-size: 20px;
          line-height: 30px;
        }
      }
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
            max-width: 135px;
            padding: 10px;
            margin-bottom: 10px;
            .text {
              box-shadow: none;
            }
            img {
              max-height: 135px;
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
