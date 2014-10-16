describe 'HelloWorld React Component', ->
  HelloWorld = require('../hello_world')

  it "is present", ->
    expect(HelloWorld).toBeDefined()

  it "is true", ->
    expect(1+1).toEqual(2)

