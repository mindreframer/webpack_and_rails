# install global function to require modules


fn = ->
  window['React']  = require('react')
  window['jQuery'] = window['$'] = require('jquery')
  # https://github.com/webpack/webpack/tree/master/examples/require.context
  #if should_compile
  getModule = (m)->  require("./" + m)
  window['getModule'] = getModule


module.exports = fn
