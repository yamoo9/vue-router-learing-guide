import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import pb from './api/pb'

declare module 'vue-router' {
  interface RouteMeta {
    authRequired?: boolean
    transitionName?:
      | 'fade'
      | 'scale-up'
      | 'scale-down'
      | 'slide-left'
      | 'slide-right'
      | 'slide-up'
      | 'slide-down'
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/sign-in',
    name: 'signin',
    alias: '/login',
    meta: { transitionName: 'slide-up' },
    component: () => import('@/views/SignIn.vue')
  },
  {
    path: '/sign-up',
    name: 'signup',
    alias: '/register',
    meta: { transitionName: 'slide-down' },
    component: () => import('@/views/SignUp.vue')
  },
  {
    path: '/bottles',
    name: 'home',
    alias: '/home',
    meta: { transitionName: 'scale-down' },
    component: () => import('@/views/ProductListPage.vue')
  },
  {
    path: '/bottle/:slug',
    name: 'bottleItem',
    meta: { transitionName: 'scale-up', authRequired: true },
    component: () => import('@/views/ProductDetailPage.vue')
  },
  {
    path: '/cart',
    name: 'shoppingCart',
    meta: { transitionName: 'slide-down', authRequired: true },
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

router.beforeEach((to) => {
  const isAuth = pb.authStore.isValid
  if (to.meta.authRequired && !isAuth) {
    alert('서비스를 이용하려면 로그인이 필요합니다.')
    router.push({ name: 'signin' })
  }
})

export default router
