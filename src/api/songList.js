/**
 * 获取歌手详情页的歌曲
 */

import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getSongList(singermid) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
    const data = Object.assign({}, commonParams, {
        // singermid: singermid,
        // uin: 0,
        // notice: 0,
        // platform: 'h5page',
        // needNewCode: 1,
        // order: 'listen',
        // from: 'h5',
        // num: 15,
        // begin: 0,
        // _: 1522304854846

        g_tk: 5381,
        // jsonpCallback: MusicJsonCallbacksinger_track
        loginUin: 0,
        hostUin: 0,
        // format: jsonp
        notice: 0,
        platform: 'yqq',
        needNewCode: 0,
        singermid: singermid,
        order: 'listen',
        begin: 0,
        num: 30,
        songstatus: 1
    })
    return jsonp(url, data, options)
} 