# http://facebook.github.io/react/docs/test-utils.html
describe 'HelloWorld React Component', ->
  HelloWorld = require('../hello_world')
  React      = require('react')

  TestUtils    = undefined
  beforeEach ->
    TestUtils = React.addons.TestUtils

  it "is present", ->
    expect(HelloWorld).toBeDefined()

  it "can be rendered", ->
    component = TestUtils.renderIntoDocument(HelloWorld(worldType: 'bright'))
    text = component.getDOMNode().textContent
    expect(text).toMatch('bright')

  it "can be clicked", ->
    component = TestUtils.renderIntoDocument(HelloWorld(worldType: 'bright'))
    text = component.getDOMNode().textContent
    expect(text).toMatch('bright')
    expect(text).not.toMatch('clicked')

    # now click and check text content
    TestUtils.Simulate.click(component.getDOMNode() )
    text = component.getDOMNode().textContent
    expect(text).toMatch('clicked')


  it "can be mouse-over'ed", ->
    component = TestUtils.renderIntoDocument(HelloWorld(worldType: 'bright'))

    node = component.getDOMNode()
    text = node.textContent
    expect(text).toMatch('bright')
    expect(text).not.toMatch('mouseEnter')

    # mouse-over / enter
    TestUtils.SimulateNative.mouseOver(node)

    text = node.textContent
    expect(text).toMatch('mouseEnter')

