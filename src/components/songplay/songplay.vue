<template>
    <div class="song-play">
        <!-- 歌曲播放页面 -->
        <div class="l">
            <div class="top-box">
                <h3 class="title">qq音乐</h3>
                <div class="needle-container">
                    <!-- 播放指针 -->
                    <img src="./../../assets/needle.png" alt="">
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
        <div class="isPlay"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
    .song-play{
        position: fixed;
        top:0;
        left: 0;
        bottom:0;
        right:0;
        background-color:#000;
        color:#fff;
        z-index:100;
    }

</style>