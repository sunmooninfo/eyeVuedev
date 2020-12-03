import request from '@/utils/request'

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}

export function deleteArticle(data) {
  return request({
    url: '/article/delete',
    method: 'post',
    data
  })
}

export function detailArticle(query) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: query
  })
}

export function getArticleList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function categoryxList() {
  return request({
    url: '/categoryx/cate',
    method: 'get'
  })
}

export function categoryx() {
  return request({
    url: '/categoryx/list',
    method: 'get'
  })
}

export function categoryxCreate(data) {
  return request({
    url: '/categoryx/create',
    method: 'post',
    data
  })
}

export function categoryxRead(query) {
  return request({
    url: '/categoryx/read',
    method: 'get',
    params: query
  })
}

export function categoryxUpdate(data) {
  return request({
    url: '/categoryx/update',
    method: 'post',
    data
  })
}

export function categoryxDelete(data) {
  return request({
    url: '/categoryx/delete',
    method: 'post',
    data
  })
}
