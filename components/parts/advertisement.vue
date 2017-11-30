<template>
  <div class="ads-container">
    <div class="ads primary">
      <img src="~assets/images/ads.jpg">
    </div>
    <div class="ads secondary">
      <img src="~assets/images/ads.jpg">
    </div>
  </div>
</template>

<style lang="scss">
  .ads-container {
    display: none;
    /*display: flex;*/
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    .ads {
      width: 336px;
      height: 280px;
      margin: 0 5px 10px;
      &.secondary {
        display: none;
      }
      @media (min-width: 735px) {
        &.secondary {
          display: block;
        }
      }
    }
  }
</style>
