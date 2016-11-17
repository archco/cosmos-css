#!ruby
#
require 'rubygems'
require 'zip'
# @link: https://github.com/rubyzip/rubyzip

def get_custom_field
	js = Dir['./src/js/custom_modules/*']
	js << './src/js/custom.json'
	sass = Dir['./src/sass/custom/*']
	sass << './src/sass/_custom-variable.scss'
	sass << './src/sass/_custom.scss'
	return js + sass
end

def get_src_base_part
	src_files = Dir['./src/**/*']
	src_custom_field = get_custom_field()
	return src_files - src_custom_field
end

zipfile_name = 'cosmos-css-0.1.3-basesrc.zip'
filelist = get_src_base_part()

Zip::File.open(zipfile_name, Zip::File::CREATE) do |zipfile|
	filelist.each do |filename|
		zipfile.add(filename, filename)
	end
end

puts filelist.length