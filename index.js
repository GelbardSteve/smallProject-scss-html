const hamMenu = document.querySelector('.ham');
const navMenu = document.querySelector('.nav-menu-close');

hamMenu.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-close')
});