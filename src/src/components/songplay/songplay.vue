<template>
<div class="cd" v-show="playList.length > 0">
  <transition name="normal">
    <div class="song-play" v-show="fullScreen">
        <div class="bg-img">
            <img :src="currentSong.image" alt="背景">
          <div class="mask"></div>
        </div>
        <!-- 歌曲播放页面 -->
        <div class="l">
            <div class="top-box">
                <h3 class="title" v-html="currentSong.name +' -- '+ currentSong.singer"></h3>
                <i class="iconfont icon-downforward" @click="back"></i>
                <div class="needle-container">
                    <!-- 播放指针 -->
                    <img width="68" height="115" src="./../../assets/needle.png" alt="">
                </div>
            </div>
            <!-- 播放的旋转的图片 -->
            <div class="song-img">
                <div :class="playCls">
                    <img :src="currentSong.image" width="230" height="230" alt="" class="">
                </div>
            </div>
            <!-- 歌词 -->
            <div class="lyrics">
                <h3 class="song-name">白羊座</h3>
                <div class="song-lyrics">
                    <p class="s-lyrics">我要是点</p>
                    <p class="s-lyrics">说点啥</p>
                    <p class="s-lyrics">好尴尬，不知道坚实的客户就看到</p>
                    <p class="s-lyrics">你是谁的谁</p>
                    <p class="s-lyrics">让谁流眼泪</p>
                    <p class="s-lyrics">这是啥子歌名啊</p>
                </div>
            </div>
        </div>
        <div class="isPlay">
            <!-- 歌曲播放进度 -->
            <div class="play-progress">
              <span class="time time-l">{{formatTime(currentTime)}}</span>
              <div class="progress-bar-wrapper">
                <progress-bar @percentChange= "percentChange" :percent = "percent"></progress-bar>
              </div>
              <span class="time time-r">{{formatTime(currentSong.duration)}}</span>
            </div>
            <ul>
                <!-- <li>顺序</li> -->
                <li class="pre-song">
                    <i @click="prev" class="iconfont icon-047caozuo_shangyishou"></i>
                </li>
                <li class="play-pause">
                    <i class="iconfont"  @click="togglePlaying" :class="{'icon-bofang': isplaying, 'icon-bofang1': !isplaying}"></i>
                </li>
                <li class="next-song">
                    <i @click="next" class="iconfont icon-49xiayishou"></i>
                </li>
            </ul>
        </div>
        <audio id="audio" src=""></audio>
    </div>
  </transition>
    
    <!-- 迷你小播放界面 -->
    <transition name="mini">
      <div class="mini-cd" v-show="!fullScreen" @click="open">
          <div class="cd-img">
              <img :class="playCls" :src="currentSong.image" alt="旋转的唱片" width="35" height="35">
              <div class="song-name" >
                <p class="song" v-html="currentSong.name"></p>
                <p class="singer" v-html="currentSong.singer"></p>
                <ul class="mini-control">
                  <!-- <li>顺序</li> -->
                  <!-- <li class="pre-song">
                      <i class="iconfont icon-047caozuo_shangyishou"></i>
                  </li> -->
                  <li class="play-pause"  @click.stop="togglePlaying">
                      <i class="iconfont" :class="{'icon-bofang': isplaying, 'icon-bofang1': !isplaying}"></i>
                  </li>
                  <!-- <li class="next-song">
                      <i class="iconfont icon-49xiayishou"></i>
                  </li> -->
              </ul>
              </div>
          </div>
      </div>
    </transition>
    <audio ref="audio" id="audio" :src="currentSong.url" @timeupdate="updateTime"></audio>
</div>
    
</template>

<script>
import img from "@/assets/logo.png";
import { mapGetters, mapMutations } from "vuex";

import ProgressBar from "@/base/progress-bar";
export default {
  data() {
    return {
      img: img,
      currentTime: 0,
      allTime: 0,
      wid:0
    };
  },
  computed: {
    ...mapGetters([
      "fullScreen",
      "playList",
      "currentSong",
      "isplaying",
      "currentIndex",
      "duration"
    ]),
    playCls() {
      return this.isplaying ? "img-box-active" : "img-box-active img-box-pause";
    },
    percent(){
      return this.currentTime / this.currentSong.duration
    }
  },
  methods: {
    back() {
      this.SETFULLSCREEN(false);
    },
    open() {
      this.SETFULLSCREEN(true);
    },
    togglePlaying() {
      this.SETPLAYINGSTATE(!this.isplaying);
    },
    prev() {
      //上一首歌曲
      let index = this.currentIndex - 1;
      if (index == -1) {
        index = 0;
      }
      this.SETCURRENTINDEX(index);
    },
    next() {
      // 下一首歌曲
      let index = this.currentIndex + 1;
      if (index == this.playList.length) {
        index = 0;
      }
      this.SETCURRENTINDEX(index);
      if (!this.isplaying) {
        this.togglePlaying();
      }
    },
    ...mapMutations({
      SETFULLSCREEN: "SET_FULL_SCREEN",
      SETPLAYINGSTATE: "SET_PLAYING_STATE",
      SETCURRENTINDEX: "SET_CURRENT_INDEX"
    }),
    updateTime(e) {//获取播放时间
      this.currentTime = e.target.currentTime;
      this.wid = e.target.currentTime / this.currentSong.duration;
      
    },
    // 时间格式化
    formatTime(interval) {
      // | 0 向下取整
      interval = interval | 0;
      var minute = (interval / 60) | 0;
      var second = interval % 60;
      second = second.toString().length > 1 ? second : "0" + second;
      minute = minute.toString().length > 1 ? minute : "0" + minute;
      return `${minute}:${second}`;
    },
    // 进度条改变
    percentChange(percent){
      this.$refs.audio.currentTime = this.currentSong.duration * percent
      this.$refs.audio.play()
    }
  },
  watch: {
    currentSong() {
      this.$nextTick(() => {
        this.$refs.audio.play();
      });
    },
    isplaying(newPlaying) {
      const audio = this.$refs.audio;
      newPlaying ? audio.play() : audio.pause();
    }
  },
  components: {
    ProgressBar
  }
};
</script>

<style scoped lang="less">
.bg-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(8px);
  background-color: #000;
}

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #000;
      opacity: 0.7;
    }
.cd {
  .normal-enter-active,
  .normal-leave-active {
    transition: all 0.3s ease;
  }
  .normal-enter,
  .normal-leave-to {
    transform: translateX(-100%);
  }
  .img-box-active {
    animation: mymove 10s infinite linear;
  }
  .img-box-pause {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
  }
  @keyframes mymove {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .song-play {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: #fff;
    z-index: 100;
  }
  .icon-downforward {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 28px;
  }
  // display: none;
  .title {
    text-align: center;
    // background-color: #31c27c;
    height: 40px;
    line-height: 40px;
    position: relative;
    font-size: 16px;
    .iconfont {
      position: absolute;
      left: 10px;
      font-size: 24px;
    }
  }
  .needle-container {
    position: absolute;
    top: 40px;
    right: 33%;
    width: 30px;
    height: 60px;
    z-index: 20;
  }
  .song-img {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background: #555;
    position: absolute;
    top: 110px;
    left: 50%;
    margin-left: -115px;
    overflow: hidden;
  }
  .lyrics {
    position: absolute;
    bottom: 100px;
    text-align: center;
    width: 100%;
    line-height: 30px;
  }
  .isPlay {
    position: absolute;
    bottom: 45px;
    left: 0;
    width: 100%;
    color: #fff;
    height: 40px;
    line-height: 44px;
    text-align: center;
    li {
      float: left;
      width: 33%;
    }
    .play-pause .iconfont {
      font-size: 30px;
    }
  }

  .mini-enter-active,
  .mini-leave-active {
    transition: all 0.3s ease;
  }
  .mini-enter,
  .mini-leave-to {
    transform: translateX(100%);
  }
  .mini-cd {
    position: fixed;
    left: 0;
    bottom: 0;
    color: #fff;
    z-index: 100;
    height: 45px;
    width: 100%;
    background-color: pink;
    color: #333;
    right: -100%;
    .mini-control {
      position: absolute;
      right: 24px;
      top: 15px;
      .iconfont {
        font-size: 28px;
      }
    }
    img {
      border-radius: 50%;
      margin-top: -20px;
      margin-left: 10px;
    }
    .song-name {
      margin-top: 5px;
      display: inline-block;
      font-size: 16px;
      margin-left: 25px;
      .singer {
        font-size: 12px;
      }
    }
  }
  .progress-bar-wrapper {
    display: inline-block;
    vertical-align: middle;
    height: 6px;
    margin-left: 10px;
  }
}
</style>