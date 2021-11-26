<template>
  <div id="app">
    <Header/>
    <LoginModal/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import LoginModal from "./components/LoginModal.vue"
export default {
  name: 'App', 
  components: {
    Header,
    LoginModal
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFF;
}
</style>
