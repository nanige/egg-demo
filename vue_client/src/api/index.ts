import http from '@/utils/request'

export const indexList = (data:any) => {
  return http({
    url: '/list',
    method: 'get',
    params: data
  })
}

export const login = (data:any) => {
  return http({
    url: '/login',
    method: 'post',
    data
  })
}

