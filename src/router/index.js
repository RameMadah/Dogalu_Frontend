import { createRouter, createWebHistory } from 'vue-router'
import Lessons from '@/views/Lesson'
import { LoginCallback } from '@okta/okta-vue'
import Profile from '@/views/Profile'
import Login from '@/views/Login'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
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
// router.beforeEach(navigationGuard)
export default router
