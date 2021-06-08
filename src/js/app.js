document.addEventListener('DOMContentLoaded', function() {
  scrollNav();

  navegacionfija();
});

function navegacionfija() {

  //Registrar el elemento observer
  const observer = new IntersectionObserver ( function (entries) {

    const barra = document.querySelector('.header');

    if(entries[0].isIntersecting) {
        barra.classList.remove('fijo');
    } else {
        barra.classList.add('fijo');
    }

  });

  //Elemento a observar
  observer.observe(document.querySelector('.sobre-festival'));
}


function scrollNav() {
  const enlaces = document.querySelectorAll('.navegacion-principal a');

  enlaces.forEach( function( enlace) { //diferencia entre map y foreach
    enlace.addEventListener('click', function(e) {
      e.preventDefault();

      const seccion = document.querySelector(e.target.attributes.href.value);
      seccion.scrollIntoView({
        behavior:'smooth'
      });
    });
  });
}
