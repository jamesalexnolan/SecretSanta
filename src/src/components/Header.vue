<template>
  <div class="container-fluid bg-danger py-2">
    <b-navbar class="container" toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="/"
        ><img
          style="max-width: 100px"
          src="https://icons-for-free.com/iconfiles/png/512/claus+santa+santa+claus+icon-1320168153422591824.png"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link to="/create" class="nav-link" style="font-size: 30px"
            >Santa's poppin secret santa creation tool</router-link
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  props: {},
  computed: {
    ...mapState({
      loggedIn: (state) => state.user.loggedIn,
    }),
  },
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
