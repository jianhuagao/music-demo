import { getCurrentSongs } from "@/services/player"
import * as ActionType from "./constants"

const changeCurrentSongsAction = (st) => ({
  type: ActionType.CHANGE_CURRENT_SONGS,
  currentSongs: st
})

export const getCurrentSongsAction = (ids) => {
  return dispatch => {
    getCurrentSongs(ids).then((currentSongs) => {
      dispatch(changeCurrentSongsAction(currentSongs.songs[0]))
    })
  }
}

export const changeCurrentSongIndexAction = (index) => ({
  type: ActionType.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex: index
})

export const changePlayListAction = (list) => ({
  type: ActionType.CHANGE_PLAY_LIST,
  playlist: list
})