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
    path:'/ajax',
    component:()=>import('@/views/Ajax.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
