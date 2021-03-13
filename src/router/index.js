import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Petugas from '../views/Petugas.vue'

import Sidebar from '../views/layouts/Sidebar.vue'
import Header from '../views/layouts/Header.vue'
import Footer from '../views/layouts/Footer.vue'
// import Slide from '../views/layouts/Slide.vue'
import TopNav from '../views/layouts/TopNav.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    components: {default: Dashboard, sidebar: Sidebar, header: Header, footer: Footer, topnav: TopNav}
  },
  {
    path: '/petugas',
    name: 'Petugas',
    components: {default: Petugas, sidebar: Sidebar, header: Header, footer: Footer, topnav: TopNav}
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

export default router
