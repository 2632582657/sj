<template>
    <div class="app_carousel">
        <el-carousel :interval="3000" arrow="always" indicator-position='none' class="carousel">
            <el-carousel-item>
                <img src="../../static/img/banner1.png" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                list:['../public/img/banner1.png']
            }
        }
    }
</script>
<style>
    
    div.el-carousel__container {
        height: 7.2rem;
        z-index: 1;
    }
    div.el-carousel__container img{
        width:100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>


