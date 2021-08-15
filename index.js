module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "./cjs/node-babel",
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ["flowtype", "react", "react-hooks"],
  settings: {
    react: {
      version: "16.0"
    },
  },
  rules: {
    "flowtype/semi": [2, "always"],
    "react-hooks/rules-of-hooks": "error",
  },
};
