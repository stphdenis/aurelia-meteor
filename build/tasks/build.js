var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var merge = require('merge2');

gulp.task('default', function() {
  var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')//,
//    outFile: 'output.js'
  });
//  var tsResult = gulp.src('src/**.ts')
  var tsResult = tsProject.src() // instead of gulp.src(...)
    .pipe(sourcemaps.init()) // This means sourcemaps will be generated
    .pipe(ts(tsProject));

  return merge([
    tsResult.dts.pipe(gulp.dest('release/definitions')),
    tsResult.js
      .pipe(concat('output.js')) // You can use other plugins that also support gulp-sourcemap
      .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
      .pipe(gulp.dest('release/js'))
  ]);
});
