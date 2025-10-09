import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomeView,
         children: [
            {
               path: '',
               name: 'buyer',
               component: () => import('../views/Buyer.vue'),
            },
            {
               path: '/buyer/:id',
               name: 'buyerId',
               component: () => import('../views/SingleBuyer.vue'),
            },
            {
               path: '/vakancy',
               name: 'vakancy',
               component: () => import('../views/Vakancy.vue'),
            },
            {
               path: '/vakancy/:id',
               name: 'vakancyId',
               component: () => import('../views/SingleVakancy.vue'),
            },
            {
               path: '/offer/:id',
               name: 'offer',
               component: () => import('../views/Offers.vue'),
            }
         ]
      },
      {
         path: '/about',
         name: 'about',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('../views/AboutView.vue'),
      },
      {
         path: '/login',
         name: 'login',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('../views/Login.vue'),
      },
      {
         path: '/dashboard',
         name: 'dashboard',
         component: () => import('../views/Dashboard.vue'),
      },
      {
         path: '/employee',
         name: 'employee',
         component: () => import('../views/Employee.vue'),
      },
   ],
})

export default router
