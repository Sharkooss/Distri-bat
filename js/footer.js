let togg1 = document.getElementById("footercontact");
let togg2 = document.getElementById("footerlocaux");
let togg3 = document.getElementById("footerdevis");
let d1 = document.getElementById("menufootercontact");
let d2 = document.getElementById("menufooterlocaux");
let d3 = document.getElementById("menufooterdevis");

togg1.addEventListener("click", () => {
    if(getComputedStyle(d1).display != "none"){
      d1.style.display = "none";
    } else {
      d1.style.display = "block";
    }
  })

  function togg(){
    if(getComputedStyle(d2).display != "none"){
      d2.style.display = "none";
    } else {
      d2.style.display = "block";
    }
  };

  togg2.onclick = togg;

  togg3.onclick = togg;
