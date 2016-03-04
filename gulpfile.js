var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('./src/jade/**/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public/views'));
});

gulp.task('nodemon', function () {
  nodemon({
    script: './server/server.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('watch', function(){
  gulp.watch('./src/jade/**/*.jade',['jade']);
  gulp.watch('./src/sass/**/*.scss',['sass']);
});

gulp.task('default', ['nodemon','watch']);
