module.exports = {
  root: true,
  extends: '@arcblock/eslint-config',
  globals: {
    logger: true,
  },
  ignorePatterns: ['**/scripts/*.mjs'],
};
