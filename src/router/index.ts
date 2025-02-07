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
      path: '/question/:categoryId/:questionId',
      name: 'question',
      component: () => import('../views/Question.vue'),
      props: route => ({
        categoryId: parseInt(route.params.categoryId),
        questionId: parseInt(route.params.questionId)
      }),
    },
  ],
})

export default router
