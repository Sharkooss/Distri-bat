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
