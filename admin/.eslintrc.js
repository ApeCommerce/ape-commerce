module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
  },
  ignorePatterns: [
    '**/*.d.ts',
    '**/*.js',
  ],
  plugins: [
    '@typescript-eslint',
    'vue',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  rules: {
    '@typescript-eslint/func-call-spacing': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'func-call-spacing': 'off',
    'import/no-unresolved': 'off',
    'max-len': ['error', {
      code: 120,
      ignorePattern: '^import',
    }],
    'no-param-reassign': ['error', {
      props: false,
    }],
    'no-shadow': 'off',
    'no-spaced-func': 'off',
    'no-unused-vars': 'off',
    'object-curly-newline': ['error', {
      ImportDeclaration: 'never',
    }],
  },
};
