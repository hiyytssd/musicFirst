<template>
    <div class="song-play">
        <!-- 歌曲播放页面 -->
        <div class="l">
            <div class="top-box">
                <h3 class="title">qq音乐 <i class="iconfont icon-downforward"></i></h3>
                <div class="needle-container">
                    <!-- 播放指针 -->
                    <img width="68" height="115" src="./../../assets/needle.png" alt="">
                </div>
            </div>
            <!-- 播放的旋转的图片 -->
            <div class="song-img">
                <div class="img-box">
                    <img src="" alt="" class="cd">
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
            <ul>
                <!-- <li>顺序</li> -->
                <li class="pre-song">
                    <i class="iconfont icon-047caozuo_shangyishou"></i>
                </li>
                <li class="play-pause">
                    <i class="iconfont icon-bofang"></i>
                </li>
                <li class="next-song">
                    <i class="iconfont icon-49xiayishou"></i>
                </li>
            </ul>
        </div>
        <audio id="audio" src=""></audio>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.song-play {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000;
  color: #fff;
  z-index: 100;
  display: none;
  .title {
    text-align: center;
    background-color: #31c27c;
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
  }
  .lyrics{
          position: absolute;
    bottom: 100px;
    text-align: center;
    width: 100%;
    line-height: 30px;
  }
  .isPlay{
      position: absolute;
      bottom:0;
      left: 0;
      width: 100%;
      background-color: #333;
      color:#fff;
      height: 40px;
      line-height: 44px;
      text-align: center;;
      li{
          float: left;
          width:33%;
      }
      .iconfont{
          font-size: 20px;
      }
  }
}
</style>