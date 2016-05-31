var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var paths = require('../paths');

gulp.task('build-cleaner', function() {
  return gulp.src(paths.packageName)
    .pipe(vinylPaths(del));
});
