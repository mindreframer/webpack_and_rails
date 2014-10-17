# install global function to require modules
fn = ->
  console.log('hey')
  # https://github.com/webpack/webpack/tree/master/examples/require.context
  if false # this breaks the karma tests... need to activate during normal webpack build
    window['getModule'] = (m)-> return require("./" + m);


  # # also expose global libs
  window['React']  = require('react')
  window['jQuery'] = window['$'] =  require('jquery')


module.exports = fn
