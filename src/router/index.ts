import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NumbersApp from '../components/Numbers.vue'
import DashboardApp from '../components/Dashboard.vue'
import ContactApp from '../components/Contact.vue'
import WhymeApp from '@/components/Whyme.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: DashboardApp
  },
  {
    path: '/whyme',
    name: 'WhymeApp',
    component: WhymeApp
  },
  {
    path: '/numbers',
    name: 'NumbersApp',
    component: NumbersApp
  },
  
  {
    path: '/contact',
    name: 'ContactApp',
    component: ContactApp
  }
]
  


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router