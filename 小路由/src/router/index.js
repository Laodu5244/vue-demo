import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Layout from '@/views/Layout'

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
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "home",
        name: "hemo",
        component: Home
      },
      {
        path: "/mine",
        name: "mine",
        component: () => import("@/views/Mine")
      },
      {
        path: "/topic",
        name: "topic",
        component: () => import("@/views/Topic")
      },
      {
        path: "/search",
        name: "search",
        component: () => import("@/views/Search")
      },
    ]
  },
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  routes,
  linkActiveClass: 'active'
})

export default router
