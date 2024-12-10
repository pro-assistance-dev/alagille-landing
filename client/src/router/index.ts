import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import indexAdminRoutes from '@/router/indexAdminRoutes';

const routes: Array<RouteRecordRaw> = [...indexAdminRoutes];

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

export default router;
