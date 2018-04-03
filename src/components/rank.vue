<template>
    <div class="rank">
        <div class="loading" v-if="loading">加载中...</div>
        <div class="rank-box" v-for="item in rankList">
            <div class="song-img">
                <img :src="item.picUrl" alt=""></div>
            <div class="song-list">
                <h3 class="song-title">{{item.topTitle}}</h3>
                <ul>
                    <li class="song-info" v-for="(song, index) in item.songList">{{++index}}<span class="text">{{song.songname}}</span>-{{song.singername}}</li> 
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { getRank } from "api/rank";
import { ERR_OK } from "api/config";
export default {
  data() {
    return {
      loading: true,
      rankList: []
    };
  },
  created() {
    this._getRank();
  },
  methods: {
    _getRank() {
      getRank().then(res => {
        if (res.code === ERR_OK) {
          this.loading = false;
          this.rankList = res.data.topList;
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.rank {
  padding-top:80px;
  margin: 11px;
  color: #000;
  .loading {
    margin-top: 100px;
    color: #555;
    font-size: 16px;
    text-align: center;
  }
  .rank-box {
    background-color: #fff;
    margin-top: 11px;
    display: flex;
    flex: 1 auto;
    .song-title {
      font-size: 16px;
      margin-bottom: 5px;
      font-weight: normal;
      margin-top: 11px;
    }
    .song-img {
      width: 100px;
      overflow: hidden;
      img {
        width: 100px;
      }
    }
    .song-list {
      flex: 1;
      margin: 0 10px 0 15px;
      justify-content: space-around;
      .song-info {
        font-size: 14px;
        color: #666;
        height: 22px;
        overflow: hidden;
        // overflow: hidden;
        // white-space: nowrap;
        // text-overflow: ellipsis;
        .text {
          color: #000;
          margin-left: 8px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>