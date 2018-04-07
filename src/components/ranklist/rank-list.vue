<template>
    <div class="singer-detail">
        <p class="go-back" @click="goBack()"><i class="iconfont icon-fanhui1"></i></p>
        <div class="loading" v-if="isLoading">正在加载中...</div>
        <div class="container" v-if="!isLoading">
            <div class="singer-top">
                <img :src="avator" alt="" class="s-bg">
                <div class="singer-box">
                    <img class="avator" :src="avator" alt="">
                    <div class="singer-info">
                        <h3 class="sname">{{songlist.topinfo.ListName}}</h3>
                        <p class="fensi">第{{songlist.day_of_year}} 天</p>
                        <p class="introduce">{{songlist.date}}更新</p>
                    </div>
                </div>
                <div class="btn-play">播放全部</div>
            </div>
            <div class="song-container">
                <h6 class="title">歌曲&nbsp;共{{songlist.total_song_num}}首</h6>
                <div class="song-list">
                    <ul>
                        <li class="song-item" v-for="item in songlist.songlist">
                            <h3 class="song-name">{{item.data.songname}}</h3>
                            <p class="info">{{item.data.singer[0].name}} {{item.data.albumdesc}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getRankSongList } from "api/rankList.js";
import { ERR_OK } from "api/config";
export default {
  data() {
    return {
      isLoading: {
        type: Boolean,
        default: true
      },
      songlist: {
        type: Array
      },
      avator: {
        type: String
      }
    };
  },
  mounted() {
    this.getRankSongList();
  },
  methods: {
    goBack() {
      history.go(-1);
    },
    getRankSongList() {
      var sid = this.$route.params.topid;
      getRankSongList(sid).then(res => {
        if (res.code === ERR_OK) {
          console.log(res);
          this.songlist = res;
          this.avator = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${res
            .songlist[0].data.albummid}.jpg?max_age=2592000`;
          this.isLoading = false;
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.singer-detail {
  .go-back {
    position: fixed;
    right: 15px;
    top: 10px;
    color: #fff;
    .iconfont {
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
          margin-top: 25px;
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
      margin-left: -100px;
      left: 50%;
    }
  }
  .song-container {
    margin: 17px;
    .title {
      margin-bottom: 11px;
    }
    .song-item {
      line-height: 22px;
      margin-bottom: 11px;
      .song-name {
        color: #000;
        font-size: 16px;
      }
    }
  }
}
</style>