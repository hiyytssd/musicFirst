// 点击排行榜获取排行榜的歌曲及详情
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
export function getRankSongList( topid ){
    console.log(topid)
    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg"
    var data = Object.assign({}, commonParams, {
        uin: 0,
        notice: 0,
        palatform: 'h5',
        needNewCode: 1,
        tpl: 3,
        page: 'detail',
        type: 'top',
        _: '1522810119010',
        topid: topid
    })
    return jsonp(url, data, options)
}