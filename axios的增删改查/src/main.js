import Vue from 'vue'
import App from './App'
import store from './store'

Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
