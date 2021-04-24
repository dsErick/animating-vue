import { createRouter, createWebHistory } from 'vue-router'
import Modal from '../views/Modal.vue'

const routes = [
  {
    path: '/modal',
    name: 'Modal',
    component: Modal,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { transition: 'slide-right' },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
