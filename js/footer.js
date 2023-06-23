const menufootercontact = document.getElementById('menufootercontact');
const overflowContact = document.querySelector('.overflow-contact');

const menufooterlocaux = document.getElementById('menufooterlocaux');
const overflowlocaux = document.querySelector('.overflow-locaux');

const menufooterdevis = document.getElementById('menufooterdevis');
const overflowdevis = document.querySelector('.overflow-devis');
let timeoutId;

function resetOverflow() {
  overflowContact.style.overflow = 'hidden';
  overflowlocaux.style.overflow = 'hidden';
  overflowdevis.style.overflow = 'hidden';
}

menufootercontact.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
  overflowContact.style.overflow = 'visible';
});

menufootercontact.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(() => {
    overflowContact.style.overflow = 'hidden';
    resetOverflow();
  }, 300);
});

menufooterlocaux.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
  overflowlocaux.style.overflow = 'visible';
});

menufooterlocaux.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(() => {
    overflowlocaux.style.overflow = 'hidden';
    resetOverflow();
  }, 300);
});

menufooterdevis.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
  overflowdevis.style.overflow = 'visible';
});

menufooterdevis.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(() => {
    overflowdevis.style.overflow = 'hidden';
    resetOverflow();
  }, 300);
});


window.addEventListener('DOMContentLoaded', function() {
  var emailAddress = 'distribatsinistres@gmail.com'; // Adresse e-mail

  var mailElement = document.querySelector('.footer-contact-mail');

  // Clic sur l'adresse e-mail
  mailElement.addEventListener('click', function() {
    window.location.href = 'mailto:' + emailAddress;
  });
});


function redirectToCGU() {
  window.location.href = 'CGU.php';
}


