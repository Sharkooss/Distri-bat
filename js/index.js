window.addEventListener('DOMContentLoaded', function() {
        var container = document.querySelector('.container-caroussel');
        var scrollSpeed = .8; // Vitesse du défilement
        var currentPosition = 0;
        
        setInterval(function() {
          currentPosition -= scrollSpeed;
          container.style.backgroundPositionX = currentPosition + 'px';
          
          if (currentPosition <= -container.offsetWidth) {
            currentPosition = 0;
          }
        }, 1); // Interval de rafraîchissement de l'animation
      });

window.addEventListener('scroll', function() {
  var gerantelement = document.querySelector('.gerant-element');
  var gerantelementPosition = gerantelement.getBoundingClientRect().top;

  var prioritetxtgaelement = document.querySelector('.priorite-block-textGa');
  var prioritetxtdoelement = document.querySelector('.priorite-block-textDo');
  var prioritetxtPosition = prioritetxtgaelement.getBoundingClientRect().top; 

  var windowHeight = window.innerHeight;

  if (gerantelementPosition < windowHeight) {
    gerantelement.classList.add('animate');
  }

  if (prioritetxtPosition < windowHeight) {
    prioritetxtgaelement.classList.add('animate');
    prioritetxtdoelement.classList.add('animate');
  }

});
      