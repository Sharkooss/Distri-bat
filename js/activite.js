document.addEventListener('DOMContentLoaded', function() {
    new simpleParallax(document.querySelectorAll('.parallaximg'), {
      scale: 1.5, // Correspond au zoom dans notre image pour l'effet
      orientation: 'up', // l'orientation du mouvement
      delay: 0.2, // delai avant que l'effet de parallaxe ne se déclenche 
      transition: 'cubic-bezier(0,0,0,1)' // transition CSS pour l'animation
    });
  });