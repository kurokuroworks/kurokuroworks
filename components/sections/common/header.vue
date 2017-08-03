<template>
  <div class="header-container" :class="{'is-fixed': isFixed, 'is-visible-nav': isVisibleNav}">
    <header>
      <h1 class="header-title">
        <img src="~assets/images/logo_white.png" >
      </h1>
      <div class="header-description">
        <p>ほげほげほげ</p>
      </div>
    </header>
    <nav>
      <ul>
        <li><p>記事</p></li>
        <li><p>アプリ</p></li>
        <li><p>書籍</p></li>
        <li><p>くろくろ</p></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import throttle from 'lodash.throttle'
  export default {
    data() {
      return {
        isFixed: false,
        isVisibleNav: false,
        currentPosition: 0
      }
    },
    mounted() {
      if (window) {
        window.addEventListener('scroll', throttle(() => {
          this.isFixed = 270 < window.pageYOffset
          this.isVisibleNav = 270 > window.pageYOffset || window.pageYOffset < this.currentPosition
          this.currentPosition = window.pageYOffset
        }, 100))
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .header-container {
    + section {
      margin-top: 60px;
    }
  }
  header {
    position: absolute;
    z-index: 2;
    background-color: #ffffff;
    left: 0;
    right: 0;
    height: 60px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
    .header-title {
      float: left;
      text-align: center;
      transition-duration: .5s;
      width: 100%;
      background-color: #71bfb6;
      img {
        display: block;
        height: 90px;
        margin: -30px auto 0;
        padding: 20px;
      }
    }
    .header-description {
      display: none;
      float: left;
      padding: 8px 15px;
    }
  }
  nav {
    position: relative;
    z-index: 1;
    transition-duration: .5s;
    top: 60px;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
    ul {
      display: flex;
      justify-content: center;
      li {
        width: 25%;
        max-width: 150px;
        height: 50px;
        justify-content: center;
        &:last-child p {
          border-right: none;
        }
        p {
          border-right: 1px solid #dddddd;
          text-align: center;
          line-height: 30px;
          margin: 10px 0;
          justify-content: center;
          overflow: hidden;
        }
      }
    }
  }
  .is-fixed {
    + section {
      margin-top: 100px;
    }
    header {
      position: fixed;
      top: 0;
      overflow: hidden;
      .header-title {
        width: 300px;
        background-color: #669fcb;
        img {
          height: 60px;
          margin-top: 0;
          padding: 8px;
        }
      }
      .header-description {
        display: block;
      }
    }
    nav {
      position: fixed;
      top: 0;
    }
  }
  .is-visible-nav {
    nav {
      top: 59px; // box-shadow の見た目的に -1px
    }
  }
</style>
