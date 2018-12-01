import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from '@/store/index'

Vue.use(Vuex)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
