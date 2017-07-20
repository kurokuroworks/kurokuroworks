<template>
  <div>

    <header>
      <h1 class="header-title">くろくろわーくす</h1>
      <button class="header-menu-button"></button>
      <div class="header-menu-container">
        <ul class="header-menu-list">
          <li class="header-menu-list-item">つくったもの</li>
          <li class="header-menu-list-item">かいたもの</li>
          <li class="header-menu-list-item">にっき</li>
          <li class="header-menu-list-item">サークルについて</li>
        </ul>
      </div>
    </header>

    <section class="welcome">
      <div class="container">
        <img src="images/dummy.jpg" />
        <h1>くろくろわーくす</h1>
        <p>kurokuroworks</p>
      </div>
    </section>

    <section class="works">
      <div class="container">
        <h2 class="section-title">つくったもの</h2>
        <div class="item-component work">
          <a href="#">
            <img class="thumbnail" src="images/works/dummy.jpg">
            <h3 class="title">たいとるたいとる</h3>
            <p class="meta">2017 WEB なのくろ</p>
            <p class="description">せつめいぶんせつめいぶんせつめいぶん</p>
          </a>
        </div>
      </div>
    </section>

    <section class="books">
      <div class="container">
        <h2 class="section-title">かいたもの</h2>
        <div class="item-component book">
          <a href="#">
            <img class="thumbnail" src="images/books/dummy.jpg">
            <h3 class="title">たいとるたいとる</h3>
            <p class="meta">2017 BOOK 黒曜</p>
            <p class="description">せつめいぶんせつめいぶんせつめいぶん</p>
          </a>
        </div>
      </div>
    </section>

    <section class="articles">
      <div class="container">
        <h2 class="section-title">にっき</h2>
        <div class="item-component articles">
          <a href="#">
            <h3 class="title">たいとるたいとる</h3>
            <p class="meta">2017/12/31 技術</p>
            <p class="description">ほんぶんほんぶんほんぶん...</p>
          </a>
        </div>
      </div>
    </section>

    <section class="abouts">
      <div class="container">
        <h2 class="section-title">サークルについて</h2>
        <div>
          <h3>"かわいい"をつくっています</h3>
          <p>サークルしょうかいサークルしょうかいサークルしょうかい</p>
        </div>
        <div>
          <h3>なかのひと</h3>
          <div class="item-component staff">
            <img class="thumbnail" src="images/works/dummy.jpg">
            <h3 class="title">なのくろ</h3>
            <p class="meta">えんじにあ</p>
            <p class="description">じこしょうかいじこしょうかいじこしょうかい</p>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <p>くろくろわーくす</p>
      <p><small>Made with ♥ in Akiahbara.</small></p>
    </footer>

  </div>
</template>

<script>
export default {
  //
}
</script>

<style>

</style>
