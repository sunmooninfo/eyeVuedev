/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'
import router from '@/router/router'
import { Message, MessageBox } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: 'http://192.168.1.14:8060/cms', // api 的 base_url
  // baseURL: 'http://192.168.1.66:8060/cms', // api 的 base_url
  baseURL: 'https://wwwapidev.6eye9.com/cms', // api 的 base_url
  timeout: 18000 // request timeout
})

// request interceptor
// service.interceptors.request.use(
//   config => {
//     if (!config.headers['X-Litemall-Token']) {
//       config.headers['X-Litemall-Token'] = `${window.localStorage.getItem(
//         'token'
//       ) || ''}`
//     }
//     return config
//   },
//   error => {
//     // Do something with request error
//     console.log(error) // for debug
//     Promise.reject(error)
//   }
// )

// response interceptor
service.interceptors.response.use( 
  response => {
    const res = response.data

    // else if (res.errno !== 0) {
    //   // 非5xx的错误属于业务错误，留给具体页面处理
    //   return Promise.reject(response)
    // }
    return response
  }, error => {
    console.log('err' + error)// for debug
    Message({
      message: '链接超时，请稍后再试',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
