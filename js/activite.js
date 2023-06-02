document.addEventListener('DOMContentLoaded', function() {
    new simpleParallax(document.querySelectorAll('.parallaximg'), {
      scale: 1.5, // Réglez le facteur d'échelle pour l'effet de parallaxe (1.0 = pas de parallaxe, >1.0 = effet de parallaxe)
      orientation: 'up', // Réglez l'orientation du mouvement ('up', 'down', 'left', 'right')
      delay: 0.2, // Réglez le délai avant que l'effet de parallaxe ne se déclenche (en secondes)
      transition: 'cubic-bezier(0,0,0,1)' // Réglez la fonction de transition CSS pour l'animation
    });
  });