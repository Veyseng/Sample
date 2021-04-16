import { createRouter, createWebHistory, useRoute } from 'vue-router'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import store from '../store/index'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Register
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/feeds',
    name: 'Feeds',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/feeds.vue'),
    beforeEnter(to, from, next){
      if(!store.getters.token){
        next({ component : Login });
      }else{
        next();
      }
    }
  },
  ,
  {
    path: '/setting',
    name: 'Setting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/setting.vue'),
    beforeEnter(to, from, next){
      if(!store.getters.token){
        next({component: Login});
      }else{
        next();
      }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
