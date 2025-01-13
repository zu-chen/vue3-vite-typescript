import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import MainView from '@/views/MainView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
