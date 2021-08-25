import Vue from 'vue'
import VueRouter from 'vue-router'
import AllCategoriesView from '../views/AllCategoriesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllCategoriesView',
    component: AllCategoriesView
  },
  {
    path: '/displayMeals',
    name: 'DisplayMealsView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DisplayMealsView.vue')
  },
  {
    path: '/receipeByMeal/:idMeal',
    name: 'ReceipeByMealView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ReceipeByMealView.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
