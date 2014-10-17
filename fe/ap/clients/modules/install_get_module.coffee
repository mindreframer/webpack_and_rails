# install global function to require modules

should_compile = not window['__TEST__']
should_compile = false

fn = ->
  window['React']  = require('react')
  window['jQuery'] = window['$'] = require('jquery')
  # https://github.com/webpack/webpack/tree/master/examples/require.context
  #if should_compile
  #getModule = (m)->  require("./" + m) if false
  #window['getModule'] = getModule if should_compile


module.exports = fn
