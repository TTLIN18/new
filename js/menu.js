/*Este script hace que el menu siga en el top cuando hagamos scroll y tambien se reescalará */
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    nav.classList.toggle('active', window.scrollY > 0);
});
