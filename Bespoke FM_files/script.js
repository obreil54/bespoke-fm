const body = document.body;
const burger = document.getElementById('burger');
const scrim = document.getElementById('scrim');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close')

function toggleMenu(force) {
    const open = force ?? !body.classList.contains('menu-open');
    body.classList.toggle('menu-open', open);
    scrim.hidden = mobileMenu.hidden = !open;
}

burger.addEventListener('click', () => toggleMenu());
closeMenu.addEventListener('click', () => toggleMenu(false));
