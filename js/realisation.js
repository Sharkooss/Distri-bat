var counter = 0;
var intervalId;

function startSlider() {
  intervalId = setInterval(function() {
    var radioId = 'radio' + (counter % radios.length);
    radios[counter % radios.length].checked = true;
    counter++;
  }, 5000);
}

function resetSlider(index) {
  clearInterval(intervalId);
  counter = index;
  startSlider();
}

var radios = document.querySelectorAll('input[type="radio"]');
startSlider();

for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function() {
    var index = Array.from(radios).indexOf(this);
    resetSlider(index);
  });
}



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
