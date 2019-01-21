<template>
    <div class="app_news">
        <div class="newpage_img">
            <img src="../../static/img/serve.png" alt="">
            <div class="banner_text">     
                <p class="banner_title">我们的服务</p>
                <p class="banner_a">SHENGJI  CAPITAL</p>
                <p class="banner_b">引导全民健康投资</p>
            </div>
        </div>
        <div class="box_pd">
            <div class="newpage_content clearfix">
                <div class="aside_box">
                    <p class="aside_title"><a href="#">服务项目</a></p>
                    <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#eee"
                    text-color="#3F3F3F"
                    active-text-color="#fff">
                        <el-menu-item index="1" data-target="#one">  
                            <span class="mr5">股权投资</span>
                            <span class="el-posr">&gt;</span>
                        </el-menu-item>
                        <el-menu-item index="2" data-target="#two">
                            <span class="mr5">债权投资</span>
                             <span class="el-posr">&gt;</span>
                        </el-menu-item>
                        <el-menu-item index="3" data-target="#three">
                            <span class="mr5">资本投资咨询</span>
                             <span class="el-posr">&gt;</span>
                        </el-menu-item>
                        <el-menu-item index="4" data-target="#four">
                            <span class="mr5">短期财务投资</span>
                             <span class="el-posr">&gt;</span>
                        </el-menu-item>
                        <el-menu-item index="5" data-target="#five">
                            <span class="mr5">受托资产管理</span>
                             <span class="el-posr">&gt;</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            <div class="content_box">
                <div class="" id="one">
                    <div class="content_nav">
                        <p>股权投资</p>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>服务项目</el-breadcrumb-item>
                        <el-breadcrumb-item>股权投资</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div class="pri_box">
                        <div class="management">
                            MANAGEMENT ITEM1
                              <p class="stock">股权投资<br>
                                 Equity investment
                              </p>
                        </div>
                        <div class="Finance">
                            <p>
                                公司作为财务投资者或战略投资者，通过投资拥有高成长性、拟上市企业的股权,助力企业快速发展，并通过上市、并购、管理层回购等方式退出获益。
                                <br/><br/>投资对象：在细分行业领先地位核心竞争力突出、发展战略清晰、业绩增长稳定，成长性良好的中小企业。
                            </p>
                            <div class="img-service">
                               <img src="../../static/img/guquan.png" alt="">                            
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div class="my_display" id="two">
                    <div class="content_nav">
                        <p>债权投资</p>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>服务项目</el-breadcrumb-item>
                        <el-breadcrumb-item>债权投资</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div class="pri_box">
                        <div class="management">
                            MANAGEMENT ITEM2
                              <p class="stock">债权投资<br>
                                 Creditor's rights investment
                              </p>
                        </div>
                        <div class="Finance">
                            <p>
                              公司通过对个人、中小企业资金需求及偿债能力调查，设计形式灵活、操作便捷的贷款产品，向客户发放短、中期贷款，为客户提供优质的多元化融资服务。
                            <br/><br/>投资对象：信用状况良好、经营稳定、具备较强偿债能力的中小企业。
                            </p>
                            <div class="img-service">
                               <img src="../../static/img/ser1.png" alt="">                            
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>    
                    <!-- 资本投资  Bond investment -->
                    <div class="my_display" id="three">
                        <div class="content_nav">
                            <p>资本投资咨询</p>
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item>服务项目</el-breadcrumb-item>
                            <el-breadcrumb-item>资本投资咨询</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                         <div class="pri_box">
                        <div class="management">
                            MANAGEMENT ITEM3
                              <p class="stock">资本投资咨询<br>
                                 Capital investment consulting
                              </p>
                        </div>
                        <div class="Finance">
                            <p>
                                公司通过对企业（项目）进行尽职调查，对企业（项目）财务状况与经营能力的分析，为企业（项目）制定整体融资方案，并同第三方资金对接，满足企业的大额资金需求。
                                <br/><br/>业务对象：企业（项目）信用记录良好、需求大额资金的企业。
                            </p>
                            <div class="img-service">
                               <img src="../../static/img/ser2.png" alt="">                            
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                       
                     <!-- 短期财务投资 Short-term financial investments -->
                     <div class="my_display" id="four">
                        <div class="content_nav">
                            <p>短期财务 投资</p>
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item>服务项目</el-breadcrumb-item>
                            <el-breadcrumb-item>短期财务投资</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                        <div class="pri_box">
                        <div class="management">
                            MANAGEMENT ITEM4
                              <p class="stock">短期财务性投资<br>
                                 Short-term financial investments
                              </p>
                        </div>
                        <div class="Finance">
                            <p>
                                公司为投资者选择可获取较高资本回报，向需要资金的企业提供的有固定期限的，按照约定利率收取资金成本的借款，期限一般少于6个月，不干预企业的发展方向和决策。 
还有与之相对应的是战略投资，战略投资除了有资金注入之外，还占有企业的股权，同时也干预一定的企业的决策和发展方向。 
                               <br/> <br/>业务对象：偏向期限固定、利率固定，高收益的投资者
                            </p>
                            <div class="img-service">
                               <img src="../../static/img/ser3.png" alt="">                            
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                     <!-- 受托资产管理业务  Bond investment -->
                     <div class="my_display" id="five">
                        <div class="content_nav">
                            <p>受托资产管理</p>
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item>服务项目</el-breadcrumb-item>
                            <el-breadcrumb-item>受托资产管理</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                        <div class="pri_box">
                        <div class="management">
                            MANAGEMENT ITEM5
                              <p class="stock">受托资产管理业务 <br>
                                 Entrusted asset management
                              </p>
                        </div>
                        <div class="Finance">
                            <p>
                                公司作为受托人，接受资产所有人的委托，通过对受托财产进行管理，在保障受托财产安全的情况下，使委托人获取高额收益。受托资产一般投向定向投资基金、信托等低风险、高收益的产品。
                               <br/> <br/>业务对象：拥有闲置资产，追求低风险、高收益的投资者
                            </p>
                            <div class="img-service">
                               <img src="../../static/img/ser4.png" alt="">                            
                            </div>
                        </div>
                    </div>
                    <div></div>
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
                console.log( $(li.attr('data-target')).siblings())
                $(li.attr('data-target')).removeClass("my_display").siblings().addClass("my_display")   
            })
        },
        components:{
            jsTop
        }
        
    }
</script>
<style scoped>

    .app_news{
        font-size: 0.16rem ;
        margin-bottom: 1.61rem;
    }
    .pri_box{
        width: 100%;
       
        /* display: flex;
        justify-content: space-between; */
        margin-top: 0.2rem;
        /* padding-bottom: 0.47rem; */
        /* border-bottom: 1px solid #D2D2D2 */
    }
    .management{
        text-align: left;
        font-size: .26rem;
        font-weight: 400;
        color: #e5e5e5;
    }
    .management .stock{
        font-size: .18rem;
        line-height: .24rem;
        color: #3f3f3f;
        margin-top: .31rem;
    }
    .Finance p{
        margin-top: .38rem;
        text-align: left;
        font-size: .12rem;
        font-weight: 400;
        color: rgba(63, 63, 63, 1);
        line-height: .26rem;
    }
    .img-service{
        margin-top: .38rem;
        position: relative;
       
    }
    .img-service img{
        width: 100%;
    }
    
</style>
//  <div class="pri_box">
//                         <div class="management">MANAGEMENT
//                               <p class="stock">股权投资<br>
//                                   Equity investment
//                               </p>
//                               <div class="Finance">
//                              <p>
//                                 公司作为财务投资者或战略投资者，通过投资拥有高成长性、拟上市企业的股权,助力企业快速发展，并通过上市、并购、管理层回购等方式退出获益。投资对象：在细分行业领先地位核心竞争力突出、发展战略清晰、业绩增长稳定，成长性良好的中小企业。
//                             </p>
//                             <div class="img-service">
//                                   <img src="../../static/img/guquan.png" alt="">
//                                     <a href="#" class="to-top">
//                                          <img src="../../static/img/icon_up.png" alt="">
//                                     </a>
//                             </div>
//                         </div>
//                         </div>
                        
//                     </div>
//                     <div></div>