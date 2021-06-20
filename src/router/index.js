import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/modal',
    name: 'Modal',
    component: () => import(/* webpackChunkName: "transitions" */ '@/views/Modal.vue'),
    meta: { transition: 'slide-left' },
  },

  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "group-transitions" */ '@/views/List.vue'),
    meta: { transition: 'slide-up' },
  },

  {
    path: '/drawer',
    name: 'Drawer',
    component: () => import(/* webpackChunkName: "hooks-velocity" */ '@/views/Drawer.vue'),
    meta: { transition: 'none' },
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "hooks-velocity" */ '@/views/Cards.vue'),
    meta: { transition: 'none' },
  },

  {
    path: '/simple',
    name: 'Simple',
    component: () => import(/* webpackChunkName: "intro-to-gsap" */ '@/views/Simple.vue'),
    meta: { transition: 'none' },
  },
  {
    path: '/stagger',
    name: 'Stagger',
    component: () => import(/* webpackChunkName: "intro-to-gsap" */ '@/views/Stagger.vue'),
    meta: { transition: 'none' },
  },

  {
    path: '/state',
    name: 'State',
    component: () => import(/* webpackChunkName: "state-with-gsap" */ '@/views/State.vue'),
    meta: { transition: 'none' },
  },

  {
    path: '/timelines',
    name: 'Timelines',
    component: () => import(/* webpackChunkName: "timelines-with-gsap" */ '@/views/Timelines.vue'),
    meta: { transition: 'none' },
  },

  {
    path: '/master',
    name: 'Master',
    component: () => import(/* webpackChunkName: "nested-timelines" */ '@/views/Master.vue'),
    meta: { transition: 'none' },
  },

  {
    path: '/collapse',
    name: 'Collapse',
    component: () => import(/* webpackChunkName: "testing-collapse" */ '@/views/Collapse.vue'),
    meta: { transition: 'none' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
