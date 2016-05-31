var gulp = require("gulp");
var gulpTypings = require("gulp-typings");

var del = require('del');
var vinylPaths = require('vinyl-paths');

var paths = require('../paths');

gulp.task("clean-typings",function(){
  return gulp.src("./typings")
    .pipe(vinylPaths(del));
});

gulp.task("install-typings",function(){
    return gulp.src("./typings.json")
        .pipe(gulpTypings()); //will install all typingsfiles in pipeline.
});
