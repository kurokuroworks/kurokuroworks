<template>
  <div class="button-parts">
    <nuxt-link :to="href">
      <p>{{message}}</p>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['href', 'message']
  }
</script>

<style lang="scss">
  .button-parts {
    margin: 30px auto;
    border-radius: 3px;
    background-color: #33bbff;
    max-width: 70%;
    text-align: center;
    p {
      color: #ffffff;
      padding: 15px;
      font-size: 2rem;
    }
  }
</style>
