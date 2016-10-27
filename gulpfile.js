'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['sass', 'pug']);

gulp.task('watch', ['sass:watch', 'pug:watch']);

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