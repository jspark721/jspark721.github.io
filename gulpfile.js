const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// compile sass
gulp.task('sass', function() {
  return gulp.src(['css/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

// watch & serve
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './'
  });

  gulp.watch(['css/*.scss'], ['sass']);
  gulp.watch(['*.html']).on('change', browserSync.reload);
});

// default task

gulp.task('default', ['serve']);
