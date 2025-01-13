import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count: (state) => state.count
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
})

export default store
