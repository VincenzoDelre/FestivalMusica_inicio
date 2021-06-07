const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require ('gulp-notify');
const webp = require ('gulp-webp')
const concat = require ('gulp-concat');
//Funcion que compila sass

const paths = {
  imagenes: 'src/img/**/*',
  scss: 'src/scss/**/*.scss',
  js:'src/js/**/*.js'
}

function css () {
  return src('src/scss/app.scss')
    .pipe( sass() )
    .pipe( dest('./build/css'))
}

function minificarcss () {
  return src('src/scss/app.scss')
    .pipe( sass({
      outputStyle:'compressed'
    }) )
    .pipe( dest('./build/css') )
}

function javascript() {
  return src(paths.js)
  .pipe( concat('bundle.js'))
  .pipe( dest('./build/js'))
}

function versionWebp() {
  return src(paths.imagenes)
  .pipe( webp() )
  .pipe( dest('./build/img'))
  .pipe( notify({message: 'Version webP lista'}));
}

function watchArchivos() {
  watch(paths.scss, css); // un * = la carpeta actual - ** = todos los archivos con esta extension
  watch(paths.js, javascript);
}


//npm install --save-dev gulp-imagemin
function imagenes () {
  return src(paths.imagenes)
  .pipe(imagemin() )
  .pipe( dest('./build/img'))
  .pipe( notify ({ message: 'Imagen Minificada'}))
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series ( css, javascript, imagenes, versionWebp, watchArchivos);
