import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 只有mutation才有权力去变更store里的数据，不可以在外部组件的其他函数里直接对store里的数据进行操作
  mutations: {
    add (state) {
      // 变更状态
      // 不要在mutations函数中，执行异步操作
      // setTimeout(() => {
      //   state.count++
      // }, 1000)
      state.count++
    },
    // 传递参数，step是传的值
    addN (state, step) {
      // 变更状态
      state.count += step
    },
    sub (state) {
      state.count--
    },
    subN (state, step) {
      // 变更状态
      state.count -= step
    }
  },
  // 用于处理异步任务
  // action还是要通过出发Mutation的方式间接变更数据
  actions: {
    addAsync (context) {
      setTimeout(() => {
        // 在actions中，不能直接修改state中的数据
        // 必须通过context.commit() 触发某个mutation才行
        context.commit('add')
      }, 1000)
    },
    addNAsync (context, step) {
      setTimeout(() => {
        // 在actions中，不能直接修改state中的数据
        // 必须通过context.commit() 触发某个mutation才行
        context.commit('addN', step)
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        // 在actions中，不能直接修改state中的数据
        // 必须通过context.commit() 触发某个mutation才行
        context.commit('sub')
      }, 1000)
    },
    subNAsync (context, step) {
      setTimeout(() => {
        // 在actions中，不能直接修改state中的数据
        // 必须通过context.commit() 触发某个mutation才行
        context.commit('subN', step)
      }, 1000)
    }
  },
  getters: {
    showNum (state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  },
  modules: {
  }
})
