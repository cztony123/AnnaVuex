import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {request} from './assets/js/request'

Vue.config.productionTip = false



//使用vue原型制作全局变量
Vue.prototype.$request=request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
