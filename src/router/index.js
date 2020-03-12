import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../index/index.vue'
import video from '../video/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/video',
    name: 'video',
    component: video
  }
]

const router = new VueRouter({
  routes
})

export default router
