import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home';

const routes = [
  {
    path: "/",
    redirect: '/home',
  },
  {
    path: "/home",
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router