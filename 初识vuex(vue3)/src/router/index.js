import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

// 路由规则
const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
