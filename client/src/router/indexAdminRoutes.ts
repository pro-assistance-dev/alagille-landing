// import BuildingsRoutes from '@/modules/buildings/router/BuildingsRoutes';
// import ExtractsRoutes from '@/modules/extracts/router/ExtractsRoutes';
// import AdminFormsRoutes from '@/modules/forms/router/AdminFormsRoutes';
// import SettingsRoutes from '@/modules/settings/router/SettingsRoutes';
import AdminPatientsRoutes from '@/router/AdminPatientsRoutes';
// import AdminRepresentativesRoutes from '@/router/AdminRepresentativesRoutes';
// import AdminUsersRoutes from '@/router/AdminUsersRoutes';

const routes = [
  // ...AdminFormsRoutes,
  // ...SettingsRoutes,
  // ...ExtractsRoutes,
  // ...BuildingsRoutes,
  ...AdminPatientsRoutes,
  // ...AdminRepresentativesRoutes,
  // ...AdminUsersRoutes,
];

routes.forEach((r) => {
  // r.beforeEnter = RouterGuard.BeforeEnter;
  r.meta = {
    layout: 'AdminLayout',
  };
});
export default routes;
