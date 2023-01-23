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

// Accordion Skills
const skillsContent = document.getElementsByClassName('skills-content'),
  skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills-content skills-close';
  }

  if (itemClass === 'skills-content skills-close') {
    this.parentNode.className = 'skills-content skills-open';
  }
}
skillsHeader.forEach((element) => {
  element.addEventListener('click', toggleSkills);
});
