// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/** 默认样式*/
import "@/assets/css/style.min.css";
/** mint-ui安装*/
import "mint-ui/lib/style.css";
import '@/assets/css/my-mint.css'; // 全局修改mint-UI样式  
/** vuex安装--使用store*/
import store from '@/store/store.js';
/** axios安装*/
import api from '@/api/api'
import apiPath from '@/api/apiPath'
Vue.prototype.$api = api
Vue.prototype.$apiPath = apiPath.realApi
Vue.prototype.$apiTest = apiPath.testApi
/** 使用阿里图标*/
import '@/assets/font/iconfont.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用store  
  components: {
    App
  },
  template: '<App/>'
})
