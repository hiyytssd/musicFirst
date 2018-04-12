import * as types from './mutation-types'
// 异步操作或者封装
export const selectPlay = function({commit, state}, {list, index}){//选择歌曲
    //提交mutation
    commit(types.SET_SEQUENCE_LIST, list)
    commit(types.SET_PLAYLIST, list)
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}