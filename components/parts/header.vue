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
          <li><nuxt-link :to="'/articles'">
            <p><i class="fa fa-rss" aria-hidden="true"></i>記事</p>
          </nuxt-link></li>
          <li><nuxt-link :to="'/'">
            <p><i class="fa fa-magic" aria-hidden="true"></i>アプリ</p>
          </nuxt-link></li>
          <li><nuxt-link :to="'/books'">
            <p><i class="fa fa-paper-plane" aria-hidden="true"></i>同人誌</p>
          </nuxt-link></li>
          <li><nuxt-link :to="'/'">
            <p><i class="fa fa-hashtag" aria-hidden="true"></i>サークル</p>
          </nuxt-link></li>
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
        isVisible: true,
        currentPosition: 0
      }
    },
    mounted() {
      if (window) {
        window.addEventListener('scroll', throttle(() => {
          this.isVisible = 300 > window.pageYOffset || window.pageYOffset < this.currentPosition
          this.currentPosition = window.pageYOffset
        }, 100))
      }
    },
  }
</script>

<style lang="scss">
  .header-parts + * {
    margin-top: 80px;
  }
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
    text-align: center;
    &.is-visible {
      top: 0;
    }
    a {
      display: inline-block;
    }
    .logo {
      height: 50px;
      padding: 7px;
      img {
        height: 100%;
      }
    }
    nav {
      background-color: rgba(0,0,0,0.3);
      ul {
        display: flex;
        justify-content: center;
        li {
          a {
            color: #ffffff;
          }
          p {
            i {
              display: none;
            }
            text-align: center;
            width: 110px;
            height: 30px;
            font-size: 14px;
            line-height: 30px;
          }
        }
      }
    }
    @media screen and (min-width: 735px) { // 720 + 15
      text-align: inherit;
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
        background: none;
        ul {
          display: flex;
          li {
            p {
              i {
                display: block;
                width: 100%;
                font-size: 2.2rem;
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
  }
</style>
