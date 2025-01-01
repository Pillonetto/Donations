import { createRouter, createWebHistory } from 'vue-router'
import StoreView from '../views/StoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StoreView,
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue'),
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/StoreView.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
    },
    {
      path: '/settings/rewards',
      name: 'rewards',
      component: () => import('../views/RewardsHistoryView.vue'),
    },
  ],
})

export default router
