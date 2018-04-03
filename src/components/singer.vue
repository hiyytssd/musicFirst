<template>
    <div class="singer">
        <list-view :singList="singerList" @selectSongList="openSongList"></list-view>
        <div class="songplay-wrapper">
          <!-- <song-play></song-play> -->
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { getSinger } from "api/singer.js";


import { ERR_OK } from "api/config";
import ListView from "@/base/listview/listview";
// import SongPlay from '@/components/songplay/songplay'
const HOST_LENGTH = 10;
const HOT_TITLE = "热门";
export default {
  data() {
    return {
      singerList: []
    };
  },
  created() {
    this._getSingerList();
  },
  methods: {
    openSongList(singList){
      console.log(singList)
          this.$router.push({
            path: `/singer/${singList.Fsinger_id}`
          })
    },
    _getSingerList() {
      getSinger().then(res => {
        if (res.code === ERR_OK) {
          //   this.singerList = res.data.list;
          console.log(res.data.list)
          this.singerList = this._normalizeList(res.data.list);
          // console.log(this.singerList);
        }
        // console.log(res.data.list);
      });
    },
    _normalizeList(list) {
      //将的到的歌手名单按照想要的顺序规范化
      let map = {
        hot: {
          title: HOT_TITLE,
          items: []
        }
      };
      list.forEach((item, index) => {
        if (index < HOST_LENGTH) {
          map.hot.items.push({
            id: item.Fsinger_mid,
            name: item.Fsinger_name,
            Fsinger_id:item.Fsinger_id,
            avator:
              "https://y.gtimg.cn/music/photo_new/T001R150x150M000" +
              item.Fsinger_mid +
              ".jpg?max_age=2592000"
          });
        }
        const key = item.Findex;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        map[key].items.push({
          id: item.Fsinger_mid,
          name: item.Fsinger_name,
          Fsinger_id:item.Fsinger_id,
          avator:
            "https://y.gtimg.cn/music/photo_new/T001R150x150M000" +
            item.Fsinger_mid +
            ".jpg?max_age=2592000"
        });
      });
      //  的到有序列表
      let ret = [];
      let hot = [];
      for (let key in map) {
        let value = map[key];
        if (value.title.match(/[a-zA-Z]/)) {
          ret.push(value);
        } else if (value.title == "9") {
          value.title = "#";
          ret.push(value);
        } else {
          hot.push(value);
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      return hot.concat(ret);
    }
  },
  components: {
    ListView
    // SongPlay
  }
};
</script>

<style scoped lang="less">
.singer {
  padding-top: 80px;
}
</style>