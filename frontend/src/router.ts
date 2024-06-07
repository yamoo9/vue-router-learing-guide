import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'bottleList' }
  },
  {
    path: '/bottles',
    name: 'bottleList',
    alias: '/bottle-list',
    component: () => import('@/views/ProductListPage.vue')
  },
  {
    path: '/bottle/:slug',
    name: 'bottleItem',
    component: () => import('@/views/ProductDetailPage.vue')
  },
  {
    path: '/cart',
    name: 'shoppingCart',
    component: () => import('@/views/ShoppingCartPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link'
})

export default router
