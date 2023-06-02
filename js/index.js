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