import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lesson from '@/views/Lesson'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lesson',
    name: 'Lesson',
    component: Lesson
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'A',
  routes
})

export default router
