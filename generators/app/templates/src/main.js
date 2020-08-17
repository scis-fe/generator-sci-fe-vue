import Vue from 'vue'
import App from './App.vue'
import './utils/common.util'
import iGlobalData from './utils/GlobalData'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iHTTP from './utils/Http'

if (process.env.VUE_APP_RUN_MODE == 'release') {
    Vue.config.productionTip = true
    iHTTP.debug = false
} else {
    Vue.config.productionTip = false
    iHTTP.debug = true
}

Vue.prototype.$share = iGlobalData
Vue.prototype.$http = iHTTP

Vue.use(ElementUI)

new Vue({
    router,
    store,
    data: iGlobalData,
    render: h => h(App)
}).$mount('#app')
