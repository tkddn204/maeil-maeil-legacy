module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  ignorePatterns: ['serviceWorker.ts'],
  rules: {
    'function-paren-newline': 'off',
    'linebreak-style': 'off',
    'implicit-arrow-linebreak': 'off', // Disable to avoid conflicts between prettier and eslint
    'import/extensions': 'off', // Don't need to specify file's extension
    'import/no-extraneous-dependencies': 'off', // Allow import modules like @reach/router
    'import/prefer-default-export': 'off', // Disable to avoid bugs and issues with Gatsby API
    'object-curly-newline': 'off', // Disable to avoid conflict between prettier and object destructuring in argument
    'operator-linebreak': 'off', // Disable to avoid conflicts between prettier and eslint
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off', // allow for private methods with _,
    'no-param-reassign': 'off', // needed for tools like immer
    'no-use-before-define': 'off', // issue with React Scripts 4.0
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    'react/jsx-filename-extension': 'off', // Don't need to specify file's extension
    'react/jsx-one-expression-per-line': 'off', // Disable to avoid conflicts between prettier and eslint when using props in the same line as other element
    'react/jsx-props-no-spreading': 'off', // Allow spreading props;
    'react/require-default-props': 'off',
    'react/state-in-constructor': 'off', // allow for just `state =` if no constructor with props
    'react/no-array-index-key': 'off', // Sometimes, objects don't have an id or you want to try something
  },
  overrides: [],
};
