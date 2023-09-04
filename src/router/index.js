import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '../views/MainPage.vue'
import problemw from '../views/problem_w.vue'
import login from '../views/login.vue'
import regist from '@/views/regist'
import find from '../views/find.vue'
import waitYou from '../views/waitYou.vue'
import myself from '../views/myself.vue'
import agreement from '../views/agreement.vue'
import video from '../views/video.vue'
import myfriend from '../views/myfriend.vue'
import recommend from '../views/recommend.vue'
import hot from '../views/hot.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '登录',
    component: login
  },
  {
    path: '/agreement',
    name: '协议页面',
    component: agreement
  },
  {
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage,
    children: [
      {
        path: '/',
        name: '推荐',
        component: recommend
      },
      {
        path: '/video',
        name: '视频',
        component: video
      },
      {
        path: '/myfriend',
        name: '我的好友',
        component: myfriend
      },
      {
        path: '/recommend',
        name: '推荐',
        component: recommend
      },
      {
        path: '/hot',
        name: '热榜',
        component: hot
      },
    ]
  },
  {
    path: '/problemw',
    name: '发布问题',
    component: problemw
  },
  {
    path: '/login',
    name: '登录',
    component: login
  },
  {
    path: '/regist',
    name: '注册页面',
    component: regist
  },
  {
    path: '/find',
    name: '发现',
    component: find
  },
  {
    path: '/waitYou',
    name: '等你来答',
    component: waitYou
  },
  {
    path: '/myself',
    name: '个人动态',
    component: myself
  },
  {
    path: '*',
    name: 'Errorinfo',
    component: ()=>import('../components/Error.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
