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
            <div class="main-zx">
                <router-link to="/Reference">
                <span class="main-title">
                    新闻资讯
                </span>
                </router-link>
                <div class="zx-part">
                    <p class="zx-title" v-html="news.mainTitle">{{news.mainTitle}}</p>
                    <div class="zx-data">
                        <span>发布日期:</span>
                        <span> {{news.year}}-{{news.month}}-{{news.day}}</span>
                        
                        <span>来源：{{news.author}}</span>
                    </div>
                    <div class="zx-content" v-html="news.content">
                        {{news.content}}<br/><br/>
                    </div>
                    <router-link to="/Reference">
                        <div class="back">                        
                            <span>返回上一页</span>
                            <img src="../../static/img/back.png" alt="">                        
                        </div>
                    </router-link>   
                </div>

            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import qs from 'qs'
import axios from 'axios'
import Footer from "@/components/Footer"
export default {
    name:"Reference",
    data(){
        return{
            content:"资讯中心",
            id: this.$route.params.id,
            news:{}
        }
    },
    components:{
        Footer
    },
   
    created(){
        this.getNews();
    },
    methods:{  
        //获取新闻内容
       getNews(){
           console.log(this.id);
           axios
            .post("http://www.xiaoqiaojr.cn/xqjr/app/articleinfo/articleInfo?id=" + this.id)   
            .then(res => {
                    if(res.data.code ==200){
                        this.news = res.data.data;
                        console.log(this.news);
                        console.log("获取新闻内容成功")
                    }
                })
            .catch((error)=>{
                console.log(error);
                console.log("获取新闻内容失败，请重试");
            })
       }  
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
    // height:5.8rem;
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
.main-zx{
    width:12rem;
    margin:.58rem auto;
    text-align:left;
}
.main-zx .main-title{
    display:block;
    padding-left:.15rem;
    font-size:.35rem;
    line-height:.35rem;
    color:#1f6eaa;
    font-weight:500;
    border-left:.05rem solid #1f6eaa;
}
.main-zx .zx-part .zx-title{
    font-size:.35rem;
    line-height:.9rem;
    color:#313131;
    font-weight:500;
    text-align:center;
}
.main-zx .zx-part .zx-data{
    text-align:center;
    font-size:.25rem;
    line-height:.4rem;
    color:#7a7a7b;
    padding-bottom:.2rem;
    border-bottom:.01rem solid #e5e5e5;
}
.main-zx .zx-part .zx-data span:nth-of-type(3){
    margin-left:1.5rem;
}
.main-zx .zx-part .zx-content{
    padding-top:.5rem;
    font-size:.25rem;
    line-height:.4rem;
    color:#272727;
    font-weight:400;
}
.main-zx .back{
    height:.26rem;
    text-align:right;
    display:flex;
    flex-direction: row-reverse;
    align-items: center;
}
.main-zx .back img{
    width:.26rem;
    height:.26rem;
    display:inline-block;
}
.main-zx .back span{
    font-size:.2rem;
    line-height:.26rem;
    color:#7a7a7b;
    margin-left:.05rem;
}
</style>

