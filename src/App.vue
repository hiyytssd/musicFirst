 <template>
  <div id="app">
      <div class="mheader">
        <img src="./assets/logomusic.png" alt="">
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <div class="nav-wrapper">
        <nav-top></nav-top>
    </div>
    <router-view/>
    <song-play></song-play>
  </div>
</template>

<script>
import NavTop from "@/components/nav/nav";
import SongPlay from '@/components/songplay/songplay'

export default {
  name: "App",
  components: {
    NavTop,
    SongPlay
  }
};
</script>

<style lang="less">
.mheader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #31c27c;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  img {
    width: 90px;
    height: 25px;
  }
}
body {
  margin: 0 auto;
  max-width: 640px;
  font-family: "微软雅黑";
}
</style>
