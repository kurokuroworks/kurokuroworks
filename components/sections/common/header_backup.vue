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
        <li class="articles"><p>記事</p></li>
        <li class="apps"><p>アプリ</p></li>
        <li class="books"><p>技術誌</p></li>
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
        isFixed: false,
        isVisibleNav: false,
        currentPosition: 0
      }
    },
    mounted() {
      if (window) {
        window.addEventListener('scroll', throttle(() => {
          if (window.innerWidth < 1095) {
            this.isFixed = 400 < window.pageYOffset
          } else {
            this.isFixed = 390 < window.pageYOffset
          }
          this.isVisibleNav = 450 > window.pageYOffset || window.pageYOffset < this.currentPosition
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
      margin-top: 50px;
    }
    header {
      position: fixed;
      z-index: 2;
      left: 0;
      right: 0;
      top: 0;
      height: 60px;
      background-color: #71bfbc;
      .header-title {
        float: left;
        text-align: center;
        transition-duration: .5s;
        transition-property: width, height;
        width: 100%;
        height: 100%;
        padding: 8px;
        img {
          display: block;
          height: 100%;
          margin: 0 auto;
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
      transition-property: top;
      left: 0;
      right: 0;
      background-color: #eeeeee;
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
      ul {
        display: flex;
        justify-content: center;
        li {
          width: 25%;
          max-width: 150px;
          height: 45px;
          justify-content: center;
          transition-duration: .3s;
          &:hover {
            color: #ffffff;
            &.articles {
              background-color: #00add2;
            }
            &.apps {
              background-color: #fab900;
            }
            &.books {
              background-color: #7963d9;
            }
            &.abouts {
              background-color: #f5749a;
            }
          }
          &:last-child p {
            border-right: none;
          }
          p {
            border-right: 1px solid #cccccc;
            text-align: center;
            line-height: 35px;
            margin: 6px 0;
            justify-content: center;
            overflow: hidden;
          }
        }
      }
    }

    &.is-fixed {
      + section {
        margin-top: 100px;
      }
      header {
        position: fixed;
        height: 50px;
        top: 0;
        overflow: hidden;
        background-image: none;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
        .header-title {
          width: 100%;
          background-color: #71bfbc;
          padding: 8px;
          img {
            margin-top: 0;
            filter: none;
          }
        }
        .header-description {
          display: block;
        }
        @media (min-width:1095px) {
          height: 60px;
          .header-title {
            width: 300px;
          }
        }
      }
      /*nav {*/
        /*position: fixed;*/
        /*top: 0;*/
        /*margin-top: 0;*/
      /*}*/
      &.is-visible-nav {
        nav {
          top: 49px; // box-shadow の見た目的に -1px
          @media (min-width:1095px) {
            top: 59px;
          }
        }
      }
    }

  }
</style>
