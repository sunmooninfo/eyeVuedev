import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import router from './router/router'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: '你申请的key'
})
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
