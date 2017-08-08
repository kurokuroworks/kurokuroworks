<template>
  <div>
    <WelcomeSection />
    <HeaderSection />
    <ArticlesSection :data="articlesData" />
    <AppsSection />
    <BooksSection :data="booksData" />
    <AboutsSection :data="aboutsData" />
    <FooterSection />
  </div>
</template>

<script>
  import request from 'superagent'
  import HeaderSection from '~components/sections/common/header.vue'
  import FooterSection from '~components/sections/common/footer.vue'
  import WelcomeSection from '~components/sections/index/welcome.vue'
  import ArticlesSection from '~components/sections/index/articles.vue'
  import AppsSection from '~components/sections/index/apps.vue'
  import BooksSection from '~components/sections/index/books.vue'
  import AboutsSection from '~components/sections/index/abouts.vue'
  export default {
    components: {
      HeaderSection,
      FooterSection,
      WelcomeSection,
      AppsSection,
      BooksSection,
      ArticlesSection,
      AboutsSection
    },
    asyncData(context) {
      // NOTICE
      // static のリソースを更新した時は事前レンダリングしたHTMLも更新する必要がある。
      // Nuxt.js の事前レンダリングは非同期で取得した内容も書き込んでいるので、リソース側が更新されても反映されないのが原因。
      // 直接リンクから遷移する場合や、GoogleBotからのアクセスの場合に表示内容が古いままとなってしまうので注意。
      // (きっとなんかいい方法があると思うけど初回アクセス時の速度を考えたらトレードオフな気もする)

      let booksData, articlesData, aboutsData
      // sessionStorage 読込
      if (context.isClient && sessionStorage) {
        booksData = JSON.parse(sessionStorage.getItem('booksData'))
        articlesData = JSON.parse(sessionStorage.getItem('articlesData'))
        aboutsData = JSON.parse(sessionStorage.getItem('aboutsData'))
      }
      // リソース取得 (sessionStorage or Ajax)
      const queue = [
        booksData ? booksData : request.get(`${context.env.staticBaseUrl}/www/books.json`).then(res => res.body),
        articlesData ? articlesData : request.get(`${context.env.staticBaseUrl}/www/dummy/dummy_16x9.json`).then(res => res.body),
        aboutsData ? aboutsData : request.get(`${context.env.staticBaseUrl}/www/abouts.json`).then(res => res.body)
      ]
      return Promise.all(queue).then(results => {
        // TODO 別ファイルにするのは通信回数の無駄なので１ファイルにしたほうがいい
        // sessionStorage 保存
        if (context.isClient && sessionStorage) {
          if (!booksData) sessionStorage.setItem('booksData', JSON.stringify(results[0]))
          if (!articlesData) sessionStorage.setItem('articlesData', JSON.stringify(results[1]))
          if (!aboutsData) sessionStorage.setItem('aboutsData', JSON.stringify(results[2]))
        }
        return {
          booksData: results[0],
          articlesData: results[1],
          aboutsData: results[2],
        }
      })
    }
  }
</script>

<style lang="scss">
  section {
    margin-bottom: 50px;
    &.welcome {
      margin: 0;
    }
    .cover {
      width: 100%;
      height: 300px;
      margin-bottom: -150px;
      position: relative;
      z-index: -1;
      .base {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
        background-size: cover;
        background-position: center;
      }
      .wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        opacity: 0.5;
      }
    }
    .section-title {
      margin: 0 10px 10px;
      font-size: 30px;
      color: #ffffff;
      span {
        font-size: 16px;
        margin-left: 5px;
      }
    }
  }
</style>
