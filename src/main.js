import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store/index.js'
// import "./../node_modules/bulma/css/bulma.css";
//
import VueParticles from 'vue-particles'
import VueConfetti from 'vue-confetti'
 
Vue.use(Vuex)
Vue.use(VueParticles)
Vue.use(VueConfetti)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
