import request from '@/utils/request'

export function getVipOrder(query) {
  return request({
    url: '/member/order/list',
    method: 'get',
    params: query
  })
}

export function getOrderDetails(query) {
  return request({
    url: '/member/order/detail',
    method: 'get',
    params: query
  })
}

export function deleteVipOrder(data) {
  return request({
    url: '/member/order/delete',
    method: 'post',
    data
  })
}

