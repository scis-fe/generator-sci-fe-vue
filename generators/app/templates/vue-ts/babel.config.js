module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'usage',
        targets: {
          chrome: '40',
          firefox: '40',
          ie: '8'
        }
      }
    ]
  ],
  plugins: ["@babel/plugin-transform-runtime"]
}
