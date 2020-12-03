import request from '@/utils/request'

export function ClassTopicList(query) { // 专题分类列表
  return request({
    url: '/topic/category/list',
    method: 'get',
    params: query
  })
}

export function getListL1() { // 专题分类列表
  return request({
    url: '/topic/category',
    method: 'get'
  })
}

export function AddClassTopic(data) { // 添加专题文章分类
  return request({
    url: 'topic/category/create',
    method: 'post',
    data
  })
}

export function UpdateClassTopic(data) { // 更新专题文章
  return request({
    url: 'topic/category/update',
    method: 'post',
    data
  })
}

export function DeleteClassTopic(data) { // 更新专题文章
  return request({
    url: 'topic/category/delete',
    method: 'post',
    data
  })
}
