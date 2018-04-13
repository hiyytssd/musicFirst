<template>
    <div class="recommend">
        <div class="slider-wrapper">
            <slider :sliderImg="sliderImg"></slider>
        </div>
        <div class="radio-wrapper">
            <h2 class="title">电台</h2>
            <ul class="radio-list clearfix">
                <li class="radio-item" v-for="item in radioList">
                    <a href="#">
                        <img class="radio-img" :src="item.picUrl" alt="">
                        <p class="text" v-text="item.Ftitle"></p>
                    </a>
                </li>
            </ul>
            <h3 class="title">热门歌单</h3>
        </div>
        <div class="footer-wrapper">
            <m-footer></m-footer>
        </div>
    </div>
</template>

<script>
import { getRecommend } from "api/recommend.js";
import { ERR_OK } from "api/config.js";
import slider from "@/components/slider/slider";
import MFooter from "@/components/mfooter/mfooter";
export default {
  data() {
    return {
      sliderImg: [],
      radioList: []
    };
  },
  created() {
    this._getRecommend();
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.sliderImg = res.data.slider;
          this.radioList = res.data.radioList;
        }
      });
    }
  },
  components: {
    slider,
    MFooter
  }
};
</script>

<style scoped lang="less">
.recommend {
  padding-top:80px;
  color: #000;
  .radio-wrapper {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    .title {
      font-size: 16px;
      padding-left: 8px;
      margin-bottom: 11px;
      margin-top: 11px;
    }
    .radio-item {
      float: left;
      width: 50%;
      padding-right: 8px;
      box-sizing: border-box;
      .radio-img {
        width: 100%;
      }
      .text {
        height: 36px;
        line-height: 18px;
        white-space: normal;
        word-wrap: break-word;
        padding: 5px 7px 5px;
        background-color: #fff;
      }
    }
  }
  .footer-wrapper {
    margin-top: 30px;
  }
}
</style>