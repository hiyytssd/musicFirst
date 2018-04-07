import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getSongList(singerid) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
    const data = Object.assign({}, commonParams, {
        singerid: singerid,
        uin: 0,
        notice: 0,
        platform: 'h5page',
        needNewCode: 1,
        order: 'listen',
        from: 'h5',
        num: 15,
        begin: 0,
        _: 1522304854846
    })
    return jsonp(url, data, options)
} 