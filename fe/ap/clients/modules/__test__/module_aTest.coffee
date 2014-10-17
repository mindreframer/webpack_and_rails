describe "Clients", ->
  m = require("../module_a.coffee")
  it "works with hey", ->
    expect( m.hey('1') ).toEqual("hey 1")
