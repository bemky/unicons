require "bundler/gem_tasks"

task :compile do
  puts "Compiling icons..."
  puts %x(fontcustom compile)
  puts %x(rm -rf app/assets/svgs/)
  puts %x(cp -R assets/vectors/ app/assets/svgs/)
end