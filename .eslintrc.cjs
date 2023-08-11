module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'prettier/prettier': 0,
    semi: ['error', 'never'],
    '@typescript-eslint/quotes': ['error', 'single'],
    quotes: ['error', 'single'],
    'react-native/no-inline-styles': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'no-shadow': 0,
    'no-catch-shadow': 0,
    indent: ['error', 2],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'react/react-in-jsx-scope': 2,
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['sibling', 'parent', 'index'],
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '@berty/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  globals: {
    JSX: 'readonly',
  },
}
