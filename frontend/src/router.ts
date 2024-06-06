import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/ProductListPage.vue')
  },
  {
    path: '/product/:productId',
    component: () => import('@/views/ProductDetailPage.vue')
  },
  {
    path: '/cart',
    component: () => import('@/views/ShoppingCartPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
