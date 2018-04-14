<template>
    <div class="bar" ref="bar">
        <div class="bar-inner">
            <div class="progress" ref="progress"></div>
            <div class="progress-btn" ref="progressBtn"
                @touchstart.prevent = 'progressStart'
                @touchmove.prevent = 'progressMove'
                @touchend = 'progressEnd'
            ></div>
        </div>
    </div>
</template>

<script>
const progressBtnWidth = 15;
const barWidth = 280;
export default {
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  created() {
    //将共享数据挂在起来
    this.touch = {};
  },
  methods: {
    progressStart(e) {
      this.touch.init = true; // touch 的初始化
      this.touch.startX = e.touches[0].pageX;
      // 小球的偏移值
      this.touch.left = this.$refs.progress.style.width;
      this.touch.left = this.touch.left.substring(
        0,
        this.touch.left.length - 2
      );
    },
    progressMove(e) {
      if (!this.touch.init) {
        return;
      }
      //   console.log('我拖拉')
      // 获得偏移量
      const deltaX = e.touches[0].pageX - this.touch.startX;
      //最小是0，对打不能超过进度条的长度-已经偏移的量
      var offsetWidths = Math.min(
        barWidth,
        Math.max(0, this.touch.left + deltaX)
      );
    //   console.log("left " + this.touch.left);
    //   console.log("delta: " + deltaX);
    //   //   console.log('startX '+ this.touch.startX)
    //   console.log(this.touch.left + deltaX);
      //   console.log('baridth ' + barWidth)
      var barLeft = offsetWidths - progressBtnWidth / 2;
      this.$refs.progress.style.width = `${offsetWidths}px`;
      this.$refs.progressBtn.style.left = `${barLeft}px`;
    },
    progressEnd(e) {
      this.touch.init = false;
      this._triggerParcent()
    },
    _triggerParcent() {
        var left = this.$refs.progress.style.width.substring(
        0,
        this.$refs.progress.style.width.length - 2
      );
      const percent = left
      // console.log(percent)
      this.$emit("percentChange", percent);
    }
  },
  watch: {
    percent(newpercent) {
      if (newpercent > 0 && !this.touch.init) {
        const offsetWidth = this.percent * barWidth;
        var barLeft = offsetWidth - progressBtnWidth / 2;
        this.$refs.progress.style.width = `${offsetWidth}px`;
        this.$refs.progressBtn.style.left = `${barLeft}px`;
      }
    }
  }
}; 
</script>

<style scoped lang="less">
.bar {
  height: 30px;
  width: 280px;
  .bar-inner {
    position: relative;
    background-color: #fff;
    height: 2px;
    .progress {
      position: absolute;
      background-color: #f60;
      height: 3px;
      width: 0;
    }
    .progress-btn {
      position: absolute;
      left: -7.5px;
      top: -7.5px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #fff;
      border: 5px solid green;
    }
  }
}
</style>