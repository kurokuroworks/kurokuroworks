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
            <h3>ゆるふわ開発サークル「くろくろわーくす」</h3>
            <img src="~assets/images/chloe.png" />
            <div class="paragraph">
              <p>"くろくろわーくす"はゆるふわに活動している技術系サークルです。</p>
              <p>Webアプリ開発、技術誌発行、映像制作など雑多に作業しています。</p>
              <p>直感でかわいいと思うものに技術を注ぎ込みたいと思っています。</p>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="separator member">
            <h3 class="subtitle">サークルのなかのひと</h3>
            <ul class="item-container">
              <template v-for="item in member">
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
    mounted() {
      if (process.browser) {
        window.ga('set', 'page', '/abouts')
        window.ga('send', 'pageview')
      }
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
          member: JSON.parse(results[0])
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
      background-color: #555555;
      background-image: repeating-linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 1px, transparent 1px, transparent 4px);
      background-size: 6px 6px;
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
      .member {
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
    }
  }
</style>
