// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const backTop = document.querySelector('#back-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        backTop.classList.remove('hidden');
        backTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        backTop.classList.remove('flex');
        backTop.classList.add('hidden');
     }
}

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// klik diluar hamburger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

//Dark Mode Toggle
const darkTonggel = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkTonggel.addEventListener('click', function() {
    if (darkTonggel.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//Pindah posisi toggle sesuai mode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkTonggel.checked = true;
} else {
    darkTonggel.checked = false
}