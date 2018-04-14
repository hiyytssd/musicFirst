<template>
    <div class="singer-detail">
        <div class="loading-wrapper">
          <loading v-if="isLoading"></loading>
        </div>
        <!-- 返回 -->
        <p class="go-back" @click="goBack"><i class="iconfont icon-fanhui1"></i></p>
        <song-list @select="selectItem" @playAll="playAll"  v-if="!isLoading"  :avator="avator" :title="title" :songs="songs" :total="total"></song-list>
        </div>
    </div>
</template>

<script>
import { getSongList } from "api/songList";
import loading from '@/base/loading/loading'
import { ERR_OK } from "api/config";
// 导入 vuex的辅助函数
import {mapGetters} from 'vuex'
import {createSong} from 'common/js/song.js'
import SongList from '@/components/song-list/song-list'
import {mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters([
      'singer'
    ]),
    title(){
      return this.singer.name;
    },
    avator(){
      return `https://y.gtimg.cn/music/photo_new/T001R150x150M000${this.singer.id}.jpg?max_age=2592000`;
    },
    total(){
      return this.singer.total
    }
  },
  data() {
    return {
      isLoading: {
        type: Boolean,
        default: true
      },
      songs: []
    };
  },
  mounted(){
    this._getSongList();
  },
  methods: {
    goBack(){
      this.$router.push('/singer')
    },
    ...mapActions([
      'selectPlay',
      'reandomPlay'
    ]),
    selectItem(item, index){
      // 提交mutations
      this.selectPlay({
        list: this.songs,
        index
      })
    },
    playAll(songs){
      this.reandomPlay({
        list: this.songs
      })
    },
    _getSongList() {
      var sid = this.singer.id;
      getSongList(sid).then(res => {
        if(!sid){
          this.$router.push('/singer')
          return
        }
        if (res.code === ERR_OK) {
          this.songs = this._normalSong(res.data.list)
          console.log(this.songs);
          // this.avator = `https://y.gtimg.cn/music/photo_new/T001R150x150M000${res
          //   .data.singer_mid}.jpg?max_age=2592000`;
          this.isLoading = false;
        }
      });
    },
    _normalSong(list){
      let ret = []
      list.forEach( (item) => {
        let musicData = item.musicData;
        if(musicData.songid && musicData.albummid){
          ret.push(createSong(musicData))
        }
      })
      return ret;
    }
  },
  components:{
    loading,
    SongList
  }
};
</script>

<style scoped lang="less">
.singer-detail {
.go-back{
    position: fixed;
    right: 15px;
    top:10px;
    color:#fff;
    .iconfont{
      font-size: 24px;
    }
}
  background: #fff;
  position: fixed;
  z-index: 100;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100%;

  .singer-top {
    position: relative;
    width: 100%;
    height: 234px;
    overflow: hidden;
    color: #fff;
    background: #fff;
    .s-bg {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      transform: scale(1.5);
      filter: blur(30px);
    }
    .singer-box {
      position: absolute;
      top: 23px;
      right: 18px;
      bottom: 21px;
      left: 18px;
      display: flex;
      .avator {
        width: 125px;
        height: 125px;
      }
      .singer-info {
        flex: 1;
        width: 125px;
        margin-right: 10px;
        margin-left: 10px;
        overflow: hidden;
        .sname {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          max-height: 47px;
          line-height: 1.3;
          overflow: hidden;
          font-size: 18px;
          margin-top: 8px;
        }
        .fensi {
          margin-top: 8px;
          font-size: 14px;
        }
        .introduce {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          margin-top: 8px;
          font-size: 12px;
          line-height: 25px;
        }
      }
    }
    .btn-play {
      position: absolute;
      bottom: 21px;
      width: 200px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 40px;
      background-color: #31c27c;
      //   color:#fff;
      font-size: 18px;
      margin-left:-100px;
      left:50%;
    }
  }
  .song-container{
      margin:17px;
      .title{
          margin-bottom:11px;
      }
      .song-item{
          line-height: 22px;
          margin-bottom:11px;
          .song-name{
              color:#000;
              font-size: 16px;
          }
      }
  }
}
</style>