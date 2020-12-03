import request from '@/utils/request'
const Detail = 'brand/detail' // 品牌介绍
export function getDetail (query) {
  return request({
    url: Detail,
    method: 'get',
    params: query
  })
}
const GoodsList = 'brand/list' // 品牌首页
export function goodsList () {
  return request({
    url: GoodsList,
    method: 'get'
  })
}
