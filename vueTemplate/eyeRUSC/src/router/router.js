import Vue from 'vue'
import Router from 'vue-router'
import product from './product'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...product,
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
    }
})
