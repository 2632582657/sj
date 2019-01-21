<template>
    <div class="probox">
        <div class="banner">
            <img src="http://xqjr.oss-cn-qingdao.aliyuncs.com/webImg/banner_yw.png" alt="">
        </div>
        <div class="about-main">
            <div class="main-top">
                <span>您的位置 :</span>
                <router-link to="/Home" class="shouye">
                    <span>首页</span>
                </router-link>
                <span class="arrow"></span>
                <span><strong> {{content}}</strong></span>
                <div class="title_blue">
                    <p>{{content}}</p>
                    <p>BUSINESS AREA</p>
                </div>
            </div>
            <div class="main-content">
                <div class="pro-content">
                    <img src="../../static/img/pro1.png" alt="">
                    <div class="pro-article">
                        <span>贷款</span>
                        <p>公司加强与各类金融机构建立紧密合作关系，精选适合区域需求的标准化小额信贷产品，组织市场批量开发、推广，降低传统金融机构渠道成本，提高产品推送针对性，成为金融机构信赖的合作伙伴。<br/>
                        <br/>
                        贷款产品量身定做，线上线下结合，快人一步。有抵押、无抵押产品配合，动产、不动产均可操作，让贷款比您想的更简单。</p>
                    </div>
                </div>
                <div class="pro-content">
                    <div class="pro-article">
                        <span>投资</span>
                        <p>公司根据客户的整体情况及风险承受能力，推荐专属个人的正规银行理财计划，从风险低的产品到高收益的智能投资产品，面面俱到。
   新手理财攻略，无论您追求的是低风险，还是高收益，在这里都能找到适合你的产品。财富人生从这里起航，做您的专属金融管家。</p>
                    </div>
                    <img src="../../static/img/pro2.png" alt="">
                </div>
                <div class="pro-content">
                    <img src="../../static/img/pro3.png" alt="">
                    <div class="pro-article">
                        <span>信用卡</span>
                        <p>
                           直连合作银行核心系统，精准识别客户需求，个性化推介信用卡产品。
                            <br/>
                           三大服务：<br/>
                            1、囊括全城优惠，一站式推送各行信用卡合作商户；<br/>
                            2、智能用卡管理，实现最长免息用卡；<br/>
                            3、账单提醒，告别逾期；<br/>
                        </p>
                    </div>
                </div>
                <div class="pro-content">
                    
                    <div class="pro-article">
                        <span>股权</span>
                        <p>公司追求多元化融资途径与模式，为中小企业客户提供债权融资的同时，结合股权融资，真正做到一站式服务。
                            <br/>
                            三大特色：<br/>
                            1、与国内风投机构合作，帮助中小企业引入资金，实现股权融资；<br/>
                            2、与各大交易所合作，推荐符合标准的企业上市；<br/>
                            3、与合作银行、金融机构开发股权质押类融资。<br/></p>
                    </div>
                    <img src="../../static/img/pro4.png" alt="">
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from "@/components/Footer"
export default {
    name:"Profession",
    data(){
        return{
            content:"业务领域",
        }
    },
    components:{
        Footer
    }
}
</script>
<style lang="less" scoped>
.probox{
    width:100%;
    margin-top:.19rem;
}
.probox .banner{
    width:100%;
    display:block;
}
.probox .banner img{
    width:100%;
    height:5.8rem;  
}
.probox .about-main{
    width:12rem;
    margin:0 auto;
}
.probox .about-main .main-top{
    height:.5rem;
    text-align:left;
    background:#eeeeee;
    padding-left:.24rem;
    vertical-align:bottom;
    position:relative;
}
.probox .about-main .main-top span{
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
.main-content .pro-content{
    width:12rem;
    height:3.72rem;
    display:flex;
    margin-top:.8rem;
}
.main-content .pro-content img:nth-child(1){
    border-radius: .25rem 0 0 .25rem;
}
.pro-content img:nth-child(2){
    border-radius: 0 .25rem .25rem 0;
  
}
.pro-content .pro-article:nth-child(1){
    border-radius: .25rem 0 0 .25rem;
}
.pro-content .pro-article:nth-child(2){
    border-radius: 0 .25rem .25rem 0;
}
.pro-content img{
    width:6rem;
    height:3.72rem;
}
.main-content .pro-article{
    width:6rem;
    height:3.72rem;
    background:#eeeeee;
    text-align:left;
    padding:0 .26rem;
}
.main-content .pro-article span{
    display:block;
    font-size:.34rem;
    line-height:.34rem;
    color:#1f6eaa;
    padding-left:.12rem;
    border-left:.05rem solid #1f6eaa; 
    margin-top:.5rem;
}
.main-content .pro-article p{
    font-size:.18rem;
    line-height:.3rem;
    color:#272727;
    margin-top:.25rem;
}

</style>

