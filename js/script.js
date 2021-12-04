

// responsive navbar script 

const menuButton = document.getElementsByClassName('menu')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const serviceButton = document.getElementById('serviceButton')
const contactButton = document.getElementById('contactButton')


menuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
serviceButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
contactButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
