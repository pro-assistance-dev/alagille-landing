import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const MainPage = () => import('@/components/MainPage.vue');
import indexAdminRoutes from '@/router/indexAdminRoutes';

const routes: Array<RouteRecordRaw> = [...indexAdminRoutes];

routes.push({
  path: '',
  name: 'MainPage',
  component: MainPage,
});

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

export default router;
