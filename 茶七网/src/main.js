import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

// 引入插件
import Vant from 'vant';
import 'vant/lib/index.css';
import LyTab from 'ly-tab';

// 使用插件
Vue.use(Vant);
Vue.use(LyTab);

// 公共css文件
import "@/assets/css/reset.css";
// 淘宝适配文件
import "@/assets/js/flexible.js"

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

