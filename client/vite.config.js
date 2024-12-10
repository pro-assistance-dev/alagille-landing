// const AutoImport = require('unplugin-auto-import/webpack');
import vue from '@vitejs/plugin-vue';
import { servicesNames } from 'sprof';
import { servicesStoresNames } from 'sprof';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import svgLoader from 'vite-svg-loader';

import classes from './src/classes/indexNames.ts';
import stores from './src/store/indexNames';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    server: {
      // disableHostCheck: true,
      host: process.env.VITE_APP_HOST,
      port: process.env.VITE_APP_PORT,
      proxy: {
        '/api': {
          ws: true,
          target: process.env.VITE_APP_API_HOST,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    base: '/',
    includeAbsolute: false,
    plugins: [
      vue({
        template: {
          transformAssetUrls: {
            sourse: ['src'],
          },
        },
      }),
      svgLoader({ svgo: false }),
      Components({
        // dts: true,
        dirs: ['src/components', 'src/services/components', 'src/views', 'src/modules'],
      }),
      AutoImport({
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
            imports: servicesStoresNames,
          },
          {
            from: '@/classes/index',
            imports: classes,
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
      }),
    ],
    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        { find: 'source-map-js', replacement: 'source-map' },
      ],
    },
    test: {
      globals: true,
      environment: 'happy-dom',
    },
  });
};
