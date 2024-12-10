const AdminUsersList = () => import('@/components/admin/users/AdminUsersList.vue');
const AdminUserPage = () => import('@/components/admin/users/AdminUserPage.vue');

export default [
  {
    path: '/admin/users',
    name: 'AdminUsersList',
    component: AdminUsersList,
  },
  {
    path: '/admin/users/:id',
    name: 'AdminUserPage',
    component: AdminUserPage,
  },
];
