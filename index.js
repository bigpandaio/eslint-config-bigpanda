module.exports = {
    "extends": "airbnb-base",
    "env": {
      "es6": true,
      "node": true,
      "mocha": true
    },
    "rules": {
      // Overrides
      "comma-dangle": 0,
      "radix": 0,
      "no-use-before-define": 0,
      "no-control-regex": 0,
      "new-cap": 0,
      "eol-last": 0,
      "no-underscore-dangle": 0,
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": 0,

      // Warnings
      "max-len": [1, 140],
      "eqeqeq": 1,
      "func-names": 1,
      "no-param-reassign": 1,
      "object-shorthand": [1, "never"],
      "indent": [1, 2],
      "no-return-assign": 1,
      "no-confusing-arrow": 1,
      "no-var": 1,
      "vars-on-top": 1,
      "prefer-template": 1,
      "no-console": 1,
      "consistent-return": 1,
      "array-callback-return": 1,
      "no-else-return": 1,
      "camelcase": 1,
      "prefer-const": 1,
      "block-scoped-var": 1,
      "no-shadow": 1,
      "dot-notation": 1,
      "guard-for-in": 1,
      "no-loop-func": 1,
      "prefer-rest-params": 1,
      "default-case": 1,
      "padded-blocks": 1,
      "prefer-arrow-callback": 1,
      "quote-props": 1,
      "one-var": 1,
      "one-var-declaration-per-line": 1,
      "yoda": 1,
      "curly": 1,
      "arrow-body-style": 1,
      "spaced-comment": 1,
      "brace-style": 1,
      "space-before-blocks": 1,
      "no-multiple-empty-lines": 1,
      "key-spacing": 1,
      "no-unneeded-ternary": 1,
      "dot-location": 1,
      "global-require": 1,
      "block-spacing": 1,
      "object-property-newline": 1,
      "newline-per-chained-call": 1,
      "no-useless-concat": 1,
      "no-useless-escape": 1,
      "no-lonely-if": 1,
      "no-restricted-syntax": 1,
      "no-extra-boolean-cast": 1,
      "prefer-spread": 1,
      "no-path-concat": 1,
      "no-mixed-operators": 1,
      "operator-assignment": 1,
      "space-unary-ops": 1,
      "no-prototype-builtins": 1,
      "import/newline-after-import": 1,

      // Auto-fixable
      "quotes": 1,
      "object-curly-spacing": 1,
      "space-before-function-paren": 1,
      "keyword-spacing": 1,
      "semi": 1,
      "no-multi-spaces": 1,
      "space-in-parens": 1,
      "array-bracket-spacing": 1,
      "space-infix-ops": 1,
      "comma-spacing": 1,
      "semi-spacing": 1,
      "no-trailing-spaces": 1,
      "arrow-parens": [1, "always"],

      // TODO: turn to errors in the future
      "no-unused-vars": 1,
      "wrap-iife": 1,
      "no-unused-expressions": 1
    }
};
