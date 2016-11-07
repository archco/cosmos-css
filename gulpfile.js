'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

/**
 * Default
 */
gulp.task('default', ['sass', 'pug', 'babel']);

gulp.task('watch', ['sass:watch', 'pug:watch', 'babel:watch']);

gulp.task('min', ['sass:min', 'babel:min']);

/**
 * Sass
 */
gulp.task('sass', function () {
	return gulp.src('src/sass/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('sass:watch', function () {
	gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('sass:min', function () {
	return gulp.src('src/sass/style.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('dist/css/'));
});

/**
 * Pug
 */
gulp.task('pug', function () {
	return gulp.src('tests/views/*.pug')
		.pipe(pug({
			// options.
			pretty: true,
		}))
		.pipe(gulp.dest('tests/'));
});

gulp.task('pug:watch', function () {
	gulp.watch('tests/views/**/*.pug', ['pug']);
});

/**
 * Babel
 */
var jsOption = {
	fileName: 'script.js',
	minFileName: 'script.min.js',
	srcDir: './src/js/',
	dest: './dist/js/',
	baseList: require('./src/js/cosmos.json'),
	customList: require('./src/js/custom.json')
};
var jsFiles = (function () {
	var list = jsOption.baseList.concat(jsOption.customList);
	list.forEach(function (v, i, a) {
		a[i] = jsOption.srcDir + v;
	});
	return list;
})();

gulp.task('babel', function () {
	return gulp.src(jsFiles)
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(concat(jsOption.fileName))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(jsOption.dest));
});

gulp.task('babel:watch', function () {
	gulp.watch('src/js/**/*.js', ['babel']);
});

gulp.task('babel:min', function () {
	return gulp.src(jsFiles)
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(concat(jsOption.minFileName))
		.pipe(uglify())
		.pipe(gulp.dest(jsOption.dest));
});