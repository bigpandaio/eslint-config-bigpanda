module.exports = {
  "extends": "./index.js",
  "globals": {
    "expect": true,
    "sinon": true,
    "proxyquire": true
  },
  "rules": {
    "no-unused-expressions": "off",
    "arrow-body-style": "off",

    // After upgrading airbnb style:
    "no-useless-return": 1,
    "no-plusplus": 1,
    "no-multi-assign": 1,
    "no-bitwise": 1,
    "import/no-dynamic-require": 1
  }
};
