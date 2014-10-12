
- http://thewebivore.com/just-blazingly-easy-use-karma-test-runner/


Karma + Webpack:
  - https://github.com/webpack/karma-webpack/issues/23
  - https://github.com/KidkArolis/karma-webpack/blob/improve-docs/README.md



see here:
  /Users/roman/Desktop/sand/karma-webpack
  +
  https://github.com/karma-runner/karma-jasmine




Autoloading Tests:
  - http://dontkry.com/posts/code/single-page-modules-with-webpack.html

  Auto-loading Tests
    One use case is for automatically loading a subset of modules:
    var requireTest = require.context('./test', true, /_test\.js$/);
    requireTest.keys().forEach(requireTest);
    Which will recursively load all modules within the current folder that end in _test.js.