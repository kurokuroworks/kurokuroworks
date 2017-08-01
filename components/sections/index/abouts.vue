<template>
  <section class="abouts">
    <div class="cover">
      <img src="~assets/images/cover_abouts.jpg" />
    </div>
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
    .about {
      position: relative;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
      background-color: #ffffff;
      margin: 10px 20px;
      padding: 10px;
      h3 {
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 8px;
        font-weight: bold;
        text-align: center;
      }
    }
    .subtitle {
      padding: 20px 20px 0;
      font-size: 18px;
      font-weight: bold;
    }
    .item-parts {
      width: 50%;
      max-width: 200px;
      padding: 10px;
    }
  }
</style>
