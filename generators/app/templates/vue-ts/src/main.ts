import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './utils/i.antDv'
import GlobalUtilPlugin from './utils/i.GlobalUtilPlugin'

Vue.use(GlobalUtilPlugin)

if (process.env.NODE_ENV === 'production' && process.env.VUE_APP_MODE === 'release') {
  Vue.config.productionTip = true
} else {
  Vue.config.productionTip = false
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
