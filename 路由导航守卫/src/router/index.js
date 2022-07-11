import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: Login
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/blog",
    component: () => import('@/views/Blog')
  },
  {
    path: "/video",
    component: () => import('@/views/Video')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    if (localStorage.getItem('user')) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
