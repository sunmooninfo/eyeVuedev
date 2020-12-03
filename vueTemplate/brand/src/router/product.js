const Home = () => import('@/view/home/home.vue')
const Login = () => import('@/view/login/login.vue')
const goodsIndex = () => import('@/view/goodsIndex/index.vue')
const Reg = () => import('@/view/login/reg.vue')
export default[
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '浪博云'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登陆'
    }
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/goodsIndex/index',
    name: 'Retailers-solution',
    component: goodsIndex
  }
]
