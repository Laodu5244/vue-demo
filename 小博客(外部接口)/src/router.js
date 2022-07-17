import Vue from 'vue'
import VueRouter from 'vue-router'
import Show from '@/views/Show'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Show
  },
  {
    path: '/add',
    component: () => import('@/views/Add')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
