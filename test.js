module.exports = {
  "extends": "./index.js",
  "env": {
    "protractor": true
  },
  "globals": {
    "expect": true,
    "sinon": true,
    "proxyquire": true,
    "inject": false,
    "chai": false,
    "stubPromise": false,
    "bpModule": false
  },
  "rules": {
    "no-unused-expressions": "off",
    "arrow-body-style": "off"
  }
}
