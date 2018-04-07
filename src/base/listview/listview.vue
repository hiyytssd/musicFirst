<template>
    <div class="list-view">
        <!-- 左侧歌手列表 -->
        <ul>
            <li class="singer-item" v-for="item in singList">
                <h3 :id="item.title" class="title">{{item.title}}</h3>
                <ul v-for="sing in item.items">
                    <li class="sing-info"  @click="openSongList(sing)">
                        <img :src="sing.avator" alt="" class="avator">
                        <span class="text">{{sing.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <!-- 右侧导航 -->
        <div class="nav-hot-box">
            <a v-for="item in singList"  href="" @click.prevent="custormAnchor(item.title)">{{item.title}}</a>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    singList: {
      type: Array
    }
  },
  methods: {
      custormAnchor(anchor) {
          document.getElementById(anchor).scrollIntoView();
      },
      openSongList(sing){
        this.$emit('selectSongList',sing);
      }
  }
};
</script>

<style scoped lang="less">
.list-view {
  background: #232322;
  color: #fff;
  .singer-item {
    .title {
      background-color: #353534;
      padding: 8px 20px;
      font-size: 16px;
    }
    .sing-info {
      margin-bottom: 11px;
      padding: 11px 20px;
      .avator {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      .text {
        margin-left: 25px;
        font-size: 14px;
      }
    }
  }
  .nav-hot-box {
    position: fixed;
    right: 0;
    top: 110px;
    background: #000;
    width:18px;
    text-align:center;
    white-space:nowrap;
    overflow: hidden;
    line-height: 20px;
    a{
        display: block;
        font-size: 14px;
    }
  }
}
</style>