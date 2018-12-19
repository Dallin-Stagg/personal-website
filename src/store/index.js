import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		showContact: false,
		menuOpen: false,
		alertInfo: {
			type: '',
			text: '',
			show: false
		}
  },
  mutations: {
		toggleModal: state => {
			state.showContact = !state.showContact
		},
		toggleMenu: state => {
			state.menuOpen = !state.menuOpen
		},
		toggleAlert: (state, info) => {
			state.alertInfo.type = info.type
			state.alertInfo.text = info.text
			state.alertInfo.show = true
		},
		clearAlert: state => {
			state.alertInfo.show = false
		}
  },
  actions: {
			/* testThat ({ commit }) {
				console.log('hello hello hello')
			} */
    }
})