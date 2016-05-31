var gulp = require('gulp');
var bump = require("gulp-bump");
var git = require("gulp-git");

var runSequence = require("run-sequence");

var paths = require('../paths');
var git_src = ['.', "./build/*", "./" + paths.output + "*", "./" + paths.root + "*"];

gulp.task('bump', function () {
  return gulp.src(['./package.json'])
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

gulp.task('tag1', function () {
  var pkg = require(paths.requireRoot + 'package.json');
  var v = 'v' + pkg.version;
  var message = 'Release ' + v;

  return gulp.src(git_src)
    .pipe(git.commit(message));
});

gulp.task('tag2', function () {
  var pkg = require(paths.requireRoot + 'package.json');
  var v = 'v' + pkg.version;
  var message = 'Release ' + v;

  git.tag(v, message, function (err) {
    if (err) throw err;
  });
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

gulp.task('tag', function(callback) {
  return runSequence(
    'tag1',
    'tag2',
    callback
  );
});

var exec = require('child_process').exec;
var gutil = require('gulp-util');
gulp.task('npm-publish', function () {
  exec('npm publish', {cwd: process.cwd()}, function(err, stdout, stderr){
    if (err) return console.error(err);
    //gutil.log(stdout, stderr);
  });
});

gulp.task('publish', function(callback) {
  return runSequence(
    'bump',
    'tag',
    'npm-publish',
    callback
  );
});
