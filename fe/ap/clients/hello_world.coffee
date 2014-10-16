React  = require('react');

HelloWorld = React.createClass
  propTypes:
    worldType: React.PropTypes.string

  getDefaultProps: ->
    worldType: 'dark'

  getInitialState: ->
    type: this.props.worldType

  onClick: ->
    this.setState(type: 'clicked')

  onMouseEnter: ->
    this.setState(type: 'mouseEnter')

  render: ->
    React.DOM.div({
      onClick: this.onClick
      onMouseEnter: this.onMouseEnter
    }, "hello #{this.state.type} world for clients")



module.exports = HelloWorld
