require('./styles.css');
var React = require('bower/react/react');

console.log('clients bundle here, updating it, working great');

HelloWorld = React.createClass({
  render: function(){
    return React.DOM.div({}, 'hello world for clients')
  }
})

React.renderComponent(HelloWorld(), document.getElementById('react-test'))
