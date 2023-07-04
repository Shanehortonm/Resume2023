
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
  document.getElementById("card-2").style.display = "none"
}
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("card-2").style.display = "contents"
}

/*
==================================================
Email link to Email.js
==================================================
*/
function sendMail(){
let params = {
  name: document.getElementById("name").value,
  email: document.getElementById("email;").value,
  number: document.getElementById("number").value,
  message: document.getElementById("message").value
  };

  const serviceID = "service_isvaefu";
const templateID = "template_bbytm0z";

emailjs.send(serviceID,templateID,params)
.then (
  res => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message sent Successfully")
  }
)
.catch((err) => console.log(err));
}

