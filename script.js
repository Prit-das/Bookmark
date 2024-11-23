// Mobile Menu
const hamberger = document.querySelector('#hamberger');
const mobileMenu = document.querySelector('#mobileMenu');

hamberger.addEventListener('click',function () {
    hamberger.classList.toggle('open');
    //todo image change 
    mobileMenu.classList.toggle('menu-open');
})

// Tabs & Panels Configeration
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

// Applying event-listner for all the tabs
tabs.forEach((tab) => {
    tab.addEventListener('click', onTabClick);
})

// Fuction for the event-listner
function onTabClick(e) {
    // Deactivated all tabs
    tabs.forEach((tab) => {
        tab.children[0].classList.remove('border-b-4','border-softRed');
    })
    // Deactivated all panels
    panels.forEach((panel) => {
        panel.children[0].classList.add('hidden');
    })
    // Activate a new tab and panel based on the panel
    e.target.classList.add('border-b-4','border-softRed')
    // Activate the panel based on tab
    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.toggle('hidden');
}
