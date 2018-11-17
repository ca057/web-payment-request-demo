module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'standard',
    'standard-jsx',
    'prettier/react',
    'prettier/standard'
  ],
  plugins: ['import', 'jsx-a11y', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    semi: ['error', 'never'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'import/prefer-default-export': 0
  }
}
