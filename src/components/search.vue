<template>
    <div class="search">
         <div class="input-box">
             <div class="input-content">
                 <input type="text" placeholder="搜索歌曲、歌单、专辑"> 
             </div>      
        </div>
        <div class="hot-search">
            <h3 class="title">热门搜索</h3>
            <div class="result-tags">
                <a href="javascript:;" class="js-keywords">djfskhfjsdk</a>
                <a href="javascript:;" class="js-keywords">讽德诵功</a>
                <a href="javascript:;" class="js-keywords">刚发的色</a>
                <a href="javascript:;" class="js-keywords">人儿未通过</a>
                <a href="javascript:;" class="js-keywords">电饭锅还挺好</a>
                <a href="javascript:;" class="js-keywords">很感动</a>
                <a href="javascript:;" class="js-keywords">好地方</a>
                <a href="javascript:;" class="js-keywords">韩国代购大汉的</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="less">
    .search{
        padding-top: 80px;
        background:#fff;
        height:100%;
        .input-box{
            background-color:#f4f4f4;
            padding: 20px 10px;
            overflow: hidden;
            .input-content{
                width:100%;
                input{
                    width:95%;
                    border: 0;
                    background-color: #fff;
                    height:40px;
                    line-height: 40px;
                    padding-left:10px;
                    border-radius:5px;
                    margin:0 auto;
                }
            }
        }
        .hot-search{
            .title{
                font-size: 14px;
                color:#555;
                margin-bottom: 8px;
                margin-left: 10px;
                margin-top: 11px;
            }
        }
        .result-tags{
            margin: 15px 15px 10px 15px;
            background:#fff;
            a{
                display: inline-block;
                text-decoration: none;
                padding:0 10px;
                font-size: 14px;
                height: 30px;
                line-height: 30px;
                border-radius: 30px;
                border: 1px solid rgba(0, 0, 0, 0.6);
                margin: 0 14px 15px 0;
                color:#000;
            }
        }
    }
</style>