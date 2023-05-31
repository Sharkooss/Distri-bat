window.addEventListener('DOMContentLoaded', function() {
    var navInfo = document.querySelector('.nav-info');
    var navLogo = document.querySelector('.nav-logo img');
    var navMenu = document.querySelector('.nav-menu');

    var isAtTop = true;
    var logoText = document.createElement('span');
    logoText.classList.add('logo-text');
    logoText.textContent = 'DISTRI-BAT';

    function handleScroll() {
        if (window.pageYOffset > 0 && isAtTop) {
            isAtTop = false;

            navInfo.classList.add('scrolled-info');
            // navLogo.style.display = 'none';
            navInfo.appendChild(logoText);
            navMenu.classList.add('scrolled-menu');
        } else if (window.pageYOffset === 0 && !isAtTop) {
            isAtTop = true;

            navInfo.classList.remove('scrolled-info');
            navLogo.style.display = 'block';
            navInfo.removeChild(logoText);
            navMenu.classList.remove('scrolled-menu');
        }
    }

    window.addEventListener('scroll', handleScroll);
});
