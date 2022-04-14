const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const data = require('gulp-data');
const connect = require('gulp-connect');
const fs = require('fs');

function build() {  
  let build_time = new Date().getTime();
  gulp.src('src/sass/**/*.sass')
  .pipe(data((file) => {
    console.log("[build] "+file['history']);
  }))
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest('./static/assets/css'));

  gulp.src(['src/pug/**/*.pug','!src/pug/**/_*.pug'])
  .pipe(data((file) => {
    console.log("[build] "+file['history']);
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
    build();

    gulp.watch(['src/**/*.pug', 'src/**/*.sass', 'static/assets/js/*.js', 'data/*.json'], function(event){
      build();
      event();
    });
});