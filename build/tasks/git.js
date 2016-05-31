var gulp = require('gulp');
var git = require("gulp-git");
var publish = require("gulp-npm-publish");

var paths = require('../paths');
var git_src = ['.', "./build/*", "./" + paths.output + "*", "./" + paths.root + "*"];

gulp.task("git-add", function() {
  return gulp.src(git_src)
    .pipe(git.add());
});

gulp.task('git-commit', function(){
  return gulp.src(git_src)
    .pipe(git.commit('initial commit'));
});

// on windows do "git config --global credential.helper wincred"
// and a manual push to store credentials once
gulp.task('git-push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});
