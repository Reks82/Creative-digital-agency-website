'use strict';

const { series, src, dest, watch } = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let browserSync = require('browser-sync').create();

function scss() {
  return src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'))
    .pipe(browserSync.stream());
};

function main() {
  browserSync.init({
    server: "./"
  });

  watch('./scss/**/*.scss', scss);
  watch("./*.html").on('change', browserSync.reload);
};

exports.default = main;