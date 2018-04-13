<template>
    <div class="navtop">
        <router-link to="/" tag="div">推荐</router-link>
        <router-link to="/singer" tag="div">歌手</router-link>
        <router-link to="/rank" tag="div">热搜榜</router-link>
        <router-link to="/search" tag="div">搜索</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="less">
    .navtop{
        width:100%;
        height: 40px;
        line-height: 40px;
        background-color:#fff;
        // color:#fff;
        text-align:center;
        position: fixed;
        top:40px;
        left: 0;
        div{
            width: 25%;
            float: left;
        }
        .router-link-active{
            color:#31C27C;
            border-bottom: 2px solid #31C27C;
        }
    }
</style>