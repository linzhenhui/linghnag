// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './tools/tool.js' // 工具类
import './tools/ajax.js' // 封装ajax
import './tools/DateUtil.js' // 日期
import './tools/native.js' // native
import './tools/decimal.js' // decimal
import './tools/validator.js' // 校验工具类
import './config/global.js'

import store from './store/' // vuex 数据共享

Vue.prototype.$store = store
Vue.config.productionTip = false// 设置为 false 以阻止 vue 在启动时生成生产提示。
let vm = new Vue()

router.beforeEach((to, from, next) => {
  vm.toast = vm.$toast.loading({
    mask: true,
    duration: 0
  })
  let meta = to.meta

  if (meta.businessName) {

    document.title = `领航教育-${meta.businessName}`;
  }
  if (meta.needLogin !== false) { // 是否需要登录，不为false时，默认认为是需要登录的
  }
  next()
})
router.afterEach((to, from) => {
  if (vm.toast) {
    window.toastTimer = setTimeout(() => {
      vm.toast.clear()
    }, 100)
  }
})
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  data: {
    eventHub: new Vue()
  },
  components: { App },
  render: (h) => h(App)
  // store
})
