export default {
  printWidth: 100,
  tabWidth: 2,
  bracketSpacing: true,
  trailingComma: 'es5',
  singleQuote: true,
  overrides: [
    {
      files: '*.html',
      options: { parser: 'babel' },
    },
    {
      files: '*.component.html',
      options: { parser: 'angular' },
    },
    {
      files: ['**/frameworks/angular/src/**/*.ts', '**/frameworks/angular/template/**/*.ts'],
      options: { parser: 'babel-ts' },
    },
    {
      files: ['**/docs/**/*.*', '*.md'],
      options: {
        importOrderSeparation: false,
        importOrderSortSpecifiers: false,
      },
    },
  ],
  plugins: ['@trivago/prettier-plugin-sort-imports'],

  importOrder: [
    '^node:',
    '^react$',
    '^storybook/internal',
    '^@storybook/[^-]*$',
    '^@storybook/(?!addon-)(.*)$',
    '^@storybook/addon-(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  arrowParens: 'always',
};
