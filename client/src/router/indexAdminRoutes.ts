import AdminPatientsRoutes from '@/router/AdminPatientsRoutes';

const routes = [...AdminPatientsRoutes];

routes.forEach((r) => {
  // r.beforeEnter = RouterGuard.BeforeEnter;
  r.meta = {
    layout: 'AdminLayout',
  };
});
export default routes;
