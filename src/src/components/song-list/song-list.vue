<template>
    <div class="song-list">
        <p class="go-back" @click="goBack()"><i class="iconfont icon-fanhui1"></i></p>
        <div class="container">
            <div class="singer-top">
                <img :src="avator" alt="" class="s-bg">
                <div class="singer-box">
                    <img class="avator" :src="avator" alt="">
                    <div class="singer-info">
                        <h3 class="sname">{{title}}</h3>
                        <!-- <p class="fensi">粉丝：{{songlist.fans}} 人</p>
                        <p class="introduce">{{songlist.SingerDesc}}</p> -->
                    </div>
                </div>
                <div class="btn-play" @click="playAll(songs)">播放全部</div>
            </div>
            <div class="song-container">
                <h6 class="title">歌曲&nbsp;共{{total}}首</h6>
                <div class="song-list">
                    <ul>
                        <li class="song-item" v-for="(item, index) in songs" @click="selectItem(item, index)">
                            <h3 class="song-name">{{item.name}}</h3>
                            <p class="info">{{item.name}} {{item.albumdesc}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    avator: {
      type: String
    },
    title: {
      type: String
    },
    songs: {
      type: Array
    },
    total: {
      type: Number
    }
  },
  methods: {
    goBack() {
      history.go(-1);
    },
    selectItem(item, index){
      this.$emit('select', item, index)
    },
    playAll(songs){
      this.$emit('playAll',songs)
    }
  }
};
</script>

<style scoped lang="less">
.go-back {
  position: fixed;
  right: 15px;
  top: 10px;
  color: #fff;
  .iconfont {
    font-size: 24px;
  }
}

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
</style>