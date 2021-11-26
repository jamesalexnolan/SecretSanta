<template>
  <b-modal id="loginModal" title="Login" title-class="modal-title-black" :ok-only="true" size="md">
    <p>Login</p>
  </b-modal>
</template>

<script>
export default {
  name: "loginModal",
  props: {},
};
</script>

<style scoped>
  .modal-title-black {
    color: #000;
  }
</style>
