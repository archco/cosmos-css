'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
/** dist filename */
var jsFile = 'script.js';

/**
 * Default
 */
gulp.task('default', ['sass', 'pug', 'babel']);

gulp.task('watch', ['sass:watch', 'pug:watch', 'babel:watch']);

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
var jsList = [
	'src/js/init.js',
	'src/js/modules/util.js',
	'src/js/modules/nav.js',
	'src/js/modules/dropdown.js',
	'src/js/modules/scrolltop.js',
	'src/js/modules/message.js',
];
gulp.task('babel', function () {
	return gulp.src(jsList)
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat(jsFile))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('babel:watch', function () {
	gulp.watch('src/js/**/*.js', ['babel']);
});