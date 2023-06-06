module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    project: ['tsconfig.json', './test/tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': 'warn',
    'prefer-arrow-callback': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
  },
};
