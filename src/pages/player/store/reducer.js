import { Map } from "immutable"

import * as ActionType from "./constants"
const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSongs: []
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_SONGS:
      return state.set("currentSongs", action.currentSongs)
    case ActionType.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList)
    case ActionType.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex)
    default:
      return state
  }
}