<template>
    <div id="app_header">
        <div class="header_wrap">
            <div class="wrap_table">
                <div class="logo_bar">
                    <a href="#" class="logo_link">
                        <span><img src="../../static/img/logo.png" alt=""></span>
                    </a>
                </div>
                <div class="nav">
                    <ul class="nav_box">
                        <li  v-for="(item,i) of list" :key="i">
                            <router-link exact :to='item.path'><span>{{item.title}}<i ></i></span></router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hide_logo">
                <div class="hide_logo_box">
                    <img src="../../static/img/logo.png" alt="">
                </div>
            </div>
            <div class="page">
                <span>首页</span>
                <i class="home_down"></i>
            </div>
            <ul class="hide_nav" id="hidenav">
                <li><router-link to="/" >首页</router-link></li>
                <li> <router-link to="/about">关于我们</router-link></li>
                <li><router-link to="/news">新闻中心</router-link></li>
                <li><router-link to="/service">服务项目</router-link></li>
                <li><router-link to="/invest">投资资讯</router-link></li>
                <li class="bn"><router-link to="/contact" >联系我们</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[{title:'首页',path:'/home'},
                {title:'关于我们',path:'/about'},
                {title:'新闻中心',path:'/news'},
                {title:'服务项目',path:'/service'},
                {title:'投资资讯',path:'/invest'},
                {title:'联系我们',path:'/contact'}],
            }
        },
        mounted(){
            $('.page').click(function(){
                $('#hidenav').toggleClass('shownav')
                if($('#hidenav').is('.shownav')){
                     $('#hidenav').css('zIndex',999)
                }else{
                    $('#hidenav').css('zIndex',-1)
                }
            })
            $('#hidenav').on('click','li',function(){
                $('#hidenav').removeClass('shownav')
                $('#hidenav').css('zIndex',-1)
                var title=$(this).children().html()
                $('.page span').html(title)
            })
            $('.nav .nav_box').on('mouseenter','li',function(){
                $(this).addClass('click_active')
            }).on('mouseleave','li',function(){
                $(this).removeClass('click_active')
            })
        },
        methods:{
        }
    }
</script>
<style>
    .hide_logo{
        width: 100%;
        height: 0.6rem;
        background: #fff;
        font-size: 0.14rem;
        padding:  0.1rem 0;
        display: none
    }
    .hide_logo_box{
       width: 100%;
        height: 100%;
        margin: 0 auto;
        line-height: 0.6rem;
    }
    .hide_logo_box img{
        vertical-align: middle
    }
    .home_down{
        display: block;
        width: 0.1rem;
        height: 0.1rem;
        border-bottom: 1.5px solid #fff;
        border-right: 1.5px solid #fff;
        position: absolute;
        right: 3%;
        top: 50%;
        margin-top: -0.1rem;
        transform-origin: center center;
        transform: rotate(45deg);
    }
    .page{
        width: 100%;
        height: 100%;
        line-height: 0.4rem;
        font-size: 0.18rem;
        color: #fff;
        display: none;
        cursor: pointer;
        position: relative;
    }
    .hide_nav{
        font-size: 0.18rem;
        background: #304BA6;
        opacity: 0;
        position: absolute;
        top: 1.6rem;
        width: 100%;
        transition: all .3s ;
        display: none
    }
    ul.shownav{
        z-index: 999;
        top: 1.2rem;
         opacity: 1;
    }
    .hide_nav li {
        border-bottom: 1px solid #fff;
        line-height: 0.4rem
    }
    .hide_nav li a{
        color: #fff;
        font-size: 0.18rem;
    }
    .header_wrap{
        padding: 0 0.4rem;
        margin:auto;
        min-height: 0.78rem;
        height: 0.78rem;
    }
    .wrap_table{
        width: 100%;
        min-height: 0.78rem;
        height: 0.78rem;
        margin: 0 auto;
        max-width: 12.2rem;
        font-size: 0.16rem;
        position: relative;
    }
    
    .logo_bar{
        max-width: 8rem;
        min-height: 0.58rem;   
        position: relative;    
        height: 0.58rem;
        float: left;
        position: absolute;
        top: 50%;
        transform: translateY(-50%)

    }
    .logo_link{
        max-height: 0.56rem;
        display: inline-block;
        height: 0.45rem;
        display: flex;
        position: absolute;
        bottom: 0
    }
    .logo_link span{
        position: relative;
        display: block;
        height: 100%;
    }
    .logo_link span img{
        max-height: 0.42rem;
        height: auto;
        width: 1.45rem;
        height: 100%;
    }
    .nav{
        height: 100%;
        float: right;
    }
    .nav_box{
        height: 100%;
        font-size: 0.16rem
    }
    .nav_box li{
        float: left;
        position: relative;
        z-index: auto;
        vertical-align: middle;
        height: 100%;
        font-size: 0.16rem;
        line-height: 0.78rem;
    }
    .nav_box li a{
        font-size: 0.16rem;
         height: 100%;
         font-size: 0.16rem;
         padding: 0 0.27rem;
         border-right: 1px solid #304BA6;
         color: #304BA6
    }
    .nav_box li a span{position: relative;}
    .nav_box li a span i{
        display: block;  
        position: absolute;
        bottom: -0.28rem;
        left: 0;
        height: 0.04rem; 
        background: #304BA6;
        opacity: 0;
        transition:  all 0.3s linear;
        width: 0;
        }
       .nav_box li a.router-link-active span i,.nav_box li.click_active a span i{
           opacity: 1;
            width: 100%;
       }
</style>


