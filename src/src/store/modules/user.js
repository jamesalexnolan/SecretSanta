export default {
  namespaced: true,
  state: {
    loggedIn: false,
  },

  getters: {},

  actions: {},

  mutations: {
    setLoggedIn(state, loggedIn) {
      state.loggedIn = loggedIn;
    },
  },
};
