module.exports = {
  // 基本路径
  publicPath: process.env.BASE_URL,
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 请注意这一段配置是适用于本地访问，将/local转发到目标服务器跟路径
      '/local': {
        target: 'http://192.168.1.190:20060/',
        changeOrigin: true,
        pathRewrite: {
          '^/local': ''
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
