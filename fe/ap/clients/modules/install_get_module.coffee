# install global function to require modules

fn = ->
  window['jQuery']  = window['$'] = require('jquery')
  window['React']   = require('react')
  window['numeral'] = require('numeral')
  window['moment']  = require('moment')

  # https://github.com/webpack/webpack/tree/master/examples/require.context
  #if should_compile
  getModule = (m)->  require("./" + m)
  window['getModule'] = getModule


module.exports = fn
