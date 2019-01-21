<template>
    <div class="homepage">
        <div class="banner">
            <Banner />
        </div>
        <div class="contents">
            <div class="content">
                <p class="title1">关于我们</p>
                <p class="title2">ABOUT US</p>
                <div class="kuang">
                </div>
                <div class="main">
                    <div class="message">
                        <p class="infro">青岛小桥金融信息服务有限公司成立于2016年1月，总部位于青岛市。公司致力于服务金融机构，扩大普惠金融覆盖面，服务于中小客户，降低金融准入门槛，成为一家“比金融机构更了解基础客户，比基础客户更了解金融机构”、具有“一站式”综合服务能力的科技型金融服务企业。</p>
                        <router-link to="/AboutUs">
                             <span class="more">查看更多内容<img src="../../static/img/more.png" alt=""></span>
                        </router-link>
                       
                        <div class="blue"></div>
                    </div>
                    <div class="xq-img">
                        <img src="../../static/img/xq_img.png" alt="">
                    </div>
                </div>
            </div>
           <div class="content">
                <p class="title1">业务领域</p>
                <p class="title2">BUSINESS AREA</p>
                <div class="main-area">
                   <div class="fuwu" @mouseover="enter1()" @mouseleave="leave1()">
                       <img src="../../static/img/pic_fw1.png" alt="">
                       <div class="seen" v-show="isShow">
                           <p>WE PROVIDE SERVICES </p>
                           <p>我们能为您 提供什么服务</p>
                           <p>多年深耕细作，只为在您需要的时候 提供安全温暖的资金服务</p>
                       </div>
                   </div>
                   <div class="pics">
                       <div class="pic pic_dk">
                           <img src="../../static/img/pic_dk.png" alt="" class="a">
                           <img src="../../static/img/pic_dk1.png" alt="" class="b">
                           <!-- <div class="seen">

                           </div> -->
                       </div>
                      <div class="pic pic_tz">
                          <img src="../../static/img/pic_tz.png" alt="" class="a">
                          <img src="../../static/img/pic_tz1.png" alt="" class="b">
                      </div>
                      <div class="pic pic_xyk">
                          <img src="../../static/img/pic_xyk.png" alt="" class="a">
                          <img src="../../static/img/pic_xyk1.png" alt="" class="b">
                      </div>
                      <div class="pic pic_gq">
                          <img src="../../static/img/pic_gq.png" alt="" class="a">
                          <img src="../../static/img/pic_gq1.png" alt="" class="b"> 
                      </div>
                      
                   </div>
                   
                </div>
            </div> 
           <div class="content">
               <router-link to="/Reference">
                <p class="title1">资讯中心</p>
                <p class="title2">INFORMATION</p>
                </router-link>
                <div class="main-area">
                  <div class="zixun">
                       <img src="../../static/img/pic_zx.png" alt="">
                   </div> 
                   <div class="article">
                       <p>国庆楼市真“凉凉”，房价会暴跌吗？</p>
                       <p>请有一句诗叫做“春江水暖鸭先知”。上周万科公司在年会上大喊“活下去”，我觉得是在演戏。现在看来，万科虽然有所夸张，但房地产商躺着挣钱的时代已经过去了，以后他们应该站起来挣钱了，那些站不起来的开发商会被时代无情的淘汰...</p>
                       <router-link to="/Reference">
                       <span class="more">查看更多内容<img src="../../static/img/more.png" alt=""></span> 
                       </router-link>
                   </div>
                </div>
                <div class="recommend">
                       <div class="recom"> 
                           <div class="date">
                               <span>10-08</span>
                               <span>2018</span>
                           </div>
                           <div class="recom-title">
                               央行降准1个百分点 释放超万亿元资金透露什么信号？
                           </div>
                           <div class="recom-content">
                               国庆长假最后一天，央行突然释放了重磅消息。中国人民银行决定...
                           </div>
                       </div>
                       <!-- <div class="recom"> 
                           <div class="date">
                               <span>10-08</span>
                               <span>2018</span>
                           </div>
                           <div class="recom-title">
                              管清友：中国经济进入中年，一旦选错赛道，数十年财富将被洗劫
                           </div>
                           <div class="recom-content">
                                作者：管清友，现任民生证券副总裁、研究院院长。同时还是经济观察报...
                           </div>
                       </div>
                       <div class="recom"> 
                           <div class="date">
                               <span>09-13</span>
                               <span>2018</span>
                           </div>
                           <div class="recom-title">
                            打开支付宝看看你的「芝麻信用」多少分，它们能帮你省一大笔钱
                           </div>
                           <div class="recom-content">
                              共享单车刚火起来那会儿，交押金还是很普遍的情况。但是仔细想...
                           </div>
                       </div> -->
                   </div>
            </div> 
            <div class="content">
                <p class="title1">合作机构</p>
                <p class="title2">COOPERATIVE</p>
                <div class="main-agency">
                    <img src="../../static/img/agency1.png" alt="">
                    <img src="../../static/img/agency2.png" alt="">
                    <img src="../../static/img/agency3.png" alt="">
                    <img src="../../static/img/agency4.png" alt="">
                    <img src="../../static/img/agency5.png" alt="">
                    <img src="../../static/img/agency6.png" alt="">
                    <img src="../../static/img/agency7.png" alt="">
                    <img src="../../static/img/agency8.png" alt="">
                </div>
            </div>  
        </div>
        <Footer />
    </div>
</template>
<script>
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"

export default {
    name:"Home",
    data(){
        return{
            isShow:false,
            newsShow:[]
        }
    },
    components:{
        Footer,
        Banner
    },
    created(){
        this.getNewsList();
    },
    methods:{
        enter1(){
            this.isShow = true;
        },
        leave1(){
            this.isShow=false;
        },
         // 获取新闻资讯列表
        getNewsList(){
            this.$axios
                .post("http://www.xiaoqiaojr.cn/xqjr/website/article/listArticles",{
                    // params:{}
                })
                .then(res => {
                    if(res.data.code ==200){
                        this.newsList = res.data.data.slice(7,10);
                        console.log(this.newsList);
                        console.log("获取列表成功")
                    }
                })
                .catch((error)=>{
                    console.log(error);
                    console.log("获取列表失败，请重试")
                })
        }
    }
}
</script>
<style lang="less" scoped>
.homepage{
    width:100%;
    height:100%;
    margin-top:.19rem;
}
.homepage .banner{
    width:100%;
    display:block;
}
.banner img{
    width:100%;
    height:100%;
}
.homepage .contents .content {
    display:block;
}
.homepage .contents .content .title1{
    font-size:.3rem;
    font-weight: 500;
    letter-spacing: .08rem;
    color:#0d6fb8;
    margin-top:.6rem;
}
.homepage .contents .content .title2{
    font-size:.4rem;
    color:#e5e4e4;
    margin:0;
    font-weight: 600;
    margin-bottom:.5rem;
}
.homepage .contents .content .kuang{
    width:8.1rem;
    height:3.5rem;
    display: block;
    border:.02rem solid #0d6fb8;
    margin-left:40%;
}
.homepage .contents .content .main{
    display:flex;
    margin-left:20%;
    margin-top:-15%;
}
.content .main .message{
    display:block;
    width:5.7rem;
    height:4rem;
    background:#eeeeee;
    position:relative;
}
.content .main .message .infro{
    font-size:.2rem;
    line-height:.36rem;
    color:#161616;
    letter-spacing: 0;
    padding:.65rem .63rem 0;
    text-align:left;
}
.content .main .message .more{
    display:inline-block;
    position:absolute;
    bottom:.58rem;
    right:.78rem;
    font-size:.16rem;
    line-height:.3rem;
    color:#161616;
    padding:0 .12rem;
    border:.01rem solid #a0a0a0;
}
.content .main .message .blue{
    display:inline-block;
    width:.58rem;
    height:.58rem;
    background:#0d6fb8;
    z-index:6;
    position:absolute;
    bottom:0;
    right:-.29rem;
}
.content .main .message .more img{
    display:inline-block;
    margin-left:.07rem;
    width:.13rem;
    height:.11rem;
}
.content .main .xq-img{
   display:block;
    width:5.7rem;
    height:4rem; 
}
.content .main .xq-img img{
   display:block;
    width:5.7rem;
    height:4rem;  
}
.content .main-area{
    display:flex;
    width:12rem;
    margin:0 auto;
}
.content .main-area .fuwu {
    width:5.36rem;
    height:5.2rem;
    position:relative;
}
.content .main-area .fuwu .seen{
    position:absolute;
    top:0;
    left:.6rem;
    text-align:left;
}
.fuwu .seen p:nth-of-type(1){
    font-family:PingFang SC;
    font-size:.42rem;
    color:#8ca9d2;
    width:3rem;
    margin-top:.55rem;
}
.fuwu .seen p:nth-of-type(2){
    color:#fff;
    font-size:.25rem;
    width:1.5rem;
    margin-top:.2rem;
}
.fuwu .seen p:nth-of-type(3){
    color:#fff;
    font-size:.17rem;
    width:3.4rem;
    font-weight:500;
    margin-top:1.6rem;
    letter-spacing:.03rem;
}
.content .main-area .fuwu img{
    width:5.35rem;
    height:5.2rem;
    mix-blend-mode: multiply;
}
.content .main-area .fuwu:hover{
    background:url(../../static/img/small.png) center;
}
.content .main-area .pics{
    width:6.56rem;
    height:5.2rem;
    margin-left:.08rem;
    display:flex;
    flex-wrap:wrap;
}
.content .main-area .pics .pic{
    width:3.2rem;
    height:2.56rem;
    margin-left:.08rem;
    position:relative;
}
.content .main-area .pics .pic .b{
    position:absolute;
    top:0;
    left:0;
    display:none;
}
.content .main-area .pics .pic:hover .a{display:none;}
.content .main-area .pics .pic:hover .b { display:block }

.content .main-area .pics .pic img{
    width:3.2rem;
    height:2.56rem;
    mix-blend-mode: multiply;  
    display:block;
}
// .content .main-area .pics .pic:hover{
//     background:url(../../static/img/small.png) center;
// }
.content .main-area .zixun img{
    width:4.06rem;
    height:2.9rem;
}
.content .main-area .article{
    position:relative;
    width:8rem;
    height:2.9rem;
    background:#eeeeee;
    position:relative; 
}
.content .main-area .article p:nth-of-type(1){
    margin-top:.54rem;
    font-size:.25rem;
    color:#3b3c3c;
    font-weight:500;
}
.content .main-area .article p:nth-of-type(2){
    font-size:.17rem;
    line-height:.3rem;
    color:#616161;
    text-align:left;
    padding:.12rem .85rem 1rem;
}
.content .main-area .article .more{
    display:inline-block;
    position:absolute;
    bottom:.58rem;
    right:.78rem;
    font-size:.16rem;
    line-height:.3rem;
    color:#161616;
    padding:0 .12rem;
    border:.01rem solid #a0a0a0;
}
.content .main-area .article .more img{
    display:inline-block;
    margin-left:.07rem;
    width:.13rem;
    height:.11rem;
}
.content .recommend{
    display:flex;
    width:12rem;
    margin:.7rem auto;;
}
.content .recommend .recom{
    display:block;
    width:3.9rem;
    height:2.9rem;
    background:#eeeeee;
    text-align:left;
    position:relative;
}
.content .recommend .recom + .recom{
    margin-left:.2rem;
}
.content .recommend .recom .date{
    width:.85rem;
    height:.85rem;
    background:#434343;
    color:#fff;
    font-weight:500;
    text-align:center;
    position:absolute;
    left:.4rem;
    top:-.35rem;
}
.content .recommend .recom .date:hover{
    background:#0d6fb8;
}
.content .recommend .recom .recom-title:hover{
    color:#0d6fb8;
}
.content .recommend .recom .date span:nth-of-type(1){
    display:block;
    font-size:.17rem;
    padding-top:.14rem;
}
.recom .date span:nth-of-type(2){
    font-size:.24rem; 
}
.recom .recom-title{
    padding:.8rem .4rem .3rem;
    color:#3b3c3c;
    font-size:.18rem;
    font-weight:500;
    
}
.recom .recom-content{
   padding-left:.4rem; 
   color:#616161;
   font-size:.14rem; 
}
.content .main-agency{
    display:flex;
    width:12rem;
    margin:0 auto;
    flex-wrap: wrap;
    margin-top:-.6rem;
}
.content .main-agency img{
    width:2.4rem;
    height:.75rem;
    display:block;
    margin-left:.5rem;
    margin-top:.6rem;
}
</style>
 
