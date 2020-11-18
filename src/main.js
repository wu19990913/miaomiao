import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
