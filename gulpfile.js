'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');

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
  app.forEach(function (v, i, a) {
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
gulp.task('default', ['sass', 'pug', 'babel', 'min']);

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
  gulp.watch('src/**/*.scss', ['sass']);
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
  gulp.watch('src/**/*.js', ['babel']);
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

/**
 * Lint
 */
gulp.task('lint', function () {
  return gulp.src(['**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});