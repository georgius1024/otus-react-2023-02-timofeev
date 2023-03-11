module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  plugins: ['react', 'jest', '@typescript-eslint'],
  rules: {
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'react/display-name': 'off'
  },
  settings: {
    react: {
      version: require('./package.json').dependencies.react
    }
  }
}
