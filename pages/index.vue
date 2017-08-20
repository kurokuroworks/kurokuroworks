<template>
  <div>
    <WelcomeSection />
    <ArticlesSection :data="articlesData" />
    <AppsSection />
    <BooksSection :data="booksData" />
    <AboutsSection :staff="staffData" :contributor="contributorData"/>
    <footer-parts></footer-parts>
  </div>
</template>

<script>
  import request from 'superagent'
  import WelcomeSection from '~components/sections/index/welcome.vue'
  import ArticlesSection from '~components/sections/index/articles.vue'
  import AppsSection from '~components/sections/index/apps.vue'
  import BooksSection from '~components/sections/index/books.vue'
  import AboutsSection from '~components/sections/index/abouts.vue'
  import FooterParts from '~components/parts/footer.vue'
  export default {
    components: {
      WelcomeSection,
      AppsSection,
      BooksSection,
      ArticlesSection,
      AboutsSection,
      FooterParts
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
        booksData = sessionStorage.getItem('booksData')
        articlesData = sessionStorage.getItem('articlesData')
        aboutsData = sessionStorage.getItem('aboutsData')
      }
      // リソース取得 (sessionStorage or Ajax)
      const queue = [
        booksData ? booksData : request.get(`${context.env.staticBaseUrl}/www/books.json`).then(res => res.text),
        articlesData ? articlesData : request.get(`${context.env.staticBaseUrl}/www/articles.json`).then(res => res.text),
        aboutsData ? aboutsData : request.get(`${context.env.staticBaseUrl}/www/abouts.json`).then(res => res.text)
      ]
      return Promise.all(queue).then(results => {
        // sessionStorage 保存
        if (context.isClient && sessionStorage) {
          if (!booksData) sessionStorage.setItem('booksData', results[0])
          if (!articlesData) sessionStorage.setItem('articlesData', results[1])
          if (!aboutsData) sessionStorage.setItem('aboutsData', results[2])
        }
        return {
          booksData: JSON.parse(results[0]),
          articlesData: JSON.parse(results[1]),
          staffData: JSON.parse(results[2])[0], // TODO わけがわからんので直したほうがいいかも。
          contributorData: JSON.parse(results[2])[1],
        }
      })
    }
  }
</script>

<style lang="scss">

</style>
