var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

gulp.task('build-ts', function() {
  var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
  });
  var tsResult = tsProject.src()
      .pipe(ts(tsProject));

  return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
    tsResult.dts.pipe(gulp.dest('dist')),
    tsResult.js.pipe(gulp.dest('dist'))
  ]);
});

gulp.task('watch', ['scripts'], function() {
  gulp.watch('lib/*.ts', ['scripts']);
});
