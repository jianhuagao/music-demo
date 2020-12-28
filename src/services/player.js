import request from './request'

export function getCurrentSongs(ids) {
  return request({
    url: '/song/detail',
    params: { ids }
  })
}
