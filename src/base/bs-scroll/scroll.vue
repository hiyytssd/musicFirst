<template>
<!-- 最基础的滚动的插件 -->
    <div class="better-scroll" ref="BSwrapper">
        <!-- 插槽 -->
        <slot></slot>
    </div>
</template>

<script>
import BSroll from "better-scroll";

export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    }
    // ,
    // listerScroll:{
    //     type:Boolean,
    //     default: true
    // }
  },
  mounted() {
    // 因为页面大概每17刷新一次，所以这里设计的是20
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    _initScroll() {
      if (!this.$refs.BSwrapper) {
        return;
      }
      this.scroll = new BSroll(this.$refs.BSwrapper, {
        probeType: this.probeType,
        click: this.click
      });
    }
  }
};
</script>

<style scoped lang="less">
.better-scroll{
    height: 350px;
    overflow: hidden;
}
</style>