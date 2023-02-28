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
  {
    path: '/notes/1',
    name: 'notes1',
    component: () => import(/* webpackChunkName: "about" */ '../views/week1/Notes1View.vue')
  },
  {
    path: '/psets/1',
    name: 'psets1',
    component: () => import(/* webpackChunkName: "about" */ '../views/week1/Psets1View.vue'),
  },
  {
    path: '/1/deep',
    name: 'deep',
    component: () => import(/* webpackChunkName: "about" */ '../views/week1/DeepThought.vue'),
  },
  {
    path: '/1/bank',
    name: 'bank',
    component: () => import(/* webpackChunkName: "about" */ '../views/week1/HomeBank.vue'),
  },
  {
    path: '/1/extensions',
    name: 'extensions',
    component: () => import(/* webpackChunkName: "about" */ '../views/week1/FileExtensions.vue'),
  },
  {
    path: '/1/interpreter',
    name: 'interpreter',
    component: () => import(/* webpackChunkName: "about" */ '../views/week1/MathInterpreter.vue'),
  },
  {
    path: '/1/meal',
    name: 'meal',
    component: () => import(/* webpackChunkName: "about" */ '../views/week1/MealTime.vue'),
  },
  {
    path: '/notes/2',
    name: 'notes2',
    component: () => import(/* webpackChunkName: "about" */ '../views/week2/Notes2View.vue')
  },
  {
    path: '/psets/2',
    name: 'psets2',
    component: () => import(/* webpackChunkName: "about" */ '../views/week2/Psets2View.vue'),
  },
  {
    path: '/2/camel',
    name: 'camel',
    component: () => import(/* webpackChunkName: "about" */ '../views/week2/CamelCase.vue'),
  },
  {
    path: '/2/coke',
    name: 'coke',
    component: () => import(/* webpackChunkName: "about" */ '../views/week2/CokeMachine.vue'),
  },
  {
  path: '/2/twttr',
  name: 'twttr',
  component: () => import(/* webpackChunkName: "about" */ '../views/week2/JustTwttr.vue'),
  },
  {
    path: '/2/plates',
    name: 'plate',
    component: () => import(/* webpackChunkName: "about" */ '../views/week2/VanityPlates.vue'),
  },
  {
    path: '/2/nutrition',
    name: 'nutrition',
    component: () => import(/* webpackChunkName: "about" */ '../views/week2/NutritionFacts.vue'),
  },
  {
    path: '/notes/3',
    name: 'notes3',
    component: () => import(/* webpackChunkName: "about" */ '../views/week3/Notes3View.vue')
  },
  {
    path: '/psets/3',
    name: 'psets3',
    component: () => import(/* webpackChunkName: "about" */ '../views/week3/Psets3View.vue'),
  },
  {
    path: '/3/fuel',
    name: 'fuel',
    component: () => import(/* webpackChunkName: "about" */ '../views/week3/FuelGauge.vue'),
  },
  {
    path: '/3/taqueria',
    name: 'taqueria',
    component: () => import(/* webpackChunkName: "about" */ '../views/week3/FelipesTaqueria.vue'),
  },
  {
    path: '/3/grocery',
    name: 'grocery',
    component: () => import(/* webpackChunkName: "about" */ '../views/week3/GroceryList.vue'),
  },
  {
  path: '/3/outdated',
  name: 'outdated',
  component: () => import(/* webpackChunkName: "about" */ '../views/week3/PsetsOutdated.vue'),
  },
  {
    path: '/notes/4',
    name: 'notes4',
    component: () => import(/* webpackChunkName: "about" */ '../views/week4/Notes4View.vue')
  },
  {
    path: '/psets/4',
    name: 'psets4',
    component: () => import(/* webpackChunkName: "about" */ '../views/week4/Psets4View.vue'),
  },
  {
    path: '/4/emojize',
    name: 'emojize',
    component: () => import(/* webpackChunkName: "about" */ '../views/week4/PsetsEmojize.vue'),
  },
  {
    path: '/4/figlet',
    name: 'figlet',
    component: () => import(/* webpackChunkName: "about" */ '../views/week4/FrankIanandGlensLetters.vue'),
  },
  {
    path: '/4/adieu',
    name: 'adieu',
    component: () => import(/* webpackChunkName: "about" */ '../views/week4/AdieuAdieu.vue'),
  },
  {
    path: '/4/game',
    name: 'game',
    component: () => import(/* webpackChunkName: "about" */ '../views/week4/GuessingGame.vue'),
  },
  {
    path: '/4/professor',
    name: 'professor',
    component: () => import(/* webpackChunkName: "about" */ '../views/week4/LittleProfessor.vue'),
  },
  {
    path: '/4/bitcoin',
    name: 'bitcoin',
    component: () => import(/* webpackChunkName: "about" */ '../views/week4/BitcoinPriceIndex.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
