import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
      {
        title: "看书",
        complete: false,
      },
      {
        title: "弹琴",
        complete: false,
      },
      {
        title: "打代码",
        complete: true,
      },
    ]
  },
  mutations: {
    // 添加任务
    addTodo(state, payload) {
      state.list.push(payload)
    },
    // 删除任务
    delTodo(state, payload) {
      state.list.splice(payload, 1)
    },
    // 清除已完成
    clear(state, payload) {
      state.list = payload;
    }
  },
})
