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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
