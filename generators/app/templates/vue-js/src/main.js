import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Net from './utils/net.util'

if (process.env.NODE_ENV==='production' && process.env.VUE_APP_MODE==='release') {
  Vue.config.productionTip = true
} else {
  Vue.config.productionTip = false
}

Vue.prototype.$http = Net

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
