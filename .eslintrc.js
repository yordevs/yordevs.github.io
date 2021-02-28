/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/display-name": 0,
    "react/prop-types": 1,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
