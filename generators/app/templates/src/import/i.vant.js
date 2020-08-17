/**
 * Vant适用于WebApp功能开发，建议使用按需引入
 * 按需引入需引入该文件。
 *
 * 按需引入方法：
 * 1.首先，安装 babel-plugin-component
 *     npm install babel-plugin-component -D
 *
 * 2.然后，将 .babelrc 修改为：
 *     {
 *         "presets": [["es2015", { "modules": false }]],
 *         plugins: [
 *              ['import', {
 *                  libraryName: 'vant',
 *                  libraryDirectory: 'es',
 *                  style: true
 *              }, 'vant']
 *          ]
 *      }
 * 3.接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 i.element.js 中写入以下内容：
 *     Vue.component(Select.name, Select);
 *     或写为  Vue.use(Button)
 * 4.文档参考下边连接
 *     https://youzan.github.io/vant/#/zh-CN/
 */

import Vue from 'vue'
import { Button, DatetimePicker, Toast, Field, Steps, CellGroup, Cell, Uploader, Icon, Popup, Picker, Loading, CountDown, Image, DropdownMenu, DropdownItem, List, Switch } from 'vant'

Vue.use(Button)
Vue.use(DatetimePicker)
Vue.use(Toast)
Vue.use(Field)
Vue.use(Steps)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Uploader)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Loading)
Vue.use(CountDown)
Vue.use(Image)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(List)
Vue.use(Switch)