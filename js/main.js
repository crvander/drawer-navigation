const toggleMenu = document.querySelector('.menu-toggle');
const navigationLinks = document.querySelectorAll('.nav__link');

toggleMenu.addEventListener('load', () => {
  document.body.classList.toggle('nav-open');
});

navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

