import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import LoginView from '../views/LoginView.vue'
import SigninView from '../views/SigninView.vue'
import ProductView from '../views/ProductView.vue'
import EditView from '../views/EditView.vue'
import MovieView from '../views/MovieView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView
  },
  {
    path: '/register',
    name: 'register',
    component: LoginView
  },
  {
    path: '/login',
    name:'login',
    component: SigninView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path:'/edit',
    name:'edit',
    component: EditView
  },
  {
    path:'/movies',
    name:'movies',
    component: MovieView
  },
  {
    path:'/checkout',
    name:'checkout',
    component: CheckoutView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
