#!ruby
#
require 'rubygems'
require 'json'
require 'zip'
# @link: https://github.com/rubyzip/rubyzip

def get_src_base_part
  return Dir['src/cosmos/**/*']
end

def genarate_name
  file = File.read('package.json')
  package = JSON.parse(file)
  return "cosmos-css-#{package['version']}-base"
end

folder = genarate_name()
zipfile_name = genarate_name() + '.zip'
filelist = get_src_base_part()

Zip::File.open(zipfile_name, Zip::File::CREATE) do |zipfile|
  filelist.each do |filename|
    zipfile.add(folder + '/' + filename, filename)
  end
end

puts "#{filelist.length} files to #{zipfile_name}"