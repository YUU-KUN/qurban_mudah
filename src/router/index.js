import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import SPP from '../views/SPP.vue'

import Sidebar from '../views/layouts/Sidebar.vue'
import Header from '../views/layouts/Header.vue'
import TopNav from '../views/layouts/TopNav.vue'

import Register from '../views/auth/Register.vue'
import Login from '../views/auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    components: {default: Dashboard, sidebar: Sidebar, header: Header, topnav: TopNav},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    components: {auth: Register}
  },
  {
    path: '/login',
    name: 'Login',
    components: {auth: Login}
  },
  {
    path: '/spp',
    name: 'SPP',
    components: {default: SPP, sidebar: Sidebar, header: Header, topnav: TopNav},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) { //kalau route nya cocok sama yang ada requiresAuthnya
    if (store.getters.isLoggedIn) { //dan kalo kita udah login
      next() //maka lanjot aja
      return //sekalian return hasilnya
    }
    next('/login') //tapi kalo route nya cocok & belom login, bakal diarahin ke route ini
  } else if (to.matched.some(record => record.meta.requiresAuthSiswa)) { 
    if (store.getters.isLoggedIn) { 
      next() 
      return 
    }
    next('login/siswa') 
  } else {
    next()
  }
})

export default router
