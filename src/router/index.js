import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { archive: false }
    },
    {
      path: '/archivum/:year',
      component: Home,
      meta: { archive: true }
    }
  ]
})

export default router
