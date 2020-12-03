import request from '@/utils/request'

export function getVipGoods(query) {
  return request({
    url: '/member/goods/list',
    method: 'get',
    params: query
  })
}

export function createVipGoods(data) {
  return request({
    url: '/member/goods/create',
    method: 'post',
    data
  })
}

export function updateVipGoods(data) {
  return request({
    url: '/member/goods/update',
    method: 'post',
    data
  })
}

export function deleteVipGoods(data) {
  return request({
    url: '/member/goods/delete',
    method: 'post',
    data
  })
}
