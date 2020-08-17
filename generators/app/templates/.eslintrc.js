module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 禁止在函数参数中出现重复名称的参数
        'no-dupe-args': 'error',
        // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 'error',
        // @fixable 禁止出现多余的分号
        'no-extra-semi': 'error',
        // @fixable 文件最后一行必须有一个空行
        'eol-last': 'off',
        // @fixable 一个缩进必须用四个空格替代
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        'eqeqeq': 'off',
        // @fixable function 的小括号之前必须要有空格
        'space-before-function-paren': 'off',
        // callback 中的 error 必须被处理
        'handle-callback-err': 'off',
        // @fixable 对象的最后一个属性末尾必须有逗号
        'comma-dangle': 'off',
        // @fixbale 函数前后的空格
        'arrow-spacing': 'off',
        // @fixable 函数体前边空格
        'space-before-blocks': 'off',
        // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        'eqeqeq': 'off',
        // @fixable function 的小括号之前必须要有空格
        'space-before-function-paren': 'off',
        // callback 中的 error 必须被处理
        'handle-callback-err': 'off',
        // @fixable 对象的最后一个属性末尾必须有逗号
        'comma-dangle': 'off',
        // @fixable 未使用变量
        'no-unused-vars': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    },

}
