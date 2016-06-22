var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var through2 = require('through2');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var rename = require('gulp-rename');
var tools = require('aurelia-tools');
var gulpIgnore = require('gulp-ignore');
var ts = require('gulp-typescript');
var merge = require('merge2');

var jsName = paths.packageName + '.js';

function removeDTSPlugin(options) {
  var found = options.plugins.find(function(x) {
    return x instanceof Array;
  });

  var index = options.plugins.indexOf(found);
  options.plugins.splice(index, 1);
  return options;
}

gulp.task('build-ts-helpers', function() {
  var tsProject = ts.createProject('tsconfig.json',
    { typescript: require('typescript')
    }
  );
  var tsResult = tsProject.src().pipe(ts(tsProject));
  return merge([
    tsResult.dts.pipe(gulp.dest('release/definitions')),
    tsResult.js.pipe(gulp.dest('release/js'))
  ]);
});

gulp.task('build-ts-src', function() {
  var tsProject = ts.createProject('tsconfig-to-emit-helpers.json',
    { typescript: require('typescript')
    }
  );
  var tsResult = tsProject.src().pipe(ts(tsProject));
  return merge([
    tsResult.dts.pipe(gulp.dest('release/definitions')),
    tsResult.js.pipe(gulp.dest('release/js'))
  ]);
});

gulp.task('build-ts', function(callback) {
  return runSequence(
    'build-ts-helpers',
    'build-ts',
    callback
  );
});

gulp.task('build-index', function() {
  var importsToAdd = [];

  return gulp.src(paths.source)
    .pipe(tools.sortFiles())
    .pipe(gulpIgnore.exclude(jsName))
    .pipe(through2.obj(function(file, enc, callback) {
      file.contents = new Buffer(tools.extractImports(file.contents.toString('utf8'), importsToAdd));
      this.push(file);
      return callback();
    }))
    .pipe(concat(jsName))
    .pipe(insert.transform(function(contents) {
      return tools.createImportBlock(importsToAdd) + contents;
    }))
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-es2015-temp', function() {
  return gulp.src(paths.output + jsName)
    .pipe(to5(assign({}, compilerOptions.commonjs())))
    .pipe(gulp.dest(paths.output + 'temp'));
});

gulp.task('build-es2015', function() {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, removeDTSPlugin(compilerOptions.es2015()))))
    .pipe(gulp.dest(paths.output + 'es2015'));
});

gulp.task('build-commonjs', function() {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, removeDTSPlugin(compilerOptions.commonjs()))))
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-amd', function() {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, removeDTSPlugin(compilerOptions.amd()))))
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-system', function() {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, removeDTSPlugin(compilerOptions.system()))))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-dts', function() {
  return gulp.src(paths.output + paths.packageName + '.d.ts')
      .pipe(rename(paths.packageName + '.d.ts'))
      .pipe(gulp.dest(paths.output + 'es2015'))
      .pipe(gulp.dest(paths.output + 'commonjs'))
      .pipe(gulp.dest(paths.output + 'amd'))
      .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    'build-index',
    ['build-es2015-temp', 'build-es2015', 'build-commonjs', 'build-amd', 'build-system'],
    'build-dts',
    callback
  );
});
