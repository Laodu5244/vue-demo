import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入初始化css文件
import '@/assets/common.css'
// 引入vant
import '@/plugins/vant.js'

import echarts from '@/plugins/echarts'

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue()
Vue.use(echarts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
