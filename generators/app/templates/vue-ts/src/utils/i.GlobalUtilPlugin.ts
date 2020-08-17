import Vue from 'vue'
import Net from './net.util'

export default {
  install (): void {
    Vue.prototype.$http = Net
  }
}
