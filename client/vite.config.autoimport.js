import { classesNames, servicesNames, servicesStoresNames } from 'sprof';

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
      imports: classesNames,
    },
    {
      from: 'sprof',
      imports: servicesStoresNames,
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
