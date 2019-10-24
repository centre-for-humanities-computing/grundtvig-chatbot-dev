module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/grundtvig-chatbot-vue/'
    : '/'
  outputDir: './docs/',
  assetsDir: '../public/'
}
