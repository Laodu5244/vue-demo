import VueRouter from 'vue-router'
import Home from "@/views/Home";
import My from "@/views/My";
import Order from "@/views/Order";
import Category from "@/views/Category";

export default new VueRouter({
  routes: [
    {
      path: '/',
      redierct: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/category',
      component: Category
    },
  ]
})

