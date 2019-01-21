import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import News from '@/views/news.vue'
import Invest from '@/views/invest.vue'
import About from '@/views/about.vue'
import Service from '@/views/service.vue'
import Contact from '@/views/contact.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/news',
      name:'news',
      component:News
    },
    {
      path:'/invest',
      name:"invest",
      component:Invest
    },
    {
      path:'/about',
      name:"about",
      component:About
    },
    {
      path:'/service',
      name:"service",
      component:Service
    },
    {
      path:'/contact',
      name:"contact",
      component:Contact
    }
  ]
})

