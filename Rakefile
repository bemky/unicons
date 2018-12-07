require "bundler/gem_tasks"

task :compile do
  puts "Compiling icons..."
  puts %x(fontcustom compile)
  puts "Cleaning font files"
  puts %x(rm docs/assets/fonts/*)
  puts "Duplicating assets to docs"
  puts %x(cp -R vendor/assets/ docs/assets/)
end