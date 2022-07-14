import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  },
})

