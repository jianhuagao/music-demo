import * as action from './constants'
import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
  getTopList
} from '@/services/recommend'

const changeTopBannersAction = (res) => {
  return {
    type: action.CHANGE_TOP_BANNERS,
    topBanners: res
  }
}

export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannersAction(res.banners))
    })
  }
}

const changeHotBannersAction = (res) => {
  return {
    type: action.CHANGE_HOT_RECOMMEND,
    hotBanners: res
  }
}

export const getHotBannersAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(
      res => {
        dispatch(changeHotBannersAction(res.result))
      }
    )
  }
}

const changeNewAlbum = (res) => ({
  type: action.CHANGE_NEW_ALBUM,
  newAlbum: res
})

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(
      res => {
        dispatch(changeNewAlbum(res.albums))
      }
    )
  }
}

const changeUpRankingAction = (rec) => ({
  type: action.CHANGE_UP_RANKING,
  upRanking: rec
})
const changeNewRankingAction = (rec) => ({
  type: action.CHANGE_NEW_RANKING,
  newRanking: rec
})
const changeOriginRankingAction = (rec) => ({
  type: action.CHANGE_ORIGIN_RANKING,
  originRanking: rec
})

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then((rec) => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(rec.playlist))
          break;
        case 2:
          dispatch(changeNewRankingAction(rec.playlist))
          break;
        case 3:
          dispatch(changeOriginRankingAction(rec.playlist))
          break;
        default:
      }
    })
  }
}