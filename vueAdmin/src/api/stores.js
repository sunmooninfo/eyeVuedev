import request from '@/utils/request'

export function getStores(query) {
  return request({
    url: '/signstore/list',
    method: 'get',
    params: query
  })
}

export function createStores(data) {
  return request({
    url: '/signstore/create',
    method: 'post',
    data
  })
}

export function deleteStores(data) {
  return request({
    url: '/signstore/delete',
    method: 'post',
    data
  })
}

export function updateStores(data) {
  return request({
    url: '/signstore/update',
    method: 'post',
    data
  })
}
