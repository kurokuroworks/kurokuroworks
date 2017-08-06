<template>
  <div class="button-parts">
    <a :href="href">
      <p>{{message}}</p>
    </a>
  </div>
</template>

<script>
  export default {
    props: ['href', 'message']
  }
</script>

<style lang="scss">
  .button-parts {
    margin: 10px auto;
    border-radius: 3px;
    background-color: #71bfbc;
    max-width: 70%;
    text-align: center;
    p {
      color: #ffffff;
      padding: 15px;
    }
  }
</style>
