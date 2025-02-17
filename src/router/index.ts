import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NumbersApp from '../components/Numbers.vue'
import HeroApp from '../components/Hero.vue'

import BannerComponent from '@/components/BannerComponent.vue'

const routes: RouteRecordRaw[] = [
  { 
    path: '/',
    name: 'Home',
    component: BannerComponent
  },
  {
    path: '/numbers',
    name: 'NumbersApp',
    component: NumbersApp
  },
  {
    path: '/hero',
    name: 'HeroApp',
    component: HeroApp
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router