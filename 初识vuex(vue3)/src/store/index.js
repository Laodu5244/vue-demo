import { createStore } from 'vuex'

export default createStore({
  // state 相当于data配置项
  state: {
    msg: 'hello world'
  },
  // getters 相当于computed配置项
  getters: {
    msg2(state) {
      return state.msg + '!!!'
    }
  },
  // getters 相当于methods配置项
  mutations: {
    msg3(state) {
      state.msg = 'vue is nice'
    },
    msg4(state) {
      state.msg = 'I like vuex'
    },
  },
  // actions处理异步函数
  actions: {
    msg4(ctx) {
      // 发请求
      setTimeout(() => {
        ctx.commit('msg4')
      }, 2000)
    }
  },
  modules: {
  }
})
