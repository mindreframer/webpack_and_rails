// Karma configuration
var webpackConfig = require('./webpack.config.js')

var webpack = require('webpack');

webpackConfig.cache = true
// we need to remove all the "bundling"-configuration parameters
delete webpackConfig.entry
delete webpackConfig.output

// remove CommonChunks plugin...
webpackConfig.plugins = webpackConfig.plugins.filter(function(e){ return !e.chunkName })
// remove definePlugin with definitions
webpackConfig.plugins = webpackConfig.plugins.filter(function(e){ return !e.definitions })
// remove ignorePlugin with test-folder-regex
webpackConfig.plugins = webpackConfig.plugins.filter(function(e){ return !e.resourceRegExp })

// now indicate that we are in test ENV
var definePlugin = new webpack.DefinePlugin({IS_TEST: true})
webpackConfig.plugins.push(definePlugin)


module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test_env.js',
      '**/**/__test__/*Test.*'
    ],

    // list of files to exclude
    exclude: [

    ],

    // list of preprocessors
    preprocessors: {
      '**/**/__test__/*Test.*': ['webpack']
    },

    webpack: webpackConfig,

    webpackServer: {
        quiet: true, // remove the noise from webpack compilation, revert for more output
        stats: {
            colors: true
        }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,


    plugins: [
        require("karma-jasmine"),
        require("karma-chrome-launcher"),
        require("karma-webpack")
    ]
  });
};
