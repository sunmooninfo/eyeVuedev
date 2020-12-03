import request from '@/utils/request'

export function getCommission(query) {
  return request({
    url: '/commission/list',
    method: 'get',
    params: query
  })
}
