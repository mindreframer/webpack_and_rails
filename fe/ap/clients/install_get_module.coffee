# install global function to require modules
fn = ->
  console.log('hey')
  # https://github.com/webpack/webpack/tree/master/examples/require.context
  # window['getModule'] = (templateName)->
  #   return require("./" + templateName);

  # also expose global libs
  window['React']  = require('react')
  window['jQuery'] = window['$'] =  require('jquery')


module.exports = fn
