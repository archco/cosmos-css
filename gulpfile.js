'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

/************************************************************
  Config
*************************************************************/

var config = {
  // sass
  sassSrc: 'src/cosmos/sass/style.scss',
  sassDest: 'dist/css/',
  cssFile: 'style.css',
  cssMinFile: 'style.min.css',
  // js
  jsSrcDir: 'src/cosmos/js/',
  jsList: require('./src/cosmos/js/cosmos.json'),
  jsDest: 'dist/js/',
  jsFile: 'script.js',
  jsMinFile: 'script.min.js',
  // app (custom)
  appJsSrcDir: 'src/app/js/',
  appJsList: require('./src/app/js/app.json'),
};
var jsSources = (function () {
  var base = config.jsList;
  base.forEach(function (v, i, a) {
    a[i] = config.jsSrcDir + v;
  });
  var app = config.appJsList;
  base.forEach(function (v, i, a) {
    a[i] = config.appJsSrcDir + v;
  });
  return base.concat(app);
})();


/************************************************************
  Tasks
*************************************************************/

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
  return gulp.src(config.sassSrc)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(config.cssFile))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.sassDest));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('sass:min', function () {
  return gulp.src(config.sassSrc)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename(config.cssMinFile))
    .pipe(gulp.dest(config.sassDest));
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
gulp.task('babel', function () {
  return gulp.src(jsSources)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ["es2015"]
    }))
    .pipe(concat(config.jsFile))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.jsDest));
});

gulp.task('babel:watch', function () {
  gulp.watch('src/js/**/*.js', ['babel']);
});

gulp.task('babel:min', function () {
  return gulp.src(jsSources)
    .pipe(babel({
      presets: ["es2015"]
    }))
    .pipe(concat(config.jsMinFile))
    .pipe(uglify())
    .pipe(gulp.dest(config.jsDest));
});