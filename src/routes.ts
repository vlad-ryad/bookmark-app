import { createRouter, createWebHistory } from 'vue-router';
import AuthView from './views/AuthView.vue';
import MainView from './views/MainView.vue';

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: AuthView,
    },
    {
      path: '/main',
      component: MainView,
      name: 'main',
    },
  ],

  history: createWebHistory(),
});
