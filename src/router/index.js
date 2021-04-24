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
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
    meta: { transition: 'slide-up' },
  },

  {
    path: '/drawer',
    name: 'Drawer',
    component: () => import(/* webpackChunkName: "drawer" */ '../views/Drawer.vue'),
    meta: { transition: 'none' },
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards.vue'),
    meta: { transition: 'none' },
  },

  {
    path: '/simple',
    name: 'Simple',
    component: () => import(/* webpackChunkName: "simple" */ '../views/Simple.vue'),
    meta: { transition: 'none' },
  },
  {
    path: '/stagger',
    name: 'Stagger',
    component: () => import(/* webpackChunkName: "stagger" */ '../views/Stagger.vue'),
    meta: { transition: 'none' },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
