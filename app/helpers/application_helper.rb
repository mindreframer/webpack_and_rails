module ApplicationHelper

  require 'webpack_integration'
  def webpack_file(filename)
    WebpackIntergration.fuzzy_file_for(filename)
  end
end
