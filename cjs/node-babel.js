// You probably want to use this instead of the default eslint parser because
// it doesn't support all features that already implemented in node, like class
// properties.
//
// https://www.npmjs.com/package/@babel/eslint-parser

module.exports = {
  extends: ["./node"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    // Even if wwe provice babelOptions here, unless this is set to false, the
    // stupid babel is still trying to look for the configuration file, which
    // is unnecessary.
    requireConfigFile: false,

    // babelOptions: {
    //   presets: [
    //     "@babel/preset-env",
    //     "@babel/preset-react",
    //     "@babel/preset-flow",
    //   ],

    //   plugins: [
    //     // Stage 0
    //     "@babel/plugin-proposal-function-bind",

    //     // Stage 1
    //     "@babel/plugin-proposal-export-default-from",
    //     "@babel/plugin-proposal-export-namespace-from",
    //     "@babel/plugin-proposal-logical-assignment-operators",
    //     ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
    //     ["@babel/plugin-proposal-pipeline-operator", {
    //       "proposal": "minimal",
    //     }],
    //     ["@babel/plugin-proposal-nullish-coalescing-operator", {
    //       "loose": false,
    //     }],
    //     "@babel/plugin-proposal-do-expressions",

    //     // Other
    //     "@babel/plugin-proposal-object-rest-spread",
    //     "@babel/plugin-proposal-class-properties",
    //   ],
    // },
  },
};
