var fs = require('fs');

var gulp = require('gulp');
var bump = require('gulp-bump');
var runSequence = require('run-sequence');
var changelog = require('conventional-changelog');

var paths = require('../paths');
var args = require('../args');

gulp.task('bump-version', function(){
  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump({type:args.bump })) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
});

gulp.task('changelog', function(callback) {
  var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  return changelog({
    repository: pkg.repository.url,
    version: pkg.version,
    file: paths.doc + '/CHANGELOG.md'
  }, function(err, log) {
    fs.writeFileSync(paths.doc + '/CHANGELOG.md', log);
  });
});

gulp.task('prepare-release', function(callback){
  return runSequence(
    'build',
    'lint',
    'bump-version',
    'doc',
    'changelog',
    callback
  );
});
