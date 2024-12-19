import { classesNames, servicesNames, servicesStoresNames } from 'sprof';

import stores from './src/store/indexNames';
export default {
  include: [
    '.ts',
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/,
    /\.vue\?vue/, // .vue
    /\.md$/, // .md
  ],
  imports: [
    'vue',
    'vitest',
    {
      from: 'sprof',
      imports: servicesNames,
    },
    {
      from: 'sprof',
      imports: servicesNames,
    },
    {
      from: 'sprof',
      imports: classesNames,
    },
    {
      from: 'sprof',
      imports: servicesStoresNames,
    },
    {
      from: '@/store/index',
      imports: stores,
      // type: true,
    },
  ],
  types: true,
  defaultExportByFilenam: true,
  dirs: ['srs/modules/**', 'srs/services/**'],
  // ignoreDts: ['srs/services', 'Message'],
  vueTemplate: true,
  dts: true,
  eslintrc: {
    enabled: true,
  },
};
