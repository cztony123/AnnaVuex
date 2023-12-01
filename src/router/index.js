import Vue from 'vue'
import VueRouter from 'vue-router'
import {request} from '../assets/js/request'

Vue.use(VueRouter)

//使用vue原型制作全局变量
Vue.prototype.$request=request

const routes = [
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/',
    name: 'pages',
    component: () => import('../pages/index/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
