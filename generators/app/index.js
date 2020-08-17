const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: '请输入项目名称',
                default: 'scis-standard-vue-project'
            },
            {
                type: 'input',
                name: 'version',
                message: '请输入版本号',
                default: '1.0.0'
            }
        ]).then(answers => {
            this.answers = answers
        })
    }
    writing() {
        const fileList = [
            'public/img/icons/android-chrome-192x192.png',
            'public/img/icons/android-chrome-512x512.png',
            'public/img/icons/apple-touch-icon-120x120.png',
            'public/img/icons/apple-touch-icon-152x152.png',
            'public/img/icons/apple-touch-icon-180x180.png',
            'public/img/icons/apple-touch-icon-60x60.png',
            'public/img/icons/apple-touch-icon-76x76.png',
            'public/img/icons/apple-touch-icon.png',
            'public/img/icons/favicon-16x16.png',
            'public/img/icons/favicon-32x32.png',
            'public/img/icons/msapplication-icon-144x144.png',
            'public/img/icons/mstile-150x150.png',
            'public/img/icons/safari-pinned-tab.svg',
            'public/favicon.ico',
            'public/index.html',
            'public/manifest.json',
            'public/robots.txt',
            'src/assets/logo.png',
            'src/import/i.element.js',
            'src/import/i.vant.js',
            'src/import/readme.md',
            'src/utils/common.util.js',
            'src/utils/EncryptUtils.js',
            'src/utils/GlobalData.js',
            'src/utils/Http.js',
            'src/views/About.vue',
            'src/views/Home.vue',
            'src/App.vue',
            'src/main.js',
            'src/registerServiceWorker.js',
            'src/router.js',
            'src/store.js',
            '.browserslistrc',
            '.editorconfig',
            '.env',
            '.env.dev.build',
            '.env.dev.run',
            '.env.prod.build',
            '.eslintrc.js',
            '.prettierrc.js',
            'babel.config.js',
            'package.json',
            'postcss.config.js',
            'README.md',
            'vue.config.js',
        ]
        const context = this.answers || {}
        fileList.forEach(el => {
            const targetPath = this.answers.name + '/' + el
            const tmpl = this.templatePath(el)
            const output = this.destinationPath(targetPath)
            this.fs.copyTpl(tmpl, output, context)
        })

    }
}
