import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import App from './App.vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import './scss/app.scss'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
