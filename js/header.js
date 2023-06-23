window.addEventListener('DOMContentLoaded', function() {
  var navInfo = document.querySelector('.nav-info');
  var navLogo = document.querySelector('.nav-logo img');
  var navMenu = document.querySelector('.nav-menu');

  var isAtTop = true;
  var logoText = document.createElement('span');
  logoText.classList.add('logo-text');
  logoText.textContent = 'DISTRI-BAT';
  logoText.href = '/index.php';

  function handleScroll() {
    if ((window.pageYOffset > 0 && isAtTop) || window.innerWidth < 1501) {
      isAtTop = false;

      navInfo.classList.add('scrolled-info');
      navInfo.appendChild(logoText);
      navMenu.classList.add('scrolled-menu');
    } else if (window.pageYOffset === 0 && !isAtTop && window.innerWidth >= 1500) {
      isAtTop = true;

      navInfo.classList.remove('scrolled-info');
      navInfo.removeChild(logoText);
      navMenu.classList.remove('scrolled-menu');
    }
  }

  // Vérifier la taille de l'écran lors du chargement de la page
  if (window.innerWidth < 1500) {
    navInfo.classList.add('scrolled-info');
    navInfo.appendChild(logoText);
    navMenu.classList.add('scrolled-menu');
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
});




document.addEventListener('DOMContentLoaded', function() {
    var navToggler = document.querySelector('.nav-toggler');
    var navInf0 = document.querySelector('.nav-info');
    
    // Fonction pour vérifier si la classe "toggled" est active et la supprimer
    function removeToggledClass() {
      if (navToggler.classList.contains('toggled')) {
        navToggler.classList.remove('toggled');
        navInf0.classList.remove('toggled');
      }
    }
  
    navToggler.addEventListener('click', function() {
      navToggler.classList.toggle('toggled');
      navInf0.classList.toggle('toggled');
    });
  
    // Écouteur d'événement pour détecter le scroll
    window.addEventListener('scroll', removeToggledClass);
  });
  

document.addEventListener("DOMContentLoaded", function() {
  // Récupérer le chemin de la page actuelle
  var path = window.location.pathname;

  // Sélectionner tous les liens dans la barre de navigation
  var navLinks = document.querySelectorAll(".nav-menu a");

  // Parcourir tous les liens et ajouter la classe "blue" à celui correspondant au chemin de la page
  for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];

    // Vérifier si le chemin de la page correspond à l'attribut "href" du lien
    if (link.getAttribute("href") === path) {
      link.classList.add("blue");
      break; // Arrêter la boucle après avoir trouvé le lien correspondant
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var navInfo = document.querySelector(".nav-info");

  // Ajouter la classe "animation-enabled" après un délai de 1 seconde
  setTimeout(function() {
    navInfo.classList.add("animation-enabled");
  }, 1000);
});



