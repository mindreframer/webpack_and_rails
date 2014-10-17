console.log('clients bundle here, updating it');
// this exposes global libs

require('./modules/module_a')

if(!IS_TEST)
  require('./modules/install_get_module')()


require('./styles');
var JQuery     = require('jquery');
var React      = require('react');
var HelloWorld = require('./modules/hello_world')



// //React.renderComponent(HelloWorld(), document.getElementById('react-test'))
// // test async loading of bigger JS parts
require([], function() {
  var d3 = require('d3');
  //console.log(d3);
});
