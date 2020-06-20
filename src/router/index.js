import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Target from '../views/Target.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/target',
    children: [
      {
        path: '/target',
        name: 'Target',
        component: Target
      },
      {
        path: '/clock',
        name: 'Clock',
        component: () => import('../views/Clock.vue')
      },
      {
        path: '/circle',
        name: 'Circle',
        component: () => import('../views/Circle.vue')
      },
      {
        path: '/personal',
        name: 'Personal',
        component: () => import('../views/Personal.vue')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/personal/mine.vue')
      },
      {
        path: '/data',
        name: 'Data',
        component: () => import('../views/personal/Data.vue')
      },
      {
        path: '/circle1',
        name: 'circle1',
        component: () => import('../views/personal/circle1.vue')
      },
      {
        path: '/focus',
        name: 'focus',
        component: () => import('../views/personal/focus.vue')
      },
      {
        path: '/fans',
        name: 'fans',
        component: () => import('../views/personal/fans.vue')
      },
      {
        path: '/vip',
        name: 'vip',
        component: () => import('../views/personal/vip.vue')
      },
      {
        path: '/money',
        name: 'money',
        component: () => import('../views/personal/money.vue')
      },
      {
        path: '/money',
        name: 'money',
        component: () => import('../views/personal/money.vue')
      },
       {
        path: '/message',
        name: 'message',
        component: () => import('../views/personal/message.vue')
      },
      {
        path: '/success',
        name: 'success',
        component: () => import('../views/target/success.vue')
      },
      {
        path: '/time',
        name: 'time',
        component: () => import('../views/tools/time.vue')
      },
      {
        path: '/theme',
        name: 'theme',
        component: () => import('../views/tools/theme.vue')
      },
      {
        path: '/card',
        name: 'card',
        component: () => import('../views/tools/card.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
