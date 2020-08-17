module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      useBuiltIns: 'usage',
      targets: {
        chrome: '40',
        ie: '9'
      },
      corejs: '3'
    }]
  ]
}
