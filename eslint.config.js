import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import'; // Import the plugin

export default [
  {
    files: [
      'src/**/*.{js,mjs,cjs,ts}',
      'specs/**/*.{js,ts,mjs,cjs}',
      'index.ts',
      'eslint.config.js'
    ],
  },
  {
    languageOptions: {
      globals: { ...globals.es2021 }, // Remove globals.node if not needed
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'indent': ['error', 2], // number of spaces
      'quotes': ['error', 'single'], // single or double
      'semi': ['error', 'always'], // always or never ;
      'no-console': 'off', // off, warn, error
      'eqeqeq': ['error', 'always'], // === or !== instead of == or != 
      'import/order': ['error', { groups: ['builtin', 'external', 'internal'] }],
    },
  },
];
