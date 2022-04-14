const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const data = require('gulp-data');
const connect = require('gulp-connect');
const fs = require('fs');

function buildSass() {
  let build_time = new Date().getTime();
  gulp.src('src/sass/**/*.sass')
    .pipe(data((file) => {
      console.log("[build] " + file['history']);
    }))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./static/assets/css'))
    .pipe(connect.reload());
}

function buildPug() {
  let build_time = new Date().getTime();
  gulp.src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
    .pipe(data((file) => {
      console.log("[build] " + file['history']);
      const result = {
        timestamp: build_time
      };
      return result;
    }))
    .pipe(pug({
      basedir: "src/pug/"
    }))
    .pipe(gulp.dest('./static/'))
    .pipe(connect.reload());
}

gulp.task('server', function () {
  connect.server({
    port: 3000,
    livereload: true,
    host: '::',
    root: 'static'
  })
  buildSass();
  buildPug();
  const watchSass = gulp.watch(['src/**/*.sass', 'data/*.json'], function (cb) {
    buildSass();
    cb();
  });
  const watchPug = gulp.watch(['src/**/*.pug', 'static/assets/js/*.js', 'data/*.json'], function (cb) {
    buildPug();
    cb();
  });
});