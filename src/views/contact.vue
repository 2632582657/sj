<template>
    <div class="app_contact">
        <div class="newpage_img">
            <img src="../../static/img/contactus.png" alt="">
            <div class="banner_text" style="color:rgba(52,75,160,1);">     
                <p class="banner_title">圣吉资本</p>
                <p class="banner_a">SHENGJI  CAPITAL</p>
                <p class="banner_b">最优质的服务团队</p>
            </div>
        </div>
        <div class="box_pd">
            <div class="newpage_content clearfix">
                <div class="aside_box">
                    <p class="aside_title"><a href="#">联系我们</a></p>
                    <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#eee"
                    text-color="#3F3F3F"
                    active-text-color="#fff">
                        <el-menu-item index="1">  
                            <span class="mr5">联系方式</span>

                            <span class="el-posr">&gt;</span>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div class="content_box">
                    <div class="content_nav">
                        <p>联系方式</p>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>联系我们</el-breadcrumb-item>
                        <el-breadcrumb-item>联系方式</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <!--================= 分割线 ==========================-->
                    <!--从这开始是各个页面不同的地方  复制分割线以外的内容 接着往下写各自的页面就可以-->
                    <div class="pri_box">
                        <div class="Contactus">
                            <img src="../../static/img/service.png" alt="">
                            <div class="details">
                                <ul>
                                    <li>青岛·圣吉资本</li>
                                    <li>电话：0532-58739020</li>
                                    <li>邮箱：qdsj_2018@icloud.com</li>
                                    <li><a href="http://www.xiaoqiaojr.com/shengji/index.html" style="color:#000;">网址：http://www.xiaoqiaojr.com/shengji/index.html</a></li>
                                    <li>地址：青岛胶州市澳门路333号海湾天泰金融广场小区10号楼办公1012</li>
                                </ul>
                            </div>
                        </div>
                        <baidu-map class="map" :center="center" :zoom="zoom" :scroll-wheel-zoom=true  @ready="handler">

                        </baidu-map>
                    </div>
                    <div></div>
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
            return{
                center: {
                    lng: 0, 
                    lat: 0
                },
                zoom: 13
            }
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
        },
        methods: {
            handler ({BMap, map}) {
                console.log(BMap, map)
                // this.center.lng = 116.404
                // this.center.lat = 39.915
                this.center = "青岛胶州市澳门路333号海湾天泰金融广场",
                this.zoom = 15
            }
        },
        components:{
            jsTop
        }
    }
</script>
<style scoped>

    .app_contact{
        font-size: 0.16rem 
    }
    .pri_box{
        width: 100%;
        /* height: 1.76rem; */
        /* display: flex;
        justify-content: space-between; */
        margin-top: 0.2rem;
        padding-bottom: 0.47rem;
        border-bottom: 1px solid #D2D2D2
    }
    .Contactus{
        display: flex;
        flex-wrap: wrap;
        margin-top: .42rem;
    }
    .details{
        margin-left: .48rem;
    }
    .details ul li{
        text-align: left;
        margin-bottom: .33rem;
    }
    .details ul li:first-child{
        font-size: .24rem;
        font-weight: 400;
        color:rgba(48,75,166,1);
    }
    .buding{
        width: 100%;
        height: 3.86rem;
        background: #F6F6F6;
        margin-top: 0.3rem
    }
    .map{
        width: 100%;
        height: 3.86rem;
        background: #F6F6F6;
        margin-top: 0.3rem
    }
</style>
