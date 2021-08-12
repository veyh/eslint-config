module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
  ],
  plugins: ["flowtype", "react", "react-hooks"],
  settings: {
    react: {
      version: "16.0"
    },
  },
  rules: {
    "flowtype/semi": [2, "always"],
    "react-hooks/rules-of-hooks": "error",

    "indent": [2, 2, {
      "SwitchCase": 1,
      "MemberExpression": "off",
      "FunctionDeclaration": { "parameters": "first" },
      "FunctionExpression": { "parameters": "first" },
    }],
    "linebreak-style": [2, "unix"],
    "quotes": [2, "double"],
    "semi": [2, "always"],
    "no-console": [1],
    "no-unused-vars": ["warn", {
      args: "all",
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    }],
    "no-constant-condition": [0],
    "no-restricted-globals": [2, "Promise"],
    // "one-var": [2, "always"],
    "no-case-declarations": [2],
    "no-unneeded-ternary": [2],
    "space-before-blocks": [2, "always"],
    "keyword-spacing": [2],
    "arrow-spacing": [2],
    "space-infix-ops": [2],
    "eol-last": [2, "always"],
    "newline-per-chained-call": [2],
    "no-whitespace-before-property": [2],
    "padded-blocks": [2, "never"],
    "space-in-parens": [2, "never"],
    "array-bracket-spacing": [2, "never"],
    "object-curly-spacing": [2, "always"],
    "max-len": [2, {
      "code": 80,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
    }],
    "comma-style": [2, "last"],
    "comma-dangle": [2, {
      "arrays": "only-multiline",
      "objects": "only-multiline",
      "imports": "only-multiline",
      "exports": "only-multiline",
      "functions": "ignore", // TODO "only-multiline"
    }],
    "new-cap": [2, { properties: false }],
    "no-useless-escape": [2],
    "no-tabs": [2],
  },
  "overrides": [{
    files: ["**/*.spec.js"],
    env: {
      mocha: true,
    },
  }]
};
