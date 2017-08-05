<template>
  <section class="abouts">
    <div class="container">
      <h2 class="section-title">About<span>サークルについて</span></h2>
      <div class="about">
        <h3>「かわいい！」を作ります</h3>
        <p>"くろくろわーくす"は、なのくろと黒曜の技術系サークルです。</p>
        <p>Web開発、Androidアプリ開発、技術書の執筆、デザイン、映像制作など多分野で雑多に活動しています。</p>
        <p>サークルの目標は「かわいい！」を作ることです。かわいいは正義なので、かわいいと思うものに技術を注ぎ込んでいきたいと思っています。</p>
      </div>
      <div class="staff">
        <h3 class="subtitle">なかのひと</h3>
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
    .staff {
      .item-container {
        display: flex;
      }
    }
  }
</style>
