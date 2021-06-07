const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require ('gulp-notify');

//Funcion que compila sass

function css () {
  return src('src/scss/app.scss')
    .pipe( sass() )
    .pipe( dest('./build/css') )
}

function minificarcss () {
  return src('src/scss/app.scss')
    .pipe( sass({
      outputStyle:'compressed'
    }) )
    .pipe( dest('./build/css') )
}

function watchArchivos() {
  watch('src/scss/**/*.scss', css); // un * = la carpeta actual - ** = todos los archivos con esta extension
}


//npm install --save-dev gulp-imagemin
function imagenes () {
  return src('src/img/**/*')
  .pipe(imagemin() )
  .pipe( dest('./build/img'))
  .pipe( notify ({ message: 'Imagen Minificada'}))
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series ( css, imagenes, watchArchivos);
