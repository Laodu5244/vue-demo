import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
import router from './router'
Vue.use(VueRouter) //注册全局组件

Vue.config.productionTip = false
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
