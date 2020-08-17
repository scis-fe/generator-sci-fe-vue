# sci-fe-vue

VueJS 2.0工程初始化模板


# 安装

```
npm install --g yo
npm install --g generator-sci-fe-vue

OR:

yarn global add yo
yarn global add generator-sci-fe-vue
```

# 使用
```
yo sci-fe-vue
```


# 更新

```
npm update -g generator-sci-fe-vue
yarn global upgrade generator-sci-fe-vue
```

# 模板说明

### vue-ts
```
  |-- public
  |-- src
    |-- @types    //：配置全局的或者是引用库的TS声明
    |-- assets
    |-- components
    |-- import    //：配置加载Vue Plugin的引入
    |-- router
    |-- store
    |-- utils     //：这里封装服务和插件 如网络请求、加密、公共插件等
    |-- views
    |-- App.vue
    |-- main.js
  |-- .env.
  |-- .env.dev.run.conf
  |-- .env.prod.build.conf
```
### vue-js
```
  |-- public
  |-- src
    |-- assets
    |-- components
    |-- import    //：配置加载Vue Plugin的引入
    |-- router
    |-- store
    |-- utils     //：这里封装服务和插件 如网络请求、加密、公共插件等
    |-- views
    |-- App.vue
    |-- main.js
  |-- .env.
  |-- .env.dev.run.conf
  |-- .env.prod.build.conf
  |-- tpye.d.ts  //：配置通过原型链挂在到Vue上的一些提示，便于VSCode更准确的提供代码提醒
```

