<template>
  <div class="header-parts" :class="{'is-visible': isVisible}">
    <div class="container">
      <nuxt-link :to="'/'">
        <h1 class="logo">
          <img src="~assets/images/logo_white.png" />
        </h1>
      </nuxt-link>
      <nav>
        <ul>
          <li><i class="fa fa-rss" aria-hidden="true"></i>記事</li>
          <li><i class="fa fa-magic" aria-hidden="true"></i>アプリ</li>
          <li><i class="fa fa-paper-plane" aria-hidden="true"></i>同人誌</li>
          <li><i class="fa fa-hashtag" aria-hidden="true"></i>サークル</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  import throttle from 'lodash.throttle'
  export default {
    data() {
      return {
        isVisible: false,
        currentPosition: 0
      }
    },
    mounted() {
      if (window) {
        window.addEventListener('scroll', throttle(() => {
          this.isVisible = 500 > window.pageYOffset || window.pageYOffset < this.currentPosition
          this.currentPosition = window.pageYOffset
        }, 100))
      }
    },
  }
</script>

<style lang="scss">
  .header-parts {
    position: fixed;
    z-index: 100;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    transition-duration: .5s;
    top: -100px;
    left: 0;
    right: 0;
    height: 80px;
    background-color: #33bbff;
    background-size: cover;
    background-image: url("~assets/images/cover_welcome.jpg");
    color: #ffffff;
    overflow: hidden;
    &.is-visible {
      top: 0;
    }
    .logo {
      height: 50px;
      padding: 5px;
      text-align: center;
      img {
        height: 100%;
      }
    }
    nav {
      ul {
        display: flex;
        justify-content: center;
        li {
          i {
            display: none;
          }
          text-align: center;
          width: 110px;
          height: 30px;
          line-height: 25px;
        }
      }
    }
    @media screen and (min-width: 735px) { // 720 + 15
      .logo {
        float: left;
        height: 80px;
        padding: 20px;
        img {
          height: 100%;
        }
      }
      nav {
        float: right;
        ul {
          display: flex;
          li {
            i {
              display: block;
              width: 100%;
              font-size: 2.2rem;
              margin-bottom: 3px;
            }
            text-align: center;
            width: 110px;
            height: 80px;
            padding: 18px;
            &:hover {
              border-bottom: 4px solid #ffffff;
            }
          }
        }
      }
    }
  }
</style>
