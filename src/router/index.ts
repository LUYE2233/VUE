import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routers: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue')
  },
  {
    path: '/example01',
    name: 'home',
    component: () => import('../views/example01/EX1View.vue')
  },
  {
    path: '/example02',
    name: 'example02',
    component: () => import('../views/example02/MainView.vue')
  },
  {
    path: '/example03',
    name: 'example03',
    component: () => import('../views/example03/HomeView.vue'),
    children: [
      {
        path: 'foods',
        name: 'foods',
        component: () => import('../views/example03/FoodsView.vue')
      },
      {
        path: 'location',
        name: 'location',
        component: () => import('../views/example03/LocationView.vue')
      },
      {
        path: 'shops/:sid',
        component: () => import('@/views/example03/ShopView.vue')
      },
      {
        path: 'orders',
        component: () => import('@/views/example03/OrderView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers
})

export default router
