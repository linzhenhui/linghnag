import 'babel-polyfill'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../components/index/index.vue'], resolve),
      meta: {
        businessName: '',
      }
    },{
      path: '/text',
      name: 'text',
      component: resolve => require(['../components/Test.vue'], resolve),
      meta: {
        businessName: '',
      }
    },
  ]
})
