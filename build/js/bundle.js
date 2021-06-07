console.log('LISTO');

document.addEventListener('DOMContentLoaded', function() {
  crearGaleria();
});

function crearGaleria() {
  const galeria = document.querySelector('.galeria-imagenes');

  for( let  i=1; i<=12; i++) {
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/thumb/${i}.webp`;
    imagen.dataset.imagenId = i;

    // Anadir la funcion de mostrar imagen
    imagen.onclick = mostrarImagen;

    const lista = document.createElement('LI');
    lista.appendChild(imagen);

    galeria.appendChild(lista);
  }
}

function mostrarImagen(e) {

  const id = parseInt (e.target.dataset.imagenId)
  const imagen = document.createElement('IMG')
  imagen.src = `build/img/grande/${id}.webp`;

  const overlay = document.createElement('DIV')
  overlay.appendChild(imagen);
  overlay.classList.add('overlay');

  //Cuando se da click, cerrar la imagene
  overlay.onclick = function() {
    overlay.remove();
  }

  //boton para cerrar imagenes
  const cerrarImagen = document.createElement('P');
  cerrarImagen.textContent = 'X';
  cerrarImagen.classList.add('btn-cerrar');

  // Cuando se presiona, se cierra la imagenes
  cerrarImagen.onclick = function () {
    overlay.remove();
  }

  overlay.appendChild(cerrarImagen);

  //Mostrarlo en el html
  const body = document.querySelector('body');
  body.appendChild(overlay);
  body.classList.add('fijar-body');
}
