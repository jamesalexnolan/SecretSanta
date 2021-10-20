<template>
  <div class="home">
  
     <b-container>
        <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
          <p>For more information visit our website</p>
          <b-btn variant="primary" href="https://bootstrap-vue.org/">More Info</b-btn>
        </b-jumbotron>
        </b-container>
<h1>Okay</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
$color:red;

.home{
  background: $color
}
</style>