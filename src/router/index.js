import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Register from '../views/account/Register.vue'
// import Login from '../views/account/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/account/register',
  //   name: 'Register',
  //   component: Register
  // },
  // {
  //   path: '/account/login',
  //   name: 'Login',
  //   component: Login
  // }
  {
    path: '/account/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/account/Login.vue')
  },
  {
    path: '/account/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/account/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
