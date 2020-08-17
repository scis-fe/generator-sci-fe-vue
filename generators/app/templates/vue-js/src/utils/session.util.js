/**
 * 一个简化版的状态传输管理器，相当于一个low版的Vuex
 * --------------------------------------------------------------
 * 用法：  在main的js中引用后挂在到根vue的data属性上（实现响应式）
 *        通过原型链方法挂载到Vue对象上，使用的时候任何页面都可以使用 this.$session.xxxx
 * 
 * 增强：  可以在根路径中type.d.ts文件中配置引用提示，这样VSCode能够准确在做相关的代码提醒
 * -------------------------------------------------------------------------------
 * import SessionUtil from './session.util.js'
 * Vue.prototype.$session = SessionUtil
 * new Vue({
 *  data: SessionUtil,
 *  store,
 *  render: h => h(App)
 * }).$mount('#app')
 */
export default {
  name: 'session.util',
  description: '共享数据'
}
