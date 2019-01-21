// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Axios from 'axios';
import { stringify } from 'querystring';
import qs from 'qs'
//

Vue.use(VueAwesomeSwiper)

axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
//请求拦截
// var root = process.env.API_ROOT;
Axios.interceptors.request.use(function(config){
  //请求之前重新拼装url
  // config.url = root + config.url;
  if(config.method == "post"){
    config.data = qs.stringify(config.data)
  }
  return config;
},function(error){
  return Promise.reject(error);
});
Axios.interceptors.response.use(function(response){
  return response;
},function(error){
  return Promise.reject(error);
})

Vue.config.productionTip = false

import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'YOUR_APP_KEY'
})

// var abc = document.documentElement.clientWidth
// var bl = abc/1920
// var fontSize = 100*bl
// document.documentElement.style.fontSize = fontSize + "px"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
