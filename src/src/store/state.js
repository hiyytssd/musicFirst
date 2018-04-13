// 状态
import { playMode } from 'common/js/config'
const state = {
    singer: {},
    // 播放器
    isplaying: false,//是否播放
    fullScreen: false,//是否全屏幕
    playList: [],//播放列表
    sequenceList: [],//播放模式
    mode: playMode.sequence,
    currentIndex: -1 //当前播放的歌曲
}

export default state