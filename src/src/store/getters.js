export const singer = state => state.singer
/*
    expport const singer = function state(){
        return state.singer
    }
*/

export const isplaying = state => state.isplaying
export const fullScreen = state => state.fullScreen
export const playList = state => state.playList
export const sequenceList = state => state.sequenceList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex

// getters可以担任计算属性,通过currentIndex 获取currentSong

export const currentSong = (state) =>{
    return state.playList[state.currentIndex] || {}
}