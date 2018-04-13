export default class Song {
    constructor({
        id,mid,singer,name,album,duration,image,url,albumdesc
    }){
        this.id = id,
        this.mid = mid,
        this.singer = singer,
        this.name = name,
        this.album = album,
        this.duration =duration,
        this.image =image,
        this.url = url,
        this.albumdesc = albumdesc
    }
}

export function createSong(musicData){
    return new Song({
        id:musicData.songid,
        mid: musicData.songmid,
        singer: filterSinger(musicData.singer),
        name: musicData.songname,
        album: musicData.albumname,
        duration: musicData.interval,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        // url:`http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
        url: `http://ws.stream.qqmusic.qq.com/C100${musicData.songmid}.m4a?fromtag=0`,
        albumdesc: musicData.albumdesc
    })
}

function filterSinger(singer){
    let ret = []
    if(!singer){
        return ''
    }
    singer.forEach( (sin) => {
        ret.push(sin.name)
    })
    return ret.join('/')
}


// //dl.stream.qqmusic.qq.com/C400001Qu4I30eVFYb.m4a?guid=8942197590&vkey=D556AA51DE04F5C761F1ABC112F0FE2DAF3B322D89FB61203CC31D3CF99E9EFCB22A56BD7304DBCD3F67EFCAA2BE0EDDE9FA30E54A2B2373&uin=0&fromtag=38

// http://dl.stream.qqmusic.qq.com/C400001Qu4I30eVFYb.m4a?guid=8942197590&vkey=AF537C4C7129FB9C870F3CC1C5E327EDA9D1D649C5E239A7CACB16D7BFADDABA0B25B9ED6870277EE7335E91478E88EB45CED740A56EC778&uin=0&fromtag=38


// http://ws.stream.qqmusic.qq.com/C100002qU5aY3Qu24y.m4a?fromtag=0