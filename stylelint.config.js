export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-clean-order',
  ],
  plugins: ['stylelint-prettier', 'stylelint-order'],
  rules: {
    'selector-class-pattern': null,
  },
};
