module.exports = {
    "extends": require.resolve("./frontend"),
    "globals": {
        "bpModule": true,
        "chai": true,
        "expect": true,
        "proxyquire": true,
        "sinon": true,
        "stubPromise": true
    },
    "rules": {
        "arrow-body-style": 0,
        "no-unused-expressions": 0,
        "no-only-tests/no-only-tests": "error"
    }
};
