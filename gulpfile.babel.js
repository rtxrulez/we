'use strict';

import gulp from 'gulp';

const requireDir = require('require-dir');

const paths = {
  views: {
    src: ['./src/views/**/*.html', './src/views/pages/*.html'],
    dist: './dist/',
    watch: ['./src/blocks/**/*.html', './src/views/**/*.html'],
  },
  styles: {
    src: './src/styles/app.{scss,sass,css}',
    dist: './dist/styles/',
    watch: ['./src/blocks/**/*.{scss,sass}', './src/styles/**/*.{scss,sass}'],
  },
  scripts: {
    src: './src/js/index.js',
    dist: './dist/js/',
    watch: ['./src/blocks/**/*.js', './src/js/**/*.js'],
  },
  images: {
    src: [
      './src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}',
      '!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
    ],
    dist: './dist/img/',
    watch: './src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}',
  },
  fonts: {
    src: './src/fonts/**/*.{woff,woff2}',
    dist: './dist/fonts/',
    watch: './src/fonts/**/*.{woff,woff2}',
  },
  libs: {
    src: './src/libs/**/*',
    dist: './dist/libs/',
    watch: './src/libs/**/*',
  },
  favicons: {
    src: './src/img/favicon/favicon.png',
    dist: './dist/img/favicons/',
    data: './dist/img/favicons/data.json',
  },
  gzip: {
    src: './src/.htaccess',
    dist: './dist/',
  },
  deploy: {
    src: './dist/**/*',
  },
};

requireDir('./gulp-tasks/');

export { paths };

export const development = gulp.series(
  'clean',
  'views',
  gulp.parallel(['styles', 'scripts', 'images', 'webp', 'fonts', 'favicons', 'libs']),
  gulp.parallel('serve'),
);

export const prod = gulp.series(
  'clean',
  'views',
  gulp.parallel(['styles', 'scripts', 'images', 'webp', 'fonts', 'favicons', 'libs', 'gzip']),
);

export default development;
