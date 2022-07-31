import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import notice from '@/components/notice/index'

Vue.config.productionTip = false
Vue.use(ElementUI);

// 挂载到原型上
Vue.prototype.$notice = notice

new Vue({
  render: h => h(App)
}).$mount('#app')
