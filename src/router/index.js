import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PsetsIndoor from '../views/week0/PsetsIndoor'
import PsetsPlayback from '../views/week0/PsetsPlayback'
import PsetsMaking from '../views/week0/PsetsMaking'
import PsetsEinstein from '../views/week0/PsetsEinstein'
import PsetsCalculator from '../views/week0/PsetsCalculator'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/weeks/0',
    name: 'week0',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Week0Nav.vue')
  },
  {
    path: '/weeks/1',
    name: 'week1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Week1Nav.vue')
  },
  {
    path: '/weeks/2',
    name: 'week2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Week2Nav.vue')
  },
  { 
  path: '/weeks/3',
  name: 'week3',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../components/Week3Nav.vue')
  },
  { 
    path: '/weeks/4',
    name: 'week4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Week4Nav.vue')
  },
  { 
    path: '/weeks/5',
    name: 'week5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Week5Nav.vue')
  },
  { 
    path: '/weeks/6',
    name: 'week6',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Week6Nav.vue')
  },
  { 
    path: '/weeks/7',
    name: 'week7',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Week7Nav.vue')
  },
  { 
    path: '/weeks/8',
    name: 'week8',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Week8Nav.vue')
  },
  { 
    path: '/weeks/9',
    name: 'week9',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Week9Nav.vue')
  },
  {
    path: '/psets/0',
    name: 'psets0',
    component: () => import(/* webpackChunkName: "about" */ '../views/week0/Psets0View.vue'),
  },
  {
    path: '/0/indoor',
    name: 'indoor',
    component: PsetsIndoor
  },
  {
    path: '/0/playback',
    name: 'playback',
    component: PsetsPlayback
  },
  {
    path: '/0/making',
    name: 'making',
    component: PsetsMaking
  },
  {
    path: '/0/einstein',
    name: 'einstein',
    component: PsetsEinstein
  },
  {
    path: '/0/calculator',
    name: 'calculator',
    component: PsetsCalculator
  },
  {
    path: '/notes/0',
    name: 'notes0',
    component: () => import(/* webpackChunkName: "about" */ '../views/week0/Notes0View.vue')
  },
  {
    path: '/license',
    name: 'license',
    component: () => import(/* webpackChunkName: "about" */ '../components/LicenseNav.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
