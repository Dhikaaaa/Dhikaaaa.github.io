// Menu Show Y Hidden
const navMenu = document.getElementById('nav-menu'),
  navToogle = document.getElementById('nav-toogle'),
  navClose = document.getElementById('nav-close');

//* Menu Show Validate if Constant Exist */
if (navToogle) {
  navToogle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

//* Menu Hidden Validate if Constant Exist */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));
