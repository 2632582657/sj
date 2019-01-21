<template>
    <div class="app_about">
        <div class="newpage_img">
            <img src="../../static/img/aboutus.png" alt="">
              <div class="banner_text" style="color:rgba(52,75,160,1);">     
                <p class="banner_title">圣吉资本</p>
                <p class="banner_a">SHENGJI  CAPITAL</p>
                <p class="banner_b">最专业的资本团队</p>
            </div>
        </div>
        <div class="box_pd">
            <div class="newpage_content clearfix">
                <div class="aside_box">
                    <p class="aside_title"><a href="#">关于我们</a></p>
                    <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#eee"
                    text-color="#3F3F3F"
                    active-text-color="#fff">
                        <el-menu-item index="1" data-target="#brief">
                            <span class="mr5">公司简介</span>
                             <span class="el-posr">&gt;</span>
                        </el-menu-item>
                        <el-menu-item index="2" data-target="#idea">
                            <span class="mr5">价值理念</span>
                             <span class="el-posr">&gt;</span>
                        </el-menu-item>
                        <el-menu-item index="3" data-target="#client">
                            <span class="mr5">服务客户</span>
                             <span class="el-posr">&gt;</span>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div class="content_box"> 
                    <div class="" id="brief">
                        <div class="content_nav">
                            <p>公司简介</p>
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item>关于我们</el-breadcrumb-item>
                                <el-breadcrumb-item>公司简介</el-breadcrumb-item>
                            </el-breadcrumb> 
                        </div>
                        <div class="pri_box">
                            <div class="top-title">圣吉资本
                                <p>SHENGJI CAPITAL</p>
                            </div>
                            <div class="content-a">
                                <p>
                                    青岛市圣吉民间资本管理有限公司成立于2014年7月，是经市金融办、市人行、市银监会、市公安局、市工商局共同审批，在山东省金融监督管理局备案的合法合规的金融机构，注册资本人民币10000万元。<br><br>
                                </p>
                                <p>
                                    在业务开展方面，圣吉资本在证券投资管理行业的专业优势、人才优势、风控优势，在更广泛的基础上、更灵活地开展专项资产管理业务。所设立的专项资产管理计划投资范围包括未通过证券交易所转让的股权、债权及其他财产权利，股权投资、债权投资、资本投资咨询、短期财务性投资、受托资产管理业务以及中国证监会认可的其他资产。目前，嘉实资本致力于开展三块主要业务：融资业务、资本市场业务、另类资产管理业务。
                                </p>
                            </div>
                        </div>
                        <div class="tem-s">
                            我们做最专业的资本团队，力求给客户最满意的服务
                        </div>
                        <p class="Administration">圣吉资本将以高效的管理团队，超前的研发视野和完备的风险控制手段为客户提供优质服务，实现与客户的共同成长，为中国的资本管理视野做出新的贡献。</p>
                        <div class="proposal">
                            <p>SHENGJI CAPITAL</p>
                            <h3>圣吉资本可以给您更专业的投资建议</h3>
                        </div>
                    </div> 
                    <div class="my_display" id="idea">
                        <div class="content_nav">
                            <p>价值理念</p>
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item>关于我们</el-breadcrumb-item>
                                <el-breadcrumb-item>价值理念</el-breadcrumb-item>
                            </el-breadcrumb> 
                        </div>
                        <div class="pri_box">
                            <div class="top-title">价值理念
                                <p>VALUE IDEA</p>
                            </div>
                            <div class="content-a">
                                <h2>
                                    卓着远见，诚就价值。<br><br>
                                </h2>
                                <p style="font-size:.2rem;line-height:.3rem;">
                                    树立遵纪守规理念，培育合规经营意识。树立差异竞争理念，培育普惠经营意识。树立风险防范理念，培育内控经营意识。树立诚信立行理念，培育担当经营意识。
                                </p>
                            </div>
                        </div>
                        <div class="tem-s">
                            我们做最专业的资本团队，力求给客户最满意的服务
                        </div>
                        <p class="Administration">圣吉资本将以高效的管理团队，超前的研发视野和完备的风险控制手段为客户提供优质服务，实现与客户的共同成长，为中国的资本管理视野做出新的贡献。</p>
                        <div class="proposal">
                            <p>SHENGJI CAPITAL</p>
                            <h3>圣吉资本可以给您更专业的投资建议</h3>
                        </div>
                    </div>
                    <div class="my_display" id="client">
                        <div class="content_nav">
                            <p>服务客户</p>
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item>关于我们</el-breadcrumb-item>
                                <el-breadcrumb-item>服务客户</el-breadcrumb-item>
                            </el-breadcrumb> 
                        </div>
                        <div class="pri_box">
                            <div class="top-title">服务客户
                                <p>CUSTOMER SERVICE</p>
                            </div>
                            <div class="content-a">
                                <p>客户服务中心作为银行与客户联络的关系触角，承接了银行产品售前、售中、售后等多环节的服务链接。当前破解银行转型命题，迫切需要通过经营理念、经营方式的转变，确立新的竞争优势，应对未来发展的挑战，银行客户服务中心概莫能外。随着互联网金融尤其是移动互联网金融的快速普及，客户服务中心服务对象的需求和渠道正在发生剧烈的变化。因此，客户服务中心即将成为银行经营方式转型的下一个竞争战场。<br/>
                                <img src="../../static/img/service1.png" alt="" class="img-w">
                                <p>一是客户服务中心业务的变化。客户服务中心的传统角色是客户问题的咨询解决中心，由于银行现有的客户积累方式和社交互动方式的变化，客户服务中心将逐渐实现从问题的善后型向全过程问题管理的体验型转变，从交易指导型向参与交易的支撑型转变，从传统外呼营销型向以客户数据为依据的适时精准营销型转变。银行客户服务中心通过人工坐席、在线坐席、微坐席和视频坐席等多媒体服务方式为银行电子渠道和物理网点提供服务协同和支持，发挥渠道分流、渠道协同、渠道支持、渠道整合的独特优势。
                                <p>二是伴随信息技术的不断进步，云服务、多媒体、大数据、社交媒体、数据挖掘等技术的成熟运用，将进一步凸显客户服务中心的优势。借助互联网的技术进步，各行客户服务中心正在积极探索“服务+交易+营销”相结合、相促进的方式践行转型，变被动服务为主动经营，在继续保持传统服务KPI（关键绩效指标法）水平的同时，不断深入提升价值贡献，融入银行整体的经营战略与布局，持续发挥其战略价值。</p>
                                <p>互联网“开放、平等、协作、分享”的精髓，使得传统金融业务具备透明度更强、参与度更高、协作性更好、中间成本更低、操作上更便捷等特点，面对上述新形势，作为银行客户服务中心的管理者，应认真思索“客户服务中心如何做好转型”，“怎样去适应互联网金融的变化”以及“抓住哪些关键环节去实现目标”这些问题。总体来说，可以从重在“服务”、重在“智能”、重在“价值”三个关键点来适应新形势的变化，促进客户服务中心的转型，发挥客户服务中心新形势下的价值作用。</p>
                                    
                            </div>
                        </div>
                        <div class="tem-s">
                            我们做最专业的资本团队，力求给客户最满意的服务
                        </div>
                        <p class="Administration">圣吉资本将以高效的管理团队，超前的研发视野和完备的风险控制手段为客户提供优质服务，实现与客户的共同成长，为中国的资本管理视野做出新的贡献。</p>
                        <div class="proposal">
                            <p>SHENGJI CAPITAL</p>
                            <h3>圣吉资本可以给您更专业的投资建议</h3>
                        </div>
                    </div>
                    <!--================================================-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import jsTop from '@/components/top.vue'
    export default {
        data(){
            return{}
        },
        mounted(){
            
            $('.el-menu').on('click','li',function(){
                $(this).addClass('menu')
            })
            $('.el-menu').on('mouseenter','li',function(){
                $(this).addClass('menu')
            }).on('mouseleave','li',function(){
                 $(this).removeClass('menu')
            })
            $('.el-menu').on('click','li',function(){
                var li = $(this)
                console.log(li)
                //console.log( $(li.attr('data-target')).siblings())
                $(li.attr('data-target')).removeClass("my_display").siblings().addClass("my_display")   
            })
        },
        components:{
            jsTop
        }
    }
</script>
<style scoped>
    .app_about{
        font-size: 0.16rem 
    }
    .pri_box{
        width: 100%;
       
        /* display: flex;
        justify-content: space-between; */
        text-align: left;
        margin-top: 0.2rem;
        /* padding-bottom: 0.47rem; */
        border-bottom: 1px solid #D2D2D2
    }
    .top-title{
        font-size: .3rem;
        color: #304ba6;
        font-weight: 400;
    }
    .top-title p {
        font-size: .14rem;
        margin-top: .08rem;
    }
    .content-a{
        margin-top:.31rem;
        padding-bottom: .76rem;
    }
    .content-a p{
        font-size: .14rem;
        font-weight: 400;
        line-height: .24rem;
        text-indent:.25rem;

    }
    .tem-s{
        font-size: .2rem;
        color: #304ba6;
        line-height: .24rem;
        padding-top: .15rem;
        padding-bottom: .16rem;
        border-bottom: 1px solid #D2D2D2;
        text-align: left
    }
    .Administration{
        font-size: .14rem;
        line-height: .24rem;
        text-align: left
    }
    .proposal{
        position: relative;
        background: #304ba6;
        color: #fff;
         padding-top: .22rem;
        padding-bottom: .21rem;
        margin-top: .58rem;
        margin-bottom: .76rem;
    }
    .proposal p{
        font-size: .22rem;
    }
    .proposal h3{
        font-size: .38rem;
        font-weight: 400;
        line-height: .5rem;
    }
    .to-top{
        position: absolute;
        bottom: 0;
        right: -.7rem;
    }
</style>
