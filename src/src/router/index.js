import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Manage from '../views/Manage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
]

const router = new VueRouter({
  routes
})

export default router
