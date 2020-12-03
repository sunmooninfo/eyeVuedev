import Vue from 'vue'
import Router from 'vue-router'
import product from './product'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...product,
  ]
})
