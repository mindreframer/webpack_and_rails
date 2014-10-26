// optimization for webpack like recommended here:
// https://github.com/webpack/karma-webpack/issues/23
// https://github.com/webpack/karma-webpack/pull/25/
// indeed much faster compilation!

var testsContext = require.context("../ap", true, /Test$/);
console.log(testsContext.keys());
testsContext.keys().forEach(testsContext);
