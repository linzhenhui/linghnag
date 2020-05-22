import 'babel-polyfill'
import $ from 'jquery'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 存储公用共享数据

const state = {
  logo: {
    name: '领航教育',
    url: 'linghang.net.cn'
  }
}

let mutations = {
}

let store = new Vuex.Store({
  state,
  mutations
})
export default store
