require('./styles');

var JQuery = require('jquery');
console.log('clients bundle here, updating it');


HelloWorld = require('./hello_world')

React.renderComponent(HelloWorld(), document.getElementById('react-test'))


// test async loading of bigger JS parts
require([], function() {
  var d3 = require('d3');
  console.log(d3);
});
