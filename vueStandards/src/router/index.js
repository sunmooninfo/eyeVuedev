import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './permission'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: `history`,
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title == undefined ? `浪博云` : to.meta.title
  next()
})

export default router
