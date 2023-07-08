
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

/*
==================================================
Email PopUp
==================================================
*/

function openForm() {
  document.getElementById("myForm").style.display = "flex";
  document.getElementById("card-2").style.display = "none";
}
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("card-2").style.display = "contents";
  document.getElementById("form").reset();
}

/*
==================================================
Email link to Email.js
==================================================
*/

const btn = document.getElementById('emailBtn');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'service_isvaefu';
  const templateID = 'template_bbytm0z';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      clearForm(); // Call the clearForm function after successful submission
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

function clearForm() {
  // Get a reference to the form element
  let form = document.getElementById("form");

  // Reset the form
  form.reset();
}