import axios from 'axios'
import config from '@/config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

axios.defaults.baseURL = baseUrl
axios.defaults.headers['Content-Type'] = 'application/json'

// import { Spin } from 'iview'
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  // if (!responseURL.includes('save_error_logger')) {
  //   store.dispatch('addErrorLog', info)
  // }
  console.log(info)
}

axios.interceptors.request.use(
  config => {
    // 添加全局的loading...
    if (localStorage.token) {
      config.headers.Authorization = localStorage.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  res => {
    if (res.data.errno === 999) {
      console.log('token过期')
    }
    return res
  },
  error => {
    let errorInfo = error.response
    if (!errorInfo) {
      const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
      errorInfo = {
        statusText,
        status,
        request: { responseURL: config.url }
      }
    }
    addErrorLog(errorInfo)
    return Promise.reject(error)
  }
)

export default axios
