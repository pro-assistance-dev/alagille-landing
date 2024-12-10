import { IAdminMenu } from 'sprof';

const menuList: IAdminMenu[] = [
  {
    name: 'Персоналии',
    to: '',
    icon: 'el-icon-info',
    children: [
      {
        name: 'Пациенты',
        to: '/admin/patients',
        icon: 'el-icon-info',
      },
    ],
  },
  // {
  //   name: 'Администрирование',
  //   to: '',
  //   icon: 'el-icon-info',
  //   children: [
  //     {
  //       name: 'Пользователи',
  //       to: '/admin/users',
  //       icon: 'el-icon-info',
  //     },
  //   ],
  // },
];

export default menuList;
