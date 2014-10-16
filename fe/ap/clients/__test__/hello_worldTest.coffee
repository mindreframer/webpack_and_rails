describe 'HelloWorld React Component', ->
  HelloWorld = require('../hello_world')
  require('../entry')

  it "is present", ->
    expect(HelloWorld).toBeDefined()

  it "is true", ->
    expect(1+1).toEqual(2)

