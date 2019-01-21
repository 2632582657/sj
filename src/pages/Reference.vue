<template>
    <div class="referbox">
        <div class="banner">
            <img src="http://xqjr.oss-cn-qingdao.aliyuncs.com/webImg/banner_zx.png" alt="">
        </div>
        <div class="about-main">
            <div class="main-top">
                <span>您的位置 :</span>
                <router-link to="/Home" class="shouye">
                    <span>首页</span>
                </router-link>
                <span class="arrow"></span>
                <span> <strong>{{content}}</strong></span>
                <div class="title_blue">
                    <p>{{content}}</p>
                    <p>INFORMATION</p>
                </div>
            </div>
            <NewsList />
           <!-- <List mold="thumbnail" :items="events"></List> -->
        </div>
        <Footer />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Footer from "@/components/Footer"
import NewsList from '@/components/NewsList'
export default {
    name:"Reference",
    data(){
        return{
            content:"资讯中心",
        }
    },
    components:{
        Footer,
        NewsList,
    }
}
</script>
<style lang="less" scoped>
.referbox{
    width:100%;
    margin-top:.19rem;
}
.referbox .banner{
    width:100%;
    display:block;
    
}
.referbox .banner img{
    width:100%;
    height:5.8rem;
}
.referbox .about-main{
    width:12rem;
    margin:0 auto;
}
.referbox .about-main .main-top{
    height:.5rem;
    text-align:left;
    background:#eeeeee;
    padding-left:.24rem;
    vertical-align:bottom;
    position:relative;

}
.referbox .about-main .main-top span{
    font-size:.23rem;
    line-height:.5rem;
    letter-spacing:.02rem;
    color:#3b3b3b;
}
.about-main .main-top span+span{
    margin-left:.1rem;
}
.about-main .main-top .shouye{
    display:inline-block
}
.about-main .main-top .arrow{
    width:.09rem;
    height:.16rem;
    display:inline-block;
    background:url(../../static/img/arrow.png);
    background-size:100%;
}
.about-main .main-top span:last-of-type(1){
    font-weight:600;
    color:#3b3b3b;
}
.about-main .main-top .title_blue{
    width:2.7rem;
    height:1rem;
    background:#1f6eaa;
    opacity:.65;
    color:#fff;
    text-align:right;
    position:absolute;
    right:0;
    top:-.5rem;
}
.main-top .title_blue p:nth-of-type(1){
    font-family:PingFang SC;
    font-size:.34rem;
    line-height:.5rem;
    padding-right:.2rem;
    padding-top:.1rem;
     font-weight:400;
}
.main-top .title_blue p:nth-of-type(2){
    font-size:.2rem;
    padding-right:.2rem;
    letter-spacing:.04rem;
     font-weight:500;
}
</style>

