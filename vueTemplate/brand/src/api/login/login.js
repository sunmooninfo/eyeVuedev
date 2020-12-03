import request from '@/utils/request'
const reg = '/auth/register' // 注册
export function uRegister (data) {
  return request({
    url: reg,
    method: 'post',
    data
  })
}

const Login = '/auth/login' // 登陆
export function uLogin (data) {
  return request({
    url: Login,
    method: 'post',
    data
  })
}

const homeList = '/brand/list' // home列表
export function getList (query) {
  return request({
    url: homeList,
    methods: 'get',
    params: query
  })
}
