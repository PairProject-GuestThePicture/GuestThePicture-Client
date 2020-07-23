import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loby',
    name: 'Loby',
    component: () => import(/* webpackChunkName: "room" */ '../views/Loby.vue')
  },
  {
    path: '/room',
    name: 'Room',
    component: () => import(/* webpackChunkName: "room" */ '../views/Room.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
