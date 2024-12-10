import { fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import _import from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';
import parser from 'vue-eslint-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['public/dist/', '.storybook', 'dist/*', 'eslint.config.mjs'],
  },
  ...compat.extends(
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
    './.eslintrc-auto-import.json',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      import: fixupPluginRules(_import),
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: parser,
      ecmaVersion: 2024,
      sourceType: 'commonjs',

      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },

    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src/']],
          extensions: ['.ts', '.vue'],
        },
      },
    },

    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-unused-vars': 'off',

      'no-console': [
        2,
        {
          allow: ['warn'],
        },
      ],

      '@typescript-eslint/no-unused-vars': 'error',
      'import/no-unresolved': 'error',
      'no-undef': 'error',
      'no-redeclare': 0,
      'vue/no-v-html': 0,
      'vue/comment-directive': 0,
      'vue/html-closing-bracket-newline': 0,
      'vue/first-attribute-linebreak': 0,
      'vue/multiline-html-element-content-newline': 0,
      'vue/singleline-html-element-content-newline': 0,
      'vue/max-attributes-per-line': 0,
    },
  },
  {
    files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],

    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];

