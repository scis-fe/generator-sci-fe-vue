# import文件夹用于存储按需引入的相关配置，便于有效的降低打包尺寸提升加载效率
# 特别是手机端服务，推荐使用按需加载

# 规范

* 1.每个组件可建立一个引入文件，命名如：`i.vant.js`

# babel配置

* 1.安装`babel-plugin-import`依赖

```
npm i babel-plugin-import -D
```

* 2.配置`babel.config.js`

```
module.exports = {
    // 如下配置
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
}
```

# i.vant.js 示例

> 工程中使用到的组件均需要在对应的文件中注册

```
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
```

# 在 main.js 中引入

```
import './import/i.vant'
```