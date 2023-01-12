
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




const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);
