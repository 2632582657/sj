<template>
    <div class="aboutbox">
        <div class="banner">
            <img src="http://xqjr.oss-cn-qingdao.aliyuncs.com/webImg/banner_about.png" alt="">
        </div>
        <div class="about-main">
            <div class="main-top">
                <span>您的位置 :</span>
                <router-link to="/Home" class="shouye">
                    <span>首页</span>
                </router-link>
                <span class="arrow"></span>
                <span> <strong> {{content}}</strong></span>
                <div class="title_blue">
                    <p>关于我们</p>
                    <p>ABOUT  US</p>
                </div>
            </div>
            <ul class="main-body">
                <li>
                    <img src="../../static/img/pic_about1.png" alt="">
                    <p>
                        青岛小桥金融信息服务有限公司成立于2016年1月，总部位于青岛市。公司致力服务于金融机构，扩大普惠金融覆盖面，服务于中小客户，降低金融准入门槛，成为一家“比金融机构更了解基础客户，比基础客户更了解金融机构”，具有“一站式”综合服务能力的科技型金融服务企业。
                    </p>
                </li>
                <li>
                    <img src="../../static/img/pic_about2.png" alt="">
                    <p>
                        公司加强与各类金融机构建立紧密合作关系，精选适合区域需求的标准化小额信贷产品，组织市场批量开发、推广，降低传统金融机构渠道成本，提高产品推送针对性，成为金融机构信赖的合作伙伴。目前公司已签约的合作机构有：平安银行、平安普惠、中银消费金融有限公司、青岛国信金融控股有限公司等。
公司立志于为庞大的小额信贷客户群提供可持续金融服务，成为普惠金融客户首选金融顾问。通过个性化需求分析，帮助客户获得个性化金融服务，全方位满足置业、经营、消费、投资等需求，金融服务从此不再高不可攀。
                    </p>
                </li>
                <li>
                    <img src="../../static/img/pic_about3.png" alt="">
                    <p>
                        我们的渠道“根植青岛，辐射山东，面向全国”。公司总部位于青岛市中央商务区，省内已经覆盖济南、淄博、临沂、潍坊、日照、烟台、威海、德州等地，运营着10家直营线下门店，未来将进一步向全国范围拓展，业务交流“面对面”。
公司加大科技投入，建立线上渠道，“呼叫中心”具备全天候业务响应能力，成为货真价实的普惠金融“门户”。 2018年4月起，公司全新打造的小桥金融APP已经投入使用，公司新老客户20000余人得以享受到便捷的无缝式金融服务。最新的金融产品、最贴心的需求顾问、最及时的账户管理，均可融入方寸之间，一目了然。
                    </p>
                </li>
                <li>
                    <img src="../../static/img/pic_about4.png" alt="">
                    <p>
                        公司组建了具备专业优势的核心团队。公司广纳贤才，组建了一支全员本科学历以上、涵盖证券、消费金融、风险管理等多个门类的高素质专业人才队伍。
公司强化风险审核，对每个客户均有严格的审核流程，在对客户实行评级分类的基础上，根据其资信、征信履约记录等为客户推送匹配业务。通过动态、连续、全面地跟踪客户生产经营全过程,我们建立了一套监测、控制、反馈和调节管理机制，帮助金融机构实现贷后管理的制度化、规范化和科学化。
科技和互联网为普惠金融插上腾飞的翅膀。线上和线下相融合的服务手段，就是小桥金融飞向未来的有力双翅。“精准、方便、快捷”，让小桥金融成为金融机构与中小客户业务沟通与合作的桥梁，是我们矢志不渝的理想。
                    </p>
                </li>
            </ul>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from "@/components/Footer"
export default {
    name:"AboutUs",
    data(){
        return{
            content:"关于我们",
        }
    },
    components:{
        Footer
    }
}
</script>
<style lang="less" scoped>
.aboutbox{
    width:100%;
    margin-top:.19rem;
}
.aboutbox .banner{
    width:100%;
    display:block;
    
}
.aboutbox .banner img{
    width:100%;
    // height:100%;
}
.aboutbox .about-main{
    width:12rem;
    margin:0 auto;
}
.aboutbox .about-main .main-top{
    height:.5rem;
    text-align:left;
    background:#eeeeee;
    padding-left:.24rem;
    vertical-align:bottom;
    position:relative;

}
.aboutbox .about-main .main-top span{
    font-size:.23rem;
    line-height:.5rem;
    letter-spacing:.02rem;
    color:#3b3b3b;
}
.about-main .main-top span+span{
    margin-left:.1rem;
}
.aboutbox .about-main .main-top .shouye{
    display:inline-block
}
.aboutbox .about-main .main-top .arrow{
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

.about-main .main-body li{
    margin-top:.46rem;
}
.about-main .main-body li img{
    width:4.5rem;
    height:.56rem;
    margin:0 auto;
}
.about-main .main-body li p{
    font-size:.18rem;
    line-height:.36rem;
    padding-top:.25rem;
    color:#242424;
    text-align:left;
}
</style>

