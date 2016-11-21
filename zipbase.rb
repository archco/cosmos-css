#!ruby
#
require 'rubygems'
require 'json'
require 'zip'
# @link: https://github.com/rubyzip/rubyzip

def get_custom_field
	js = Dir['src/js/custom_modules/*']
	js << 'src/js/custom.json'
	sass = Dir['src/sass/custom/*']
	sass << 'src/sass/_custom-variable.scss'
	sass << 'src/sass/_custom.scss'
	return js + sass
end

def get_src_base_part
	src_files = Dir['src/**/*']
	src_custom_field = get_custom_field()
	return src_files - src_custom_field
end

def genarate_name
	file = File.read('package.json')
	package = JSON.parse(file)
	return "cosmos-css-#{package['version']}-base"
end

folder = genarate_name()
zipfile_name = folder + '.zip'
filelist = get_src_base_part()

Zip::File.open(zipfile_name, Zip::File::CREATE) do |zipfile|
	filelist.each do |filename|
		zipfile.add(folder + '/' + filename, filename)
	end
end

puts "#{filelist.length} files to #{zipfile_name}"