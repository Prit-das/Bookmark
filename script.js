const hamberger = document.querySelector('#hamberger');
const mobileMenu = document.querySelector('#mobileMenu');

hamberger.addEventListener('click',function () {
    hamberger.classList.toggle('open');
    //todo image change 
    mobileMenu.classList.toggle('menu-open');
})