import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home';
import Fruit from '@/views/Fruit';

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
  {
    path: "/fruit",
    name: 'fruit',
    component: Fruit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router