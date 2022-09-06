import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path:'/summary',
    component:()=>import('@/views/Summary')
  },
  {
    path:'/hesuan',
    component:()=>import('@/views/Hesuan')
  },
  {
    path:'/area',
    component:()=>import('@/views/Area')
  },
  {
    path:'/goods',
    component:()=>import('@/views/Goods')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
