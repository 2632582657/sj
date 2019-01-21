<template>
    <div class="contbox">
        <div class="banner">
            <img src="http://xqjr.oss-cn-qingdao.aliyuncs.com/webImg/banner_lx.png" alt="">
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
                    <p>CONSTANCE US</p>
                </div>
            </div> 
        </div>
        <div class="main-lx">
            <div class="lx">
                <span>联系我们</span>
                <p>总部地址：青岛市市北区连云港路76号安泰广场1号楼1单元1204室</p>
                <p>全国服务热线：400-186-1867</p>
            </div>
            <div class="lx">
                <span>互动交流</span>
                <div>
                    <img src="../../static/img/wx.png" alt=""> 
                    <p>更多动态请关注小桥社区微信公众号</p>
                </div>

                <img src="../../static/img/xqsq.png" alt="">   
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from "@/components/Footer"
export default {
    name:"Contactus",
    data(){
        return{
            content:"联系我们",
        }
    },
    components:{
        Footer
    }
}
</script>
<style lang="less" scoped>
.contbox{
    width:100%;
    margin-top:.19rem;
}
.contbox .banner{
    width:100%;
    display:block;
    
}
.contbox .banner img{
    width:100%;
    // height:5.8rem;
}
.contbox .about-main{
    width:12rem;
    margin:0 auto;
}
.contbox .about-main .main-top{
    height:.5rem;
    text-align:left;
    background:#eeeeee;
    padding-left:.24rem;
    vertical-align:bottom;
    position:relative;

}
.contbox .about-main .main-top span{
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
.main-lx{
    width:12rem;
    margin:.4rem auto;
    text-align:left;
}
.main-lx .lx span{
    display:block;
    padding-left:.15rem;
    font-size:.35rem;
    line-height:.35rem;
    color:#1f6eaa;
    font-weight:500;
    border-left:.05rem solid #1f6eaa;
    margin-bottom:.2rem;
}
.main-lx .lx p{
    font-size:.3rem;
    line-height:.5rem;
    color:#2c2c2c;
}
.main-lx .lx:nth-of-type(2){
    margin-top:.8rem;
}
.main-lx .lx div{
    display:flex;
}
.main-lx .lx div img{
    width:.42rem;
    height:.4rem;
    display:inline-block;
}
.main-lx .lx div p{
    display:inline-block;
    color:#303030;
    font-size:.3rem;
    line-height:.42rem;
    margin-bottom:.24rem;
}
.main-lx img:nth-last-of-type(1){
    width:6.9rem;
    height:1.94rem;
}
</style>

