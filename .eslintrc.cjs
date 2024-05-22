module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  extends: ['airbnb-base', "prettier"],
  overrides: [
    {
      files: '**/*.svelte',
      processor: 'svelte3/svelte3',
    },
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/no-mutable-exports': 0,
    'import/prefer-default-export': 0,
    'import/first': 0,
    // 'arrow-body-style': 'off',
    // 'no-multiple-empty-lines': [
    //   'error',
    //   {
    //     'max': 3,
    //     'maxEOF': 1,
    //   },
    // ],
    // 'no-param-reassign': ['error', { 'props': false }],
  },
  settings: {
    'svelte3/ignore-styles': () => true,
  },
};
