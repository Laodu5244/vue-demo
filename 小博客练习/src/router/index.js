import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '@/views/Blog'
import Home from '@/views/Home'
import Single from '@/views/Single'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: "/",
    component: Home
  },
  {
    path: "/blog",
    component: Blog
  },
  {
    path: "/single/:id",
    component: Single
  },

]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
