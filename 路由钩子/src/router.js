import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/demo1',
    // 路由独享守卫
    beforeEnter:(to,from,next)=>{
      next(true)
    },
    component: () => import('@/views/Demo1.vue')
  },
  {
    path: '/demo2',
    component: () => import('@/views/Demo2.vue')
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

// 全局前置守卫
router.beforeEach((to,from,next)=>{
 next()
})

// 全局解析守卫
router.beforeResolve((to,from,next)=>{
  next()
})

// 全局后置钩子(不接受next函数,也不会改变导航本身)
router.afterEach((to,from,failure)=>{
  console.log(!failure)
})

export default router
