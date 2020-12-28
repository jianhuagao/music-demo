import { Map } from 'immutable'
import * as Type from '../store/constants'
const defaultState = Map({
  topBanners: [],
  hotBanners: [],
  newAlbum: [],
  upRanking: {},
  newRanking: {},
  originRanking: {}
})
function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case Type.CHANGE_TOP_BANNERS:
      // return { ...defaultState, topBanners: actions.topBanners }
      return state.set("topBanners", actions.topBanners)
    case Type.CHANGE_HOT_RECOMMEND:
      return state.set("hotBanners", actions.hotBanners)
    case Type.CHANGE_NEW_ALBUM:
      return state.set("newAlbum", actions.newAlbum)
    case Type.CHANGE_UP_RANKING:
      return state.set("upRanking", actions.upRanking)
    case Type.CHANGE_NEW_RANKING:
      return state.set("newRanking", actions.newRanking)
    case Type.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", actions.originRanking)
    default:
      return state
  }
}

export default reducer