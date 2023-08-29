module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  extends: ['airbnb-base', "prettier", 'plugin:svelte/recommended'],
  // overrides: [
  //   {
  //     files: '*.svelte',
  //     processor: 'svelte-eslint-parser',
  //   },
  // ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/no-mutable-exports': 0,
    'import/prefer-default-export': 0,
    'import/first': 0,
    // 'no-param-reassign': ['error', { 'props': false }],
  },
  settings: {
    'svelte3/ignore-styles': () => true,
  },
};
