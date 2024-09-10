import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
   path: '/',
   name: 'Home',
   component: () => import('../views/HomeView.vue')
  },
  {
   path: '/About',
   name: 'About',
   component: () => import('../views/AboutView.vue')
  },
  {
   path: '/Decor',
   name: 'Decor',
   component: () => import('../views/DecorView.vue')
  },
  {
   path: '/Catering',
   name: 'Catering',
   component: () => import('../views/CateringView.vue')
  },
  {
   path: '/Hiring',
   name: 'Hiring',
   component: () => import('../views/HiringView.vue')
  },
  {
   path: '/Contact',
   name: 'Contact',
   component: () => import('../views/ContactUsView.vue')
  },
  {
   path: '/Admin',
   name: 'Admin',
   component: () => import('../views/AdminView.vue')
  },
  {
   path: '/Checkout',
   name: 'Checkout',
   component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/equipment/:id',
    name: 'Single View',
    component: () => import('../views/singleView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
