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
