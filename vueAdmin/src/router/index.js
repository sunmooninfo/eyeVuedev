import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    perms: ['GET /aaa','POST /bbb']     will control the page perms (you can set multiple perms)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/sys',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'sysManage',
    meta: {
      title: '系统管理',
      icon: 'tree'
    },
    children: [
      // {
      //   path: 'information',
      //   component: () => import('@/views/company/information'),
      //   name: 'information',
      //   meta: {
      //     perms: [],
      //     title: '系统信息',
      //     noCache: true
      //   }
      // },
      {
        path: 'mall',
        component: () => import('@/views/config/mall'),
        name: 'configMall',
        meta: {
          perms: ['GET /admin/config/mall', 'POST /admin/config/mall'],
          title: '系统信息',
          noCache: true
        }
      },
      {
        path: 'role',
        component: () => import('@/views/sys/role'),
        name: 'role',
        meta: {
          perms: ['GET /admin/role/list', 'POST /admin/role/create', 'POST /admin/role/update', 'POST /admin/role/delete', 'GET /admin/role/permissions', 'POST /admin/role/permissions'],
          title: '角色管理',
          noCache: true
        }
      },
      {
        path: 'admin',
        component: () => import('@/views/sys/admin'),
        name: 'admin',
        meta: {
          perms: ['GET /admin/admin/list', 'POST /admin/admin/create', 'POST /admin/admin/update', 'POST /admin/admin/delete'],
          title: '人员管理',
          noCache: true
        }
      },
      {
        path: 'wx',
        component: () => import('@/views/config/wx'),
        name: 'configWx',
        meta: {
          perms: ['GET /admin/config/wx', 'POST /admin/config/wx'],
          title: '首页管理',
          noCache: true
        }
      },
      {
        path: 'ad',
        component: () => import('@/views/promotion/ad'),
        name: 'ad',
        meta: {
          perms: ['GET /admin/ad/list', 'POST /admin/ad/create', 'GET /admin/ad/read', 'POST /admin/ad/update', 'POST /admin/ad/delete'],
          title: '广告管理',
          noCache: true
        }
      },
      {
        path: 'notice',
        component: () => import('@/views/sys/notice'),
        name: 'sysNotice',
        meta: {
          perms: ['GET /admin/notice/list', 'POST /admin/notice/create', 'POST /admin/notice/update', 'POST /admin/notice/delete'],
          title: '通知管理',
          noCache: true
        }
      },
      {
        path: 'os',
        component: () => import('@/views/sys/os'),
        name: 'os',
        meta: {
          perms: ['GET /admin/storage/list', 'POST /admin/storage/create', 'POST /admin/storage/update', 'POST /admin/storage/delete'],
          title: '对象存储',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'article',
    meta: {
      title: '文章管理',
      icon: 'clipboard'
    },
    children: [
      {
        path: 'articleList',
        component: () => import('@/views/article/articleList'),
        name: 'list',
        meta: {
          perms: ['POST /admin/article/update', 'GET /admin/article/list', 'POST /admin/article/delete', 'POST /admin/article/create', 'GET /admin/article/detail'],
          title: '文章列表',
          noCache: true
        }
      },
      {
        path: 'create',
        component: () => import('@/views/article/createArticle'),
        name: 'create',
        meta: {
          perms: ['POST /admin/article/create'],
          title: '创建文章',
          noCache: true
        }
      },
      {
        path: 'update',
        component: () => import('@/views/article/updateArticle'),
        name: 'update',
        meta: {
          perms: ['POST /admin/article/update'],
          title: '编辑文章',
          noCache: true
        },
        hidden: true
      },
      {
        path: 'topic',
        component: () => import('@/views/article/topic'),
        name: 'articleTopic',
        meta: {
          perms: ['POST /admin/categoryx/update', 'GET /admin/categoryx/list', 'GET /admin/categoryx/read', 'POST /admin/categoryx/delete', 'POST /admin/categoryx/create'],
          title: '文章分类',
          noCache: true
        }
        // hidden: true
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'userManage',
    meta: {
      title: '用户管理',
      icon: 'user'
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/user/user'),
        name: 'user',
        meta: {
          perms: ['GET /admin/user/list'],
          title: '会员管理',
          noCache: true
        }
      },
      {
        path: 'vippackage',
        component: () => import('@/views/user/vippackage'),
        name: 'vippackage',
        meta: {
          perms: ['GET /admin/user/list'],
          title: '超级会员套餐设置',
          noCache: true
        }
      },
      {
        path: 'vippackagedetails',
        component: () => import('@/views/user/vippackagedetails'),
        name: 'vippackagedetails',
        meta: {
          perms: [],
          title: '会员套餐详细',
          noCache: true
        },
        hidden: true
      },
      // {
      //   path: 'vipuser',
      //   component: () => import('@/views/user/vipuser'),
      //   name: 'vipuser',
      //   meta: {
      //     perms: [],
      //     title: '会员使用用户',
      //     noCache: true
      //   }
      // },
      {
        path: 'address',
        component: () => import('@/views/user/address'),
        name: 'address',
        meta: {
          perms: ['GET /admin/address/list', 'POST /admin/address/save', 'admin/address/delete'],
          title: '收货地址',
          noCache: true
        }
      },
      {
        path: 'collect',
        component: () => import('@/views/user/collect'),
        name: 'collect',
        meta: {
          perms: ['GET /admin/collect/list'],
          title: '会员收藏',
          noCache: true
        }
      },
      {
        path: 'history',
        component: () => import('@/views/user/history'),
        name: 'history',
        meta: {
          perms: ['GET /admin/history/list'],
          title: '搜索历史',
          noCache: true
        }
      },
      {
        path: 'footprint',
        component: () => import('@/views/user/footprint'),
        name: 'footprint',
        meta: {
          perms: ['GET /admin/footprint/list'],
          title: '会员足迹',
          noCache: true
        }
      },
      {
        path: 'feedback',
        component: () => import('@/views/user/feedback'),
        name: 'feedback',
        meta: {
          perms: ['GET /admin/feedback/list'],
          title: '意见反馈',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/mall',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'mallManage',
    meta: {
      title: '商城管理',
      icon: 'example'
    },
    children: [
      // {
      //   path: 'region',
      //   component: () => import('@/views/mall/region'),
      //   name: 'region',
      //   meta: {
      //     title: '行政区域',
      //     noCache: true
      //   }
      // },
      {
        path: 'brand',
        component: () => import('@/views/mall/brand'),
        name: 'brand',
        meta: {
          perms: ['GET /admin/brand/list', 'POST /admin/brand/create', 'GET /admin/brand/read', 'POST /admin/brand/update', 'POST /admin/brand/delete'],
          title: '品牌管理',
          noCache: true
        }
      },
      {
        path: 'issue',
        component: () => import('@/views/mall/issue'),
        name: 'issue',
        meta: {
          perms: ['GET /admin/issue/list', 'POST /admin/issue/create', 'GET /admin/issue/read', 'POST /admin/issue/update', 'POST /admin/issue/delete'],
          title: '通用问题',
          noCache: true
        }
      },
      {
        path: 'express',
        component: () => import('@/views/config/express'),
        name: 'configExpress',
        meta: {
          perms: ['GET /admin/config/express', 'POST /admin/config/express'],
          title: '运费配置',
          noCache: true
        }
      },
      {
        path: 'order',
        component: () => import('@/views/config/order'),
        name: 'configOrder',
        meta: {
          perms: ['GET /admin/config/order', 'POST /admin/config/order'],
          title: '订单配置',
          noCache: true
        }
      },
      {
        path: 'stores',
        component: () => import('@/views/mall/stores'),
        name: 'stores',
        meta: {
          perms: ['GET /admin/signstore/list', 'POST /admin/signstore/create', 'POST /admin/signstore/delete', 'POST /admin/signstore/update'],
          title: '分销管理',
          noCache: true
        }
      },
      {
        path: 'commission',
        component: () => import('@/views/mall/commission'),
        name: 'commission',
        meta: {
          perms: ['GET /admin/commission/list'],
          title: '佣金管理',
          noCache: true
        }
      },
      {
        path: 'keyword',
        component: () => import('@/views/mall/keyword'),
        name: 'keyword',
        meta: {
          perms: ['GET /admin/keyword/list', 'POST /admin/keyword/create', 'GET /admin/keyword/read', 'POST /admin/keyword/update', 'POST /admin/keyword/delete'],
          title: '推荐搜索',
          noCache: true
        }
      }
    ]
  },
  // {
  //   path: '/company',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   alwaysShow: true,
  //   name: 'companyManage',
  //   meta: {
  //     title: '公司管理',
  //     icon: 'international'
  //   },
  //   children: [
  //     {
  //       path: 'information',
  //       component: () => import('@/views/company/information'),
  //       name: 'information',
  //       meta: {
  //         perms: [],
  //         title: '公司信息配置',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  {
    path: '/goods',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'goodsManage',
    meta: {
      title: '商品管理',
      icon: 'list'
    },
    children: [
      {
        path: 'category',
        component: () => import('@/views/mall/category'),
        name: 'category',
        meta: {
          perms: ['GET /admin/category/list', 'POST /admin/category/create', 'GET /admin/category/read', 'POST /admin/category/update', 'POST /admin/category/delete'],
          title: '商品类目',
          noCache: true
        }
      },
      {
        path: 'list',
        component: () => import('@/views/goods/list'),
        name: 'goodsList',
        meta: {
          perms: ['GET /admin/goods/list', 'POST /admin/goods/delete'],
          title: '商品列表',
          noCache: true
        }
      },
      {
        path: 'create',
        component: () => import('@/views/goods/create'),
        name: 'goodsCreate',
        meta: {
          perms: ['POST /admin/goods/create'],
          title: '商品上架',
          noCache: true
        }
      },
      {
        path: 'integration',
        component: () => import('@/views/goods/integration'),
        name: 'goodsIntegration',
        meta: {
          perms: [],
          title: '积分商品',
          noCache: true
        }
      },
      {
        path: 'vipgoods',
        component: () => import('@/views/mall/vipgoods'),
        meta: {
          perms: [],
          title: '超级会员商品',
          noCache: true
        }
      },
      {
        path: 'coupon',
        component: () => import('@/views/promotion/coupon'),
        name: 'coupon',
        meta: {
          perms: ['GET /admin/coupon/list', 'POST /admin/coupon/create', 'POST /admin/coupon/update', 'POST /admin/coupon/delete'],
          title: '优惠券管理',
          noCache: true
        }
      },
      {
        path: 'couponDetail',
        component: () => import('@/views/promotion/couponDetail'),
        name: 'couponDetail',
        meta: {
          perms: ['GET /admin/coupon/list', 'GET /admin/coupon/listuser'],
          title: '优惠券详情',
          noCache: true
        },
        hidden: true
      },
      {
        path: 'groupon-rule',
        component: () => import('@/views/promotion/grouponRule'),
        name: 'grouponRule',
        meta: {
          perms: ['GET /admin/groupon/list', 'POST /admin/groupon/create', 'POST /admin/groupon/update', 'POST /admin/groupon/delete'],
          title: '团购规则',
          noCache: true
        }
      },
      {
        path: 'groupon-activity',
        component: () => import('@/views/promotion/grouponActivity'),
        name: 'grouponActivity',
        meta: {
          perms: ['GET /admin/groupon/listRecord'],
          title: '团购活动',
          noCache: true
        }
      },
      {
        path: 'order',
        component: () => import('@/views/mall/order'),
        name: 'order',
        meta: {
          perms: ['GET /admin/order/list', 'GET /admin/order/detail', 'POST /admin/order/ship', 'POST /admin/order/refund', 'POST /admin/order/delete', 'POST /admin/order/reply'],
          title: '订单管理',
          noCache: true
        }
      },
      {
        path: 'viporder',
        component: () => import('@/views/mall/viporder'),
        meta: {
          perms: [],
          title: '超级会员订单',
          noCache: true
        }
      },
      {
        path: 'edit',
        component: () => import('@/views/goods/edit'),
        name: 'goodsEdit',
        meta: {
          perms: ['GET /admin/goods/detail', 'POST /admin/goods/update', 'POST /admin/goods/catAndBrand'],
          title: '商品编辑',
          noCache: true
        },
        hidden: true
      },
      {
        path: 'comment',
        component: () => import('@/views/goods/comment'),
        name: 'goodsComment',
        meta: {
          perms: ['GET /admin/comment/list', 'POST /admin/comment/delete'],
          title: '商品评论',
          noCache: true
        }
      },
      {
        path: 'aftersale',
        component: () => import('@/views/mall/aftersale'),
        name: 'aftersale',
        meta: {
          perms: ['GET /admin/aftersale/list', 'GET /admin/aftersale/detail', 'POST /admin/order/receive', 'POST /admin/aftersale/complete', 'POST /admin/aftersale/reject'],
          title: '售后管理',
          noCache: true
        }
      }
    ]
  },
  // {
  //   path: '/config',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   alwaysShow: true,
  //   name: 'configManage',
  //   meta: {
  //     title: '配置管理',
  //     icon: 'component'
  //   },
  //   children: [
  //     {
  //       path: 'mall',
  //       component: () => import('@/views/config/mall'),
  //       name: 'configMall',
  //       meta: {
  //         perms: ['GET /admin/config/mall', 'POST /admin/config/mall'],
  //         title: '商场配置',
  //         noCache: true
  //       }
  //     },
  //     {
  //       path: 'express',
  //       component: () => import('@/views/config/express'),
  //       name: 'configExpress',
  //       meta: {
  //         perms: ['GET /admin/config/express', 'POST /admin/config/express'],
  //         title: '运费配置',
  //         noCache: true
  //       }
  //     },
  //     {
  //       path: 'order',
  //       component: () => import('@/views/config/order'),
  //       name: 'configOrder',
  //       meta: {
  //         perms: ['GET /admin/config/order', 'POST /admin/config/order'],
  //         title: '订单配置',
  //         noCache: true
  //       }
  //     },
  //     {
  //       path: 'wx',
  //       component: () => import('@/views/config/wx'),
  //       name: 'configWx',
  //       meta: {
  //         perms: ['GET /admin/config/wx', 'POST /admin/config/wx'],
  //         title: '小程序配置',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },

  {
    path: '/stat',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'statManage',
    meta: {
      title: '统计报表',
      icon: 'chart'
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/stat/user'),
        name: 'statUser',
        meta: {
          perms: ['GET /admin/stat/user'],
          title: '用户统计',
          noCache: true
        }
      },
      {
        path: 'order',
        component: () => import('@/views/stat/order'),
        name: 'statOrder',
        meta: {
          perms: ['GET /admin/stat/order'],
          title: '订单统计',
          noCache: true
        }
      },
      {
        path: 'goods',
        component: () => import('@/views/stat/goods'),
        name: 'statGoods',
        meta: {
          perms: ['GET /admin/stat/goods'],
          title: '商品统计',
          noCache: true
        }
      },
      {
        path: 'log',
        component: () => import('@/views/sys/log'),
        name: 'log',
        meta: {
          perms: ['GET /admin/log/list'],
          title: '操作日志',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/tools',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'tools',
    meta: {
      title: '附带工具',
      icon: 'component'
    },
    children: [
      {
        path: 'outerstation',
        component: () => import('@/views/tools/outerstation'),
        name: 'log',
        meta: {
          perms: [],
          title: '高仿外站',
          noCache: true
        }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'externalLink',
    meta: {
      title: '外链',
      icon: 'link'
    },
    children: [
      {
        path: 'https://cloud.tencent.com/product/cos',
        meta: { title: '腾讯云存储', icon: 'link' }
      },
      {
        path: 'https://cloud.tencent.com/product/sms',
        meta: { title: '腾讯云短信', icon: 'link' }
      },
      {
        path: 'https://pay.weixin.qq.com/index.php/core/home/login',
        meta: { title: '微信支付', icon: 'link' }
      },
      {
        path: 'https://mpkf.weixin.qq.com/',
        meta: { title: '小程序客服', icon: 'link' }
      },
      {
        path: 'https://www.alibabacloud.com/zh/product/oss',
        meta: { title: '阿里云存储', icon: 'link' }
      },
      {
        path: 'https://www.qiniu.com/products/kodo',
        meta: { title: '七牛云存储', icon: 'link' }
      },
      {
        path: 'http://www.kdniao.com/api-track',
        meta: { title: '快递鸟', icon: 'link' }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    children: [
      {
        path: 'password',
        component: () => import('@/views/profile/password'),
        name: 'password',
        meta: { title: '修改密码', noCache: true }
      },
      {
        path: 'notice',
        component: () => import('@/views/profile/notice'),
        name: 'notice',
        meta: { title: '通知中心', noCache: true }
      }
    ],
    hidden: true
  },

  { path: '*', redirect: '/404', hidden: true }
]
