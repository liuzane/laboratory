module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', {
      'vars': 'all',
      'args': 'none'
    }],
    'vue/multi-word-component-names': 'off'
  },
  ignorePatterns: ['**/*.css', '**/*.scss', '**/*.svg'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest'
      },
    },
  ]
};
