import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index/index'
// import Register from '@/components/register/register'
// import Login from '@/components/login/login'
import recommend from '@/components/recommend'
import singer from '@/components/singer'
import rank from '@/components/rank'
import search from '@/components/search'
import singerDetail from '@/components/singerdetail/singerdetail'
import rankList from '@/components/ranklist/rank-list'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index
    // },
    // {
    //   path: '/login',
    //   component: Login
    // },
    // {
    //   path: '/register',
    //   component: Register
    // }
    {
      path: '/',
      component: recommend
    }, {
      path: '/singer',
      component: singer,
      // 子路由
      children: [
        {
          // 通过动态ID跳转
          path: '/singer/:id',
          component: singerDetail
        }
      ]
    }, {
      path: '/rank',
      component: rank,
      // 子路由
      children: [
        {
          //通过动态ID跳转
          path: '/rank/:topid',
          component: rankList
        }
      ]
    }, {
      path: '/search',
      component: search
    }
  ]
})
