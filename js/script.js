const slide = ["/photo/entreprise/car-1.jpg","/photo/entreprise/car-2.jpg","/photo/entreprise/car-3.jpg","/photo/entreprise/car-4.jpg","/photo/entreprise/car-5.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 2000);