// Add class 'active' to menu
// let mainNav = document.getElementById('js-menu');
// let navBarToggle = document.getElementById('js-site-nav-toggle');

// navBarToggle.addEventListener('click', function () {
    
//     mainNav.classList.toggle('active');
// });

// Add class 'transform' to hamburger div
const ico = document.querySelector('.hamburger');
ico.addEventListener('click', function () {
    ico.classList.toggle('transform');
});

//Add class 'active' to menu
const mainNav = document.querySelector('.site-nav__list');
ico.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});