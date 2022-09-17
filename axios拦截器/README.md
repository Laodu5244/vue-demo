<!-- 添加项 -->
module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080
  }
}
<!-- 配置跨域 -->
devServer: {
  proxy:{
    '/api':{
      // 目标路径
      target:'http://localhost:3030/',
      // 允许跨域
      changOrigin:true,
      // 重写路径
      pathRewrite:{
        '^/api':''
      }
    }
  }
}
