import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		showResume: false,
		menuOpen: false
  },
  mutations: {
		toggleModal: state => {
			state.showResume = !state.showResume
		},
		toggleMenu: state => {
			state.menuOpen = !state.menuOpen
    }
  },
  actions: {
			/* testThat ({ commit }) {
					console.log('hello hello hello')
			} */
    }
})