import request from '@/utils/request'

export function getIntegralGoods(query) {
  return request({
    url: '/integral/goods/list',
    method: 'get',
    params: query
  })
}

export function createIntegralGoods(data) {
  return request({
    url: '/integral/goods/create',
    method: 'post',
    data
  })
}

export function updateIntegralGoods(data) {
  return request({
    url: '/integral/goods/update',
    method: 'post',
    data
  })
}

export function deleteIntegralGoods(data) {
  return request({
    url: '/integral/goods/delete',
    method: 'post',
    data
  })
}
