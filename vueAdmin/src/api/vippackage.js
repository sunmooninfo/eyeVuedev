import request from '@/utils/request'

export function getPackage(query) {
  return request({
    url: '/member/package/list',
    method: 'get',
    params: query
  })
}

export function createPackage(data) {
  return request({
    url: '/member/package/create',
    method: 'post',
    data
  })
}

export function updatePackage(data) {
  return request({
    url: '/member/package/update',
    method: 'post',
    data
  })
}

export function deletePackage(data) {
  return request({
    url: '/member/package/delete',
    method: 'post',
    data
  })
}
