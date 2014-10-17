require('./styles');

var JQuery = require('jquery');
var React  = require('react');

console.log('clients bundle here, updating it');
HelloWorld = require('./hello_world')
require('./module_a')


// this exposes global libs
require('./install_get_module')()

//React.renderComponent(HelloWorld(), document.getElementById('react-test'))


//test async loading of bigger JS parts
require([], function() {
  var d3 = require('d3');
  //console.log(d3);
});
