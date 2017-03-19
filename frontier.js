module.exports = {
  "extends": "./index.js",
  "globals": {
    "moment": false,
    "Raven": false,
    "markdown": false,
    "Favico": false,
    "d3": false,
    "$": false,
    "_": false,
    "pluralize": false,
    "bpToggleDropdown": false,
    "getProcessingMessage": false,
    "getErrorMessageTransform": false,
    "Awesomplete": false
  },
  "rules": {
    // Overrides
    "prefer-spread": 0,
    "angular/json-functions": 0,
    "angular/typecheck-string": 0,
    "angular/controller-name": [1, "/[A-Z].*(Controller)$/"],
    "angular/service-name": [1, "/[A-Z].*(Service|Store|Utils)$/"],
    "angular/no-service-method": 0, // Change to 'no factory'
    "angular/definedundefined": 0,
    "angular/typecheck-array": 0,

    "angular/window-service": 0,
    "angular/controller-as": 1,
    "angular/controller-as-vm": 1,
    "angular/log": 1,
    "angular/interval-service": 0,
    "angular/no-private-call": 2,
    "angular/di-unused": 1,
    'angular/no-services': [1, ['$http', '$resource']],
    "angular/controller-as-route": 1,
    "angular/document-service": 0,
    "angular/on-watch": 1,
    "angular/timeout-service": 0,
    "angular/component-limit": [1, 1],
    "angular/no-inline-template": 1,
    "angular/no-directive-replace": 1,
    "angular/no-http-callback": 1,
    "angular/function-type": [1, "named"],
    "angular/module-setter": 2,
    "angular/module-getter": 2,

    // After upgrading airbnb style:
    "no-useless-return": 1,
    "no-plusplus": 1,
    "no-multi-assign": 1,
    "no-bitwise": 1,
    "import/no-dynamic-require": 1
  }
};
