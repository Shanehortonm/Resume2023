
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



/*
==================================================
Email PopUp
==================================================
*/

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

/*
==================================================
Email link to Email.js
==================================================
*/

let sendBtn = document.getElementById('sendBtn');
const form = document.getElementById('form');

sendBtn.addEventListener('click', function(e) {
	e.preventDefault();

	sendBtn.value = 'Sending...';

	const serviceID = 'default_service';
  const templateID = 'template_94od5g2';

  emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      sendBtn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      sendBtn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
})