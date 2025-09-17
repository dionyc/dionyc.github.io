module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jquery: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
  },
  globals: {
    ScrollReveal: 'readonly',
    sr: 'writable',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
  },
};