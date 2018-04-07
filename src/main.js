// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 在入口文件中引入(暂时不支持单组件引入的方式):
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
import '@/common/style/base.css'
import '@/common/font/iconfont.css'
Vue.use(wcSwiper);
Vue.config.productionTip = false


// import LazyLoad from 'vue-lazyload-img'
// var Lazyload = require("vue-lazyload-img")
// Vue.use(Lazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
