var gulp = require('gulp');
var git = require("gulp-git");

gulp.task("git-add", function() {
  return gulp.src("./*")
    .pipe(git.add());
});

gulp.task('git-commit', function(){
  return gulp.src('./*')
    .pipe(git.commit('initial commit'));
});

gulp.task('git-push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});
