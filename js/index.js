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
  
  var windowHeight = window.innerHeight;

  var prioritetxtgaelement = document.querySelector('.priorite-block-textGa');
  var prioritetxtdoelement = document.querySelector('.priorite-block-textDo');
  var prioritetxtPosition = prioritetxtgaelement.getBoundingClientRect().top; 

  if (prioritetxtPosition < windowHeight) {
      prioritetxtgaelement.classList.add('animate');
      prioritetxtdoelement.classList.add('animate');
    }

  var blockGrisList = document.querySelectorAll('.block-gris');

  blockGrisList.forEach(function(blockGris) {
      var blockGrisPosition = blockGris.getBoundingClientRect().top;

      if (blockGrisPosition < windowHeight) {
        blockGris.classList.add('animate');
      }
    });

  var gerantelement = document.querySelector('.gerant-element');
  var gerantelementPosition = gerantelement.getBoundingClientRect().top;
  
  if (gerantelementPosition < windowHeight) {
    gerantelement.classList.add('animate');
  }

  var presentationTexte1 = document.querySelector('.presentation-texte1');
  var presentationTexte2 = document.querySelector('.presentation-texte2');
  var windowHeight = window.innerHeight;

  var presentationTexte1Position = presentationTexte1.getBoundingClientRect().top;
  var presentationTexte2Position = presentationTexte2.getBoundingClientRect().top;

  if (presentationTexte1Position < windowHeight) {
    presentationTexte1.classList.add('animate');
  }

  if (presentationTexte2Position < windowHeight) {
    presentationTexte2.classList.add('animate');
  }

  var presentationBouttonDevis = document.querySelector('.presentation-boutton-devis');

  var presentationBouttonDevisPosition = presentationBouttonDevis.getBoundingClientRect().top;

  if (presentationBouttonDevisPosition < windowHeight) {
    presentationBouttonDevis.classList.add('animate');
  }

  var prioriteTitle = document.querySelector('.priorite-title');
  var prioriteTitlePosition = prioriteTitle.getBoundingClientRect().top;

  if (prioriteTitlePosition < windowHeight) {
    prioriteTitle.classList.add('animate');
  }

  var gerantTitre = document.querySelector('.gerant-title');
  var gerantTitrePosition = gerantTitre.getBoundingClientRect().top;

  if (gerantTitrePosition < windowHeight) {
    gerantTitre.classList.add('animate');
  }

  
});




      