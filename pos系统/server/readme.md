1. cnpm install express-generator -g

2. express  --views=ejs + (项目名)

3. cnpm run start

4, vue.config.js文件粘贴以下代码:
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