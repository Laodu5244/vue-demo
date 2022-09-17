import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import request from '@/utils/request.js'


Vue.config.productionTip = false;
Vue.prototype.axios = axios
Vue.prototype.request = request

new Vue({
  render: h => h(App),
}).$mount('#app')
