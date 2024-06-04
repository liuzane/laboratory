module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-debugger': 'error'
  }
};
