const Home = () => import('@/view/home/Home.vue')
const Online_retailers = () => import('@/view/online')
const Cloud_community = () => import('@/view/community/index.vue')
const School = () => import('@/view/school')
const About = () => import('@/view/about')
// const Carousel = () => import('@/view/about/carousel.vue')
const Retailers_solution = () => import('@/view/solution/retailers.vue')
const Solution_education = () => import('@/view/solution/education.vue')
const Solution = () => import('@/view/solution/index.vue')
const Cloud_market = () => import('@/view/cloud/Cloud.vue')
const WeChat = ()=> import('@/view/WeChat/WeChat.vue')


export default[
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: '浪博云'
    }
  },
  {
    path: '/about',//关于我们
    name: 'About',
    component: About,
    meta: {
      title: '关于我们'
    }
  },
  // {
  //   path: '/carousel',//关于我们
  //   name: 'Carousel',
  //   component: Carousel
  // },
  {
    path: '/solution',//网站解决方案
    name: 'Solution',
    component: Solution
  },
  {
    path: '/solution/retailers',//电商解决方案
    name: 'Retailers-solution',
    component: Retailers_solution
  },
  {
    path: '/solution/education',//通用教育解决方案
    name: 'Solution-education',
    component: Solution_education
  },
  {
    path: '/solution/wechat',//微信小程序解决方案
    name: 'solution-wechat',
    component: WeChat
  },
  {
    path: '/online-retailers',//电商
    name: 'online-retailers',
    component: Online_retailers,
    meta:{
      title: '电商'
    }
  },
  {
    path: '/cloud/market',//云市场
    name: 'cloud-market',
    component: Cloud_market
  },
  {
    path: '/cloud/community',//云+社区
    name: 'cloud-community',
    component: Cloud_community,
    meta: {
      title: '云+社区'
    }
  },
  {
    path: '/school',//大学
    name: 'school',
    component: School,
    meta: {
      title: '浪博云大学'
    }
  }
]

