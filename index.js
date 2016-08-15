module.exports = {
    "extends": "airbnb/base",
    "env": {
      "es6": true,
      "node": true,
      "mocha": true
    },
    "rules": {
      "radix": 0,
      "no-use-before-define": 0,
      "no-control-regex": 0,
      "new-cap": 0,
      "eol-last": 0,
      "no-param-reassign": 1,
      "no-shadow": 1,
      "max-len": [1, 140],
      "arrow-parens": [1, "always"],
      "comma-dangle": [2, "never"],
      "object-shorthand": [2, "never"]
    }
};
