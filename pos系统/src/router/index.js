import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  routes,
})

export default router
