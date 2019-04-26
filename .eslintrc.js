module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      // Disabling this fixes the problem
      jsx: true
    }
  },
  rules: {
    quotes: [2]
  }
};
