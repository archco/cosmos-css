'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var header = require('gulp-header');

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
// header comments (banner)
var pkg = require('./package.json');
var banner = ['/*!',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');


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
    .pipe(header(banner, { pkg : pkg }))
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
    .pipe(header(banner, { pkg : pkg }))
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
    .pipe(header(banner, { pkg : pkg }))
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
    .pipe(header(banner, { pkg : pkg }))
    .pipe(gulp.dest(config.jsDest));
});