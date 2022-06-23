import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Hemo",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    component: () => import("@/views/List")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/Cart")
  },
  {
    path: "/my",
    name: "My",
    component: () => import("@/views/My")
  },
  {
    path: "/tea",
    name: "Tea",
    component: () => import("@/views/Tea")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
