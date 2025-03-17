export default {
  plugins: ['stylelint-prettier', 'stylelint-order'],
  rules: {
    'selector-class-pattern': null,
    'prettier/prettier': true,
  },
  overrides: [
    {
      files: ['**/*.css'],
      extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
        'stylelint-config-clean-order',
      ],
      rules: {},
    },
  ],
};
