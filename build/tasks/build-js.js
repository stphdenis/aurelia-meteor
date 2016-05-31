var gulp = require('gulp');
var rename = require('gulp-rename');
var to5 = require('gulp-babel');

var runSequence = require("run-sequence");
var assign = Object.assign || require('object.assign');

var compilerOptions = require('../babel-options');
var paths = require('../paths');

var jsName = paths.packageName + '.js';

// Build to es5.
gulp.task('build-index', function () {
  return gulp.src(paths.root + 'index.js')
    .pipe(rename(jsName))
    .pipe(to5(assign({}, compilerOptions.commonjs())))
    .pipe(gulp.dest(paths.output));
});

// Build to es5.
gulp.task('build-modules', function () {
  return gulp.src([ paths.root + '*.js', '!' + paths.root + 'index.js'])
    .pipe(to5(assign({}, compilerOptions.commonjs())))
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-js', function(callback) {
  return runSequence(
    'build-index',
    'build-modules',
    'build-cleaner',
    callback
  );
});
