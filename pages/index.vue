<template>
  <div>
    <WelcomeSection />
    <HeaderSection />
    <ArticlesSection :data="articlesData" />
    <appsSection :data="appsData" />
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
  import appsSection from '~components/sections/index/apps.vue'
  import BooksSection from '~components/sections/index/books.vue'
  import ArticlesSection from '~components/sections/index/articles.vue'
  import AboutsSection from '~components/sections/index/abouts.vue'
  export default {
    components: {
      HeaderSection,
      FooterSection,
      WelcomeSection,
      appsSection,
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

      let appsData, booksData, articlesData, aboutsData
      // sessionStorage 読込
      if (context.isClient && sessionStorage) {
        appsData = JSON.parse(sessionStorage.getItem('appsData'))
        booksData = JSON.parse(sessionStorage.getItem('booksData'))
        articlesData = JSON.parse(sessionStorage.getItem('articlesData'))
        aboutsData = JSON.parse(sessionStorage.getItem('aboutsData'))
      }
      // リソース取得 (sessionStorage or Ajax)
      const queue = [
        appsData ? appsData : request.get(`${context.env.staticBaseUrl}/www/dummy.json`).then(res => res.body),
        booksData ? booksData : request.get(`${context.env.staticBaseUrl}/www/dummy.json`).then(res => res.body),
        articlesData ? articlesData : request.get(`${context.env.staticBaseUrl}/www/dummy.json`).then(res => res.body),
        aboutsData ? aboutsData : request.get(`${context.env.staticBaseUrl}/www/dummy.json`).then(res => res.body)
      ]
      return Promise.all(queue).then(results => {
        // sessionStorage 保存
        if (context.isClient && sessionStorage) {
          if (!appsData) sessionStorage.setItem('appsData', JSON.stringify(results[0]))
          if (!booksData) sessionStorage.setItem('booksData', JSON.stringify(results[1]))
          if (!articlesData) sessionStorage.setItem('articlesData', JSON.stringify(results[2]))
          if (!aboutsData) sessionStorage.setItem('aboutsData', JSON.stringify(results[3]))
        }
        return {
          appsData: results[0],
          booksData: results[1],
          articlesData: results[2],
          aboutsData: results[3],
        }
      })
    }
  }
</script>

<style>

</style>
