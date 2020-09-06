import Vue from "vue"
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const home = () => import('@/views/home/home.vue')
const cate = () => import('@/views/cate/cate.vue')
const cart = () => import('@/views/cart/cart.vue')
const profile = () => import('@/views/profile/profile.vue')
const NotFoundComponent = () => import('@/views/notfound.vue')

const routes = [
  { 
    path: '*', 
    component: NotFoundComponent,
  },
  {
    path: '/',
    redirect: '/home',
    component: home,
  },
  {
    path: '/home',
    component: home,
    meta: {
      httpEquiv: 'Pragma',
      content: 'no-cache',
    }
  },
  {
    path: '/cate',
    component: cate,
  },
  {
    path: '/cart',
    component: cart,
  },
  {
    path: '/profile',
    component: profile,
  }
]

const router = new vueRouter({
  routes,
  mode: "history",
})

export default router