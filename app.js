
/*
==================================================
Hamburger Menu
==================================================
*/

const menu = document.querySelector('#mobile-nav');
const menuLinks = document.querySelector('.navbar-menu');

const hamburgerMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', hamburgerMenu);