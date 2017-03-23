var gulp = require('gulp');
var del = require('del');

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
  return del(['build'], cb);
});

