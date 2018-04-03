<template>
    <div class="slider">
        <wc-slide :duration="1500" v-for="(slide, key) in sliderImg" :key="key">
            <img :src="slide.picUrl" alt="">
        </wc-slide>
    </div>
</template>

<script>
    export default {
        props:['sliderImg'],
        loop:{
            type: Boolean,
            default: true
        },
        autoPlay: {
            type: Boolean,
            default: true
        },
        interval:{
            type:Number,
            default: 3000
        }
    }
</script>

<style scoped lang="less">
    .slider{
        width: 100%;
        height: 150px;
        overflow: hidden;
        img{
            width:100%;
        }
    }
</style>