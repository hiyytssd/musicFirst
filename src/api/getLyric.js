import {commonParams, options} from './config'
import {jsonp} from 'common/js/jsonp'
// 获取歌词js
export function getLyric(mid){
    const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg'
    var data = Object.assign({}, commonParams, {
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        nobase64: 1,
        musicid: mid, // 213266098
        songtype: 0,
        _: 1523695341236
    })
    return jsonp(url, data, options)
}