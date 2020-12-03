const Home = () => import('@/view/home/Home.vue')
const News = () => import('@/view/news/news.vue')
const Product = () => import('@/view/product/product.vue')
const About = () => import('@/view/about/about.vue')
const Certificate = () => import('@/view/credential/credential.vue')
const Contact = () => import('@/view/contactus/contactus.vue')



export default[
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      // title: '首'
    }
  },
  {
    path: '/about',//关于我们
    name: 'About',
    component: About,
    // meta: {
    //   title: '关于我们'
    // }
  },
 
  {
    path: '/news',//新闻中心
    name: 'News',
    component: News,
    // meta: {
    //   title: '新闻中心'
    // },
  },
  {
    path: '/newsDetail',//新闻详情
    name: 'newsDetail',
    component: () => import('@/view/news/newsDetail'),
    // meta: {
    //   title: '新闻详情'
    // },
  },
  {
    path: '/product',//产品
    name: 'Product',
    component: Product,
    // meta: {
    //   title: '产品'
    // } ,   
  },
  {
    path: '/productDetail',//产品详情
    name: 'productDetail',
    component: () => import('@/view/product/productDetail'),
    // meta: {
    //   title: '产品详情'
    // } ,   
  },
  {
    path: '/credential',//证书
    name: 'Certificate',
    component: Certificate,
    // meta: {
    //   title: '证书'
    // }
  },
  {
    path: '/contactus',//联系我们
    name: 'Contact',
    component: Contact,
    // meta: {
    //   title: '联系我们'
    // }
  },
]

