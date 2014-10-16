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


