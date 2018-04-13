// mutation 的修改
import * as types from './mutation-types'

const mutations = {
    // 一些mutation先关的修改方法
    [types.SET_SINGER](state, singer){
        state.singer = singer
    },
    [types.SET_PLAYING_STATE](state, flag){
        state.isplaying = flag
    },
    [types.SET_FULL_SCREEN](state, flag){
        state.fullScreen = flag
    },
    [types.SET_PLAYLIST](state, list){
        state.playList = list
    },
    [types.SET_SEQUENCE_LIST](state, list){
        state.sequenceList = list
    },
    [types.SET_MODE](state, mode){
        state.mode = mode
    },
    [types.SET_CURRENT_INDEX](state,index){
        state.currentIndex = index
    }
}

export default mutations