const AdminRepresentativesList = () => import('@/components/admin/representatives/AdminRepresentativesList.vue');
const AdminRepresentativePage = () => import('@/components/admin/representatives/AdminRepresentativePage.vue');

export default [
  {
    path: '/admin/representatives',
    name: 'AdminRepresentativesList',
    component: AdminRepresentativesList,
  },
  {
    path: '/admin/representatives/:id',
    name: 'AdminRepresentativePage',
    component: AdminRepresentativePage,
  },
];
