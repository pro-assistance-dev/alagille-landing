const AdminPatientsList = () => import('@/components/admin/patients/AdminPatientsList.vue');
const AdminPatientPage = () => import('@/components/admin/patients/AdminPatientPage.vue');

export default [
  {
    path: '/admin/patients',
    name: 'AdminPatientsList',
    component: AdminPatientsList,
  },
  {
    path: '/admin/patients/:id',
    name: 'AdminPatientPage',
    component: AdminPatientPage,
  },
];
