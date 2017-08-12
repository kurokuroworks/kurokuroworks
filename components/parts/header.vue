<template>
  <div class="header-parts">
    <div class="container">
      <h1 class="logo">
        <img src="~assets/images/logo_white.png" />
      </h1>
    </div>
  </div>
</template>

<style lang="scss">
  .header-parts {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: #33bbff;
    background-size: cover;
    background-image: url("~assets/images/cover_welcome.jpg");
    color: #ffffff;
    .logo {
      height: 80px;
      padding: 20px;
      img {
        height: 100%;
      }
    }
  }
</style>
