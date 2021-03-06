import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: {}
    /* alertInfo: {
      type: "",
      text: "",
      show: false
    } */
  },
  mutations: {
    /* toggleAlert: (state, info) => {
      state.alertInfo.type = info.type;
      state.alertInfo.text = info.text;
      state.alertInfo.show = true;
    }, */
    clearAlert: state => {
      state.alertInfo.show = false;
    },
    updateTheme: (state, info) => {
      state.theme = info
    }
  },
  actions: {
    /* testThat ({ commit }) {
				console.log('hello hello hello')
			} */
  }
});
