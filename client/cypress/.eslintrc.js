module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      },
      env: {
        'cypress/globals': true
      },
      plugins: ['cypress'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
      ],
      rules: {
        'no-console': 'warn',
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-unnecessary-waiting': 'error',
        'cypress/no-async-tests': 'error',
        'cypress/no-force': 'error',
        'cypress/assertion-before-screenshot': 'error',
        'cypress/require-data-selectors': 'error',
        'cypress/no-pause': 'error'
      }
    }
  ]
}
