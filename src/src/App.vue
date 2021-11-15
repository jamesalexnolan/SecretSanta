<template>
  <div id="app">
    <Header/>
    <ModalLogin/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import ModalLogin from "./components/ModalLogin.vue"
export default {
  name: 'App', 
  store,
  components: {
    Header,
    ModalLogin
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
