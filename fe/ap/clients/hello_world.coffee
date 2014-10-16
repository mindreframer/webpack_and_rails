React  = require('react');

HelloWorld = React.createClass
  propTypes:
    worldType: React.PropTypes.string

  getDefaultProps: ->
    worldType: 'dark'

  render: ->
    React.DOM.div({}, "hello #{this.props.worldType} world for clients")



module.exports = HelloWorld
