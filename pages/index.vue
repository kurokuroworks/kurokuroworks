<template>
  <div>
    <HeaderSection />
    <WelcomeSection />
    <WorksSection />
    <BooksSection />
    <ArticlesSection />
    <AboutsSection />
    <FooterSection />
    <nuxt-link to="/articles/example">aaa</nuxt-link>
  </div>
</template>

<script>
import HeaderSection from '~components/sections/common/header.vue'
import FooterSection from '~components/sections/common/footer.vue'
import WelcomeSection from '~components/sections/index/welcome.vue'
import WorksSection from '~components/sections/index/works.vue'
import BooksSection from '~components/sections/index/books.vue'
import ArticlesSection from '~components/sections/index/articles.vue'
import AboutsSection from '~components/sections/index/abouts.vue'
export default {
  components: {
    HeaderSection,
    FooterSection,
    WelcomeSection,
    WorksSection,
    BooksSection,
    ArticlesSection,
    AboutsSection
  }
}
</script>

<style>

</style>
