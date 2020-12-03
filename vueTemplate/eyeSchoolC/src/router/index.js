import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Adobe from "../views/Adobe";
import ProfeClass from "../views/ProfeClass";
import Contact from "../views/Contact";*/


const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Adobe = () => import('../views/Adobe.vue')
const ProfeClass = () => import('../views/ProfeClass.vue')
const Contact = () => import('../views/Contact.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    }
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于我们'
    }
  },
  {
    path:'/adobe',
    component:Adobe,
    meta:{
      title:'Adobe'
    }
  },
  {
    path:'/profeclass',
    component:ProfeClass,
    meta:{
      title:'课程介绍'
    }
  },
  {
    path:'/contact',
    component:Contact,
    meta:{
      title:'联系我们'
    }
  }
]

const router = new VueRouter({
  routes,
  mode:'hash',
})

//前置钩子(回调) beforeEach,跳转前调用
router.beforeEach( (to,from,next) => {
//从from跳转到to
  document.title = to.matched[0].meta.title;
  // console.log('beforeEach');
  //next 必须调用
  next()
})
export default router
