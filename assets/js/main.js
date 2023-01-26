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

// Qualification Tabs
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification-active');
    });
    target.classList.add('qualification-active');

    tabs.forEach((tab) => {
      tab.classList.remove('qualification-active');
    });
    tab.classList.add('qualification-active');
  });
});

// Services Modal
const modalViews = document.querySelectorAll('.services-modal'),
  modalBtns = document.querySelectorAll('.services-button'),
  modalCloses = document.querySelectorAll('.services-modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});

// Portfolio Swiper
let swiperPortfolio = new Swiper('.portfolio-container', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

// Testimonial Swiper
let swiperTestimonial = new Swiper('.testimonial-container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    console.log(sectionId);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById('header');
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
