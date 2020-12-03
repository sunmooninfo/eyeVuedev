/* eslint-disable eqeqeq */
import Vue from 'vue'
import Router from 'vue-router'
import product from './product'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    ...product
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.name != 'fmHome' && to.name != 'circleIndex' && to.name != 'explore' && to.name != 'fanMoney' && to.name != 'activity' && to.name != 'retrospect' && to.name != 'productionPart' && to.name != 'searchPost' && to.name != 'carSystem' && to.name != 'fmMoneyGoods') {
      window.scrollTo(0, 0)
    }
  }
})
