<template>
  <div class="header-container" :class="{'is-visible-marquee': isVisibleMarquee, 'is-visible-nav': isVisibleNav}">
    <header>
      <h1 class="header-title">
        <img src="~assets/images/logo_white.png" >
      </h1>
      <div class="header-marquee">
        <p>ほげほげほげほげほげほげほげほげほげほげほげほげ</p>
      </div>
    </header>
    <nav>
      <ul>
        <li class="articles"><p>記事</p></li>
        <li class="apps"><p>アプリ</p></li>
        <li class="books"><p>同人誌</p></li>
        <li class="abouts"><p>サークル</p></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import throttle from 'lodash.throttle'
  export default {
    data() {
      return {
        isVisibleMarquee: false,
        isVisibleNav: true,
        currentPosition: 0
      }
    },
    mounted() {
      if (window) {
        window.addEventListener('scroll', throttle(() => {
          if (window.innerWidth < 1095) {
            this.isVisibleMarquee = 340 < window.pageYOffset // TODO スマホではヘッダーの高さを若干短くした方がいい
          } else {
            this.isVisibleMarquee = 340 < window.pageYOffset
          }
          this.isVisibleNav = 400 > window.pageYOffset || window.pageYOffset < this.currentPosition
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
    position: absolute;
    top: 340px;
    left: 0;
    right: 0;
    + section {
      margin-top: 100px;
    }
    header {
      position: relative;
      z-index: 3;
      height: 60px;
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
      .header-title {
        height: 100%;
        padding: 8px;
        width: 100%;
        text-align: center;
        float: left;
        transition-duration: .3s;
        transition-property: width, height;
        background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, #00677d 100%);
        img {
          height: 100%;
        }
      }
      .header-marquee {
        opacity: 0;
        position: absolute;
        left: 300px;
      }
    }
    nav {
      position: relative;
      top: -45px;
      z-index: 2;
      height: 45px;
      color: #ffffff;
      background-color: #555555;
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
      transition-duration: .3s;
      transition-delay: .3s;
      ul {
        display: flex;
        justify-content: center;
        border-bottom: 3px solid #777777;
        li {
          width: 25%;
          max-width: 180px;
          height: 45px;
          margin-bottom: -3px;
          justify-content: center;
          transition-duration: .3s;
          &.articles {
            border-bottom: 3px solid #7963d9;
          }
          &.apps {
            border-bottom: 3px solid #f5749a;
          }
          &.books {
            border-bottom: 3px solid #fab900;
          }
          &.abouts {
            border-bottom: 3px solid #00add2;
          }
          &:hover {
            color: #ffffff;
            &.articles {
              background-color: #7963d9;
            }
            &.apps {
              background-color: #f5749a;
            }
            &.books {
              background-color: #fab900;
            }
            &.abouts {
              background-color: #00add2;
            }
          }
          &:last-child p {
            border-right: none;
          }
          p {
            border-right: 1px solid #cccccc;
            text-align: center;
            line-height: 30px;
            margin: 6px 0;
            justify-content: center;
            overflow: hidden;
          }
        }
      }
    }
    &.is-visible-marquee {
      position: fixed;
      top: 0;
      header {
        background-color: #ffffff;
        .header-title {
          width: 300px;
          background-color: #71bfbc;
        }
        .header-marquee {
          transition-delay: .3s;
          transition-duration: .5s;
          transition-property: opacity;
          opacity: 1;
          float: left;
          height: 100%;
          padding: 5px 10px;
        }
      }
    }
    &.is-visible-nav {
      nav {
        top: 0;
      }
    }
  }
</style>
