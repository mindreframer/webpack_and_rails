# install global function to require modules
fn = ->
  window['getModule'] = (templateName)->
    return require("./" + templateName);

  # also expose global libs
  window['React']  = require('react')
  window['d3']     = require('d3')
  window['jQuery'] = window['$'] =  require('jquery')

module.exports = fn