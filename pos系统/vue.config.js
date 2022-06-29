module.exports = {
  lintOnSave: false,
  // 跨域代理,请求后端接口
  devServer: {
    proxy: {
      'api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
