var counter = 1;
var intervalId;

function startSlider() {
  intervalId = setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 5000);
}

function resetSlider(index) {
  clearInterval(intervalId);
  counter = index;
  startSlider();
}

var radios = document.querySelectorAll('input[type="radio"]');
for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function() {
    var index = parseInt(this.id.replace('radio', ''));
    resetSlider(index);
  });
}

// caroussel droite

var counter = 5;
var intervalId;

function startSlider() {
  intervalId = setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 9){
      counter = 5;
    }
  }, 5000);
}

function resetSlider(index) {
  clearInterval(intervalId);
  counter = index;
  startSlider();
}

var radios = document.querySelectorAll('input[type="radio"]');
for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function() {
    var index = parseInt(this.id.replace('radio', ''));
    resetSlider(index);
  });
}

var counter = 0;
var intervalId;

function startSlider() {
  intervalId = setInterval(function() {
    var radioId = 'radio' + (counter % 4 + 9);
    document.getElementById(radioId).checked = true;
    counter++;
  }, 5000);
}

function resetSlider(index) {
  clearInterval(intervalId);
  counter = index;
  startSlider();
}

var radios = document.querySelectorAll('input[type="radio"]');
for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function() {
    var index = parseInt(this.id.replace('radio', ''));
    resetSlider(index);
  });
}

startSlider();


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




