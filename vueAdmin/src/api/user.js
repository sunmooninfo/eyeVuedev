import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/user/list',
    method: 'get',
    params: query
  })
}

export function listAddress(query) {
  return request({
    url: '/address/list',
    method: 'get',
    params: query
  })
}

export function listCollect(query) {
  return request({
    url: '/collect/list',
    method: 'get',
    params: query
  })
}

export function listFeedback(query) {
  return request({
    url: '/feedback/list',
    method: 'get',
    params: query
  })
}

export function listFootprint(query) {
  return request({
    url: '/footprint/list',
    method: 'get',
    params: query
  })
}

export function listHistory(query) {
  return request({
    url: '/history/list',
    method: 'get',
    params: query
  })
}

export function cityList(query) {
  return request({
    url: '/region/list',
    method: 'get',
    params: query
  })
}

export function addAdress(data) {
  return request({
    url: '/address/save',
    method: 'post',
    data
  })
}

export function updateAdress(data) {
  return request({
    url: '/address/save',
    method: 'post',
    data
  })
}

export function deleteAdress(data) {
  return request({
    url: '/address/delete',
    method: 'post',
    data
  })
}
