import axios from 'axios'

let request = axios.create()

//请求拦截器
request.interceptors.request.use(
  config =>{
    // 在请求头里添加token(一般是后端给的)
    config.headers.token = 'laodu'
    console.log('请求成功',config)
    // 拦截器必须有返回值
    return config
  }
) 

// 响应拦截器
request.interceptors.response.use(
  response =>{
    console.log('响应成功',response)
    // 拦截器必须有返回值
    return response.data
  },
  error =>{
    console.log('响应失败',error)
    // 返回一个新的promise来中断promise链
    return new Promise(()=>{})
  }
)

export default request