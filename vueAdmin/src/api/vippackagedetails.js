import request from '@/utils/request'

export function getVipDetails(query) {
  return request({
    url: '/member/package/read',
    method: 'get',
    params: query
  })
}

export function getVipUserDetails(query) {
  return request({
    url: '/member/package/listuser',
    method: 'get',
    params: query
  })
}
