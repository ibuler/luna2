module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'space-before-function-paren': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'no-undef': 'off',
    'camelcase': 'off',
    'indent': 'off',
    'semi': ['warn', 'never'],
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
