// Récupérer les éléments nécessaires
const carouselPrevs = document.querySelectorAll(".carousel-prev");
const carouselNexts = document.querySelectorAll(".carousel-next");
const slides = document.querySelectorAll(".slides");
const slideWidths = [500, 500, 1000, 1000]; // Largeurs des slides en pixels
let currentPosition = [0, 0, 0, 0]; // Positions courantes des carrousels
let autoSlideIntervals = [null, null, null, null]; // Intervals pour le défilement automatique

// Fonction pour le défilement vers la gauche
function slideToLeft(index) {
  currentPosition[index] += slideWidths[index];
  if (currentPosition[index] > 0) {
    currentPosition[index] = -(slideWidths[index] * (slides[index].childElementCount - 1));
  }
  slides[index].style.transform = `translateX(${currentPosition[index]}px)`;
  resetAutoSlideTimer(index);
}

// Fonction pour le défilement vers la droite
function slideToRight(index) {
  currentPosition[index] -= slideWidths[index];
  if (currentPosition[index] < -(slideWidths[index] * (slides[index].childElementCount - 1))) {
    currentPosition[index] = 0;
  }
  slides[index].style.transform = `translateX(${currentPosition[index]}px)`;
  resetAutoSlideTimer(index);
}

// Fonction pour réinitialiser le timer de défilement automatique
function resetAutoSlideTimer(index) {
  clearInterval(autoSlideIntervals[index]);
  autoSlideIntervals[index] = setInterval(() => {
    slideToRight(index);
  }, 5000);
}

// Définir les écouteurs d'événements pour les flèches de navigation
carouselPrevs.forEach((prev, index) => {
  prev.addEventListener("click", () => {
    slideToLeft(index);
  });
});

carouselNexts.forEach((next, index) => {
  next.addEventListener("click", () => {
    slideToRight(index);
  });
});

// Fonction pour le défilement automatique toutes les 3 secondes
function autoSlide(index) {
  autoSlideIntervals[index] = setInterval(() => {
    slideToRight(index);
  }, 5000);
}

// Déclencher le défilement automatique pour chaque carrousel
carouselNexts.forEach((next, index) => {
  autoSlide(index);
});






document.addEventListener("DOMContentLoaded", function() {
  var titles = document.querySelectorAll(".scroll-title");

  function handleScroll() {
    titles.forEach(function(title) {
      var bounding = title.getBoundingClientRect();
      if (bounding.top <= window.innerHeight * 0.8 && bounding.bottom >= window.innerHeight * 0.2) {
        title.classList.add("active");
      } else {
        title.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
});
