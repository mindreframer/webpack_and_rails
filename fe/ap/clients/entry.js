require('./styles');
var React  = require('react');
var JQuery = require('jquery');

console.log('clients bundle here, updating it');

HelloWorld = React.createClass({
  render: function(){
    return React.DOM.div({}, 'hello world for clients')
  }
})

React.renderComponent(HelloWorld(), document.getElementById('react-test'))


// test async loading of bigger JS parts
require([], function() {
  var d3 = require('d3');
  console.log(d3);
});

