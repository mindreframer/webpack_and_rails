# require 'webpack_integration'
module WebpackIntergration

  # @example
  #   WebpackIntergration.script_for('clients')
  def self.script_for(bundle)
    path = Rails.root.join('app', 'views', 'webpack-assets.json') # This is the file generated by the plug-in
    file = File.read(path)
    json = JSON.parse(file)
    json[bundle]
  end
end
