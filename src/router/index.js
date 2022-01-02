import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lessons from '@/views/Lesson'
import Login from '@/views/Login'
import Register from '@/views/Register'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/lesson',
    name: 'Lesson',
    component: Lessons
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
