import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/tool/list',
    method: 'get',
    params: query
  })
}
