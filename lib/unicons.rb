class Unicons
  
  def self.import
    json ||= JSON.parse(File.read(File.expand_path("../../lib/assets/fonts/unicons.json", __FILE__)))
  end

  def self.parse
    data ||= import

    icon_hash = {}
    data["glyphs"].each do |name, value|
      icon_hash[name.gsub('-','_').to_sym] = value.to_s
    end
    icon_hash
  end

  def self.mapping
    @@mapping ||= parse
  end

  def self.symbol(name)
    mapping[name.to_sym]
  end
  
  def self.entity(name)
    "&#x" + (symbol(name) || symbol(:building_list)) + ";"
  end
  
  def self.base64
    data ||= import
    @@base64 ||= {
      :ttf => Base64.encode64(File.read(File.expand_path("../../lib/assets/fonts/#{data['filename']}.ttf", __FILE__))).gsub(/\n/, ""),
      :woff => Base64.encode64(File.read(File.expand_path("../../lib/assets/fonts/#{data['filename']}.woff", __FILE__))).gsub(/\n/, "")
    }
  end

end

if defined?(::Rails)
  class Unicons
    class Engine < ::Rails::Engine

      if defined?(::Sprockets)
        if Sprockets::VERSION.start_with?('4')
          Engine.config.assets.precompile << 'unicons/manifest.js'
        else
          Engine.config.assets.precompile += %w(**/*.eot **/*.svg **/*.ttf **/*.woff **/*.woff2)
          Engine.config.assets.precompile << /\.(?:svg)\z/
        end
      elsif defined?(::Condenser)
        assets_dir = File.expand_path("../lib/assets", __dir__)
        Dir.each_child(assets_dir) do |child|
          child = File.join(assets_dir, child)
          Engine.config.assets.path << child if File.directory?(child)
          Engine.config.assets.precompile += %w(**/*.eot **/*.svg **/*.ttf **/*.woff **/*.woff2)
        end
      end      
    end
  end
elsif defined?(::Jekyll::Assets)
  asset_dirs = ['fonts', 'stylesheets', 'images', 'javascripts'].map do |ad|
    File.join(File.dirname(__FILE__), '..', 'lib', 'assets', ad)
  end
  asset_dirs.select!{ |dir| Dir.exists?(dir) }
  Jekyll::Assets::HOOKS << Proc.new { |env| asset_dirs.each { |dir| env.append_path(dir) } }
else
  class Unicons
    ASSET_PATH = File.expand_path("../lib/assets", __dir__)
  end
end