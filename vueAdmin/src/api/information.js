import request from '@/utils/request'

export function getCompanyInformation(query) {
  return request({
    url: '/company/list',
    method: 'get',
    params: query
  })
}

export function createCompanyInformation(data) {
  return request({
    url: '/company/create',
    method: 'post',
    data
  })
}

export function updateCompanyInformation(data) {
  return request({
    url: '/company/update',
    method: 'post',
    data
  })
}

export function deleteCompanyInformation(data) {
  return request({
    url: '/company/delete',
    method: 'post',
    data
  })
}
