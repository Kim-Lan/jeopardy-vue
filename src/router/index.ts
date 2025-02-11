import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:categoryId/:slug/:questionId',
      name: 'question',
      component: () => import('../views/Question.vue'),
      props: route => ({
        ...route.params,
        categoryId: parseInt(route.params.categoryId),
        questionId: parseInt(route.params.questionId)
      }),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    },
  ],
})

export default router
