// Eslintrc: como nossa guia de estilo vai funcionar.
module.exports = {
  env: {
    // rodando no browser e rodando com as funcionalidades do ecmascript6
    browser: true,
    es6: true,
    // Entender que  aplicação tem váriaveis globais do jest
    jest: true,
  },
  extends: [
    //regras dos plugins e configs instaladas
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    // Import e export envés com require e module.exports
    sourceType: 'module',
  },
  // React: enteder jsx, 
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    // Definir tipagem de forma implicita e não explicita   
    '@typescript-eslint/explicit-function-return-type': 'off',
    // desabilitar necessidade declarar public e private
    '@typescript-eslint/explicit-member-accessibility': 'off'
  },
  settings: {
    //Import e export de arquivos ts e tsx
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};