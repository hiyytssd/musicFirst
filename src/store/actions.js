import * as types from './mutation-types'
import { playMode } from "common/js/config";
import { shuffle } from "common/js/util.js";

// 异步操作或者封装
export const selectPlay = function({commit, state}, {list, index}){//选择歌曲
    //提交mutation
    commit(types.SET_SEQUENCE_LIST, list)
    commit(types.SET_PLAYLIST, list)
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}

export const reandomPlay = function({commit},{list}){
    commit(types.SET_MODE, playMode.random)
    commit(types.SET_SEQUENCE_LIST, list)
    let randomList  = shuffle(list)
    commit(types.SET_PLAYLIST, randomList)
    commit(types.SET_CURRENT_INDEX, 0)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}