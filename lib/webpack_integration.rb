# require 'webpack_integration'
module WebpackIntergration

  # @example
  #   WebpackIntergration.file_for('clients.css')
  def self.file_for(filename)
    assets_manifest.fetch(filename) # will raise on missing assets!
  end

  # @example
  #   WebpackIntergration.fuzzy_file_for('client.png')
  def self.fuzzy_file_for(file_pattern)
    alternatives = assets_manifest.keys.grep(Regexp.new(file_pattern))
    raise "TOO MANY MATCHES for #{file_pattern}" if alternatives.size > 1
    file_for(alternatives.first)
  end

  # WebpackIntergration.assets_manifest
  def self.assets_manifest
    @assets_manifest ||= generate_assets_manifest
  end

  def self.generate_assets_manifest
    res = {}
    Dir['public/webpack/**/**/**'].each do |f|
      next if File.directory?(f)
      key      = f.gsub('public/webpack/', '')
      key      = key.gsub(/-[a-f\d]*(\.)/, '.') # remove md5 hash
      value    = f.sub('public', '')
      res[key] = value
    end
    res
  end

  # should be called in development mode in after-request filter
  def self.reset_assets_manifest!
    @assets_manifest = nil
  end
end
