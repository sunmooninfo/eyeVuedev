import request from '@/utils/request'


const home = '/home/index' // 首页
export function getHome (query) {
  return request({
    url: home,
    method: 'get',
    params: query
  })
}

const bannerList = '/category/all' // banner列表
export function getBannerList (query) {
  return request({
    url: bannerList,
    methods: 'get',
    params: query
  })
}

const category = '/article/list' // 获取分类
export function getCategory (query) {
  return request({
    url: category,
    methods: 'get',
    params: query
  })
}

const detail = '/article/detail' // 获取详情
export function getDetail (query) {
  return request({
    url: detail,
    methods: 'get',
    params: query
  })
}

const current = '/category/current' // 获取当前类目列表
export function getCurrent (query) {
  return request({
    url: current,
    methods: 'get',
    params: query
  })
}

const search = '/article/search' // 搜索
export function searchList (query) {
  return request({
    url: search,
    methods: 'get',
    params: query
  })
}

const add = '/contact/add' // 发送信息
export function sendMessage (data) {
  return request({
    url: add,
    method: 'post',
    data
  }) 
}

const homeab = '/home/about' // 首页相关
export function searchhomeAbout (query) {
  return request({
    url: homeab,
    methods: 'get',
    params: query
  })
}

const certificate = '/article/certificate' // 证书
export function certificateteGet (query) {
  return request({
    url: certificate,
    methods: 'get',
    params: query
  })
}


