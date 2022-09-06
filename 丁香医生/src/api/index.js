// 请求接口的方法
import axios from 'axios'
import base from '@/api/base'

const api = {
  // 病毒信息
  getCov(){
    return axios.get(base.host+base.cov)
  },
  // 国内疫情接口
  getChina(){
    return axios.get(base.url)
  }
}

export default api