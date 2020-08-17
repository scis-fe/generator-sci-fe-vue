const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    // 基本路径
    publicPath: process.env.BASE_URL,
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: (config) => { },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            config.plugins.push(
                // 生产环境自动删除console
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            drop_debugger: true,
                            drop_console: true,
                        },
                    },
                    sourceMap: false,
                    parallel: true,
                }),
                // 开启Gzip,如果你需要静态生成gz文件，可引入该插件：const CompressionPlugin = require('compression-webpack-plugin')
                // new CompressionPlugin({
                //     filename: '[path].gz[query]',
                //     algorithm: 'gzip',
                //     test: /\.js$|\.html$|\.css/, // 匹配文件
                //     threshold: 102400, // 对超过100k的文件压缩
                //     deleteOriginalAssets: false // 是否删除源文件
                // })
            )
            // 超过预定大小的依赖包，将打包成单独的js文件
            config.optimization = {
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 400000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                return `npm.${packageName.replace('@', '')}`
                            }
                        }
                    }
                }
            }
        } else {
            config.mode = 'development'
        }
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
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
                target: 'http://192.168.1.190:8080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/local': ''
                }
            }
        },
        before: app => { }
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}
