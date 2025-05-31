// eslint.config.js
import js from '@eslint/js';
import next from 'eslint-plugin-next';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      next: next,
    },
    rules: {
      'react/no-unescaped-entities': 'error',
    },
  },
];
