import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerIsCompressed: false
  },
  mutations: {
    setUser: state => {
        state.headerIsCompressed = !state.headerIsCompressed
      }
  },
  actions: {
        /* testThat ({ commit }) {
            console.log('hello hello hello')
        } */
    }
})