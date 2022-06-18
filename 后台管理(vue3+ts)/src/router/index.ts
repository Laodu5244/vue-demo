import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: HomeView,
    children: [
      {
        path: '',
        redirect: '/home/order'
      },
      {
        path: 'order',
        meta: { isShow: true, title: "人物列表" },
        component: () => import('../views/second/Order.vue')
      },
      {
        path: 'user',
        meta: { isShow: true, title: "用户列表" },
        component: () => import('../views/second/User.vue')
      },
      {
        path: 'tudu',
        meta: { isShow: true, title: "待办事项" },
        component: () => import('../views/second/Todo.vue')
      },
      {
        path: 'lady',
        meta: { isShow: true, title: "美女福利" },
        component: () => import('../views/second/Lady.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
