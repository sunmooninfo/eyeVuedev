import Home from '@views/home/Home'

export default [
  {
    path: `/`,
    name: `Home`,
    component: Home,
    meta: { title: `浪博云` },
  },
  {
    path: `/about`,
    name: `About`,
    meta: { title: `About` },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ `../views/About.vue`),
  },
]
