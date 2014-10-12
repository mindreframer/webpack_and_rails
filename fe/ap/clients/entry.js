require('./styles.css');
var React  = require('react');
var JQuery = require('jquery');

console.log('clients bundle here, updating it');

HelloWorld = React.createClass({
  render: function(){
    return React.DOM.div({}, 'hello world for clients')
  }
})

React.renderComponent(HelloWorld(), document.getElementById('react-test'))
