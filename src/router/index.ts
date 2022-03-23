import { createRouter, createWebHashHistory } from 'vue-router'
import Error404View from '@/views/Error404View.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: Error404View
    }]
})

export default router
