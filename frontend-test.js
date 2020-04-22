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
        "no-unused-expressions": "off",
        "arrow-body-style": "off"
    }
};
