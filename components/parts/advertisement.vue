<template>
  <div class="ads-container">
    <div class="ads primary">
      <p>big rectangle ads 336x280</p>
    </div>
    <div class="ads secondary">
      <p>big rectangle ads 336x280</p>
    </div>
  </div>
</template>

<style lang="scss">
  .ads-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .ads {
      width: 336px;
      height: 280px;
      background-color: #333333;
      color: #ff0000;
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
