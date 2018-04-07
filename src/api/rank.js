import jsonp from 'common/js/jsonp';
import {commonParams, options} from 'api/config';

export function getRank() {
    var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg';
    const data = Object.assign({}, commonParams, {
        palatform: 'h5',
        uin: 0,
        needNewCode: 1
    });
    return jsonp(url, data, options);
}