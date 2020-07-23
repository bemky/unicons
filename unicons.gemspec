# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'unicons/version'

Gem::Specification.new do |spec|
  spec.name          = "unicons"
  spec.version       = Unicons::VERSION
  spec.authors       = ["Ben Ehmke"]
  spec.email         = ["benehmke@gmail.com"]
  spec.description   = %q{icons}
  spec.summary       = %q{shared set of icons}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = Dir["lib/**/*"] + Dir["app/**/*"] + Dir["*"].select { |fn| File.file?(fn) }
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake"
end
