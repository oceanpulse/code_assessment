import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NumbersApp from '../components/Numbers.vue'
import DashboardApp from '../components/Dashboard.vue'
import ContactApp from '../components/Contact.vue'
import WhymeApp from '@/components/Whyme.vue'
import OverviewApp from '@/components/Overview.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DashboardApp,
    children: [
      {
        path: '',
        redirect: '/numbers'
      },
      {
        path: '/numbers',
        name: 'Numbers',
        component: NumbersApp
      },
      {
        path: '/whyme',
        name: 'Whyme',
        component: WhymeApp
      },
      {
        path: '/contact',
        name: 'Contact',
        component: ContactApp
      },
      {
        path: '/overview',
        name: 'Overview',
        component: OverviewApp
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router