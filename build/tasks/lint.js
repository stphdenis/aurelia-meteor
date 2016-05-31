var gulp = require("gulp");
var runSequence = require("run-sequence");
/*
gulp.task("lint-js", function() {
  var eslint = require("gulp-eslint");
  return gulp.src(["src/** /*.js",'!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
*/
gulp.task("lint-ts", function() {
  var tslint = require("gulp-tslint");
  return gulp.src(["src/**/*.ts"])
      .pipe(tslint({
        tslint: require("tslint").default,
        configuration: require("../../tslint.json")
      }))
      .pipe(tslint.report("prose", {emitError: true}));
});

gulp.task("lint", function(callback) {
  runSequence(//"lint-js",
   "lint-ts", callback);
});
