const header = document.querySelector('#site-header');
const menu = document.querySelector('#mobile-menu');
const menuToggle = document.querySelector('#menu-toggle');
const menuClose = document.querySelector('#menu-close');
const menuBackdrop = document.querySelector('#mobile-menu-backdrop');
const mobileLinks = document.querySelectorAll('.mobile-nav-anchor');
const body = document.body;

const syncHeaderState = () => {
    if (!header) return;
    header.classList.toggle('header-scrolled', window.scrollY > 24);
};

const openMenu = () => {
    if (!menu || !menuToggle) return;
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    body.classList.add('mobile-menu-open');
};

const closeMenu = () => {
    if (!menu || !menuToggle) return;
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('mobile-menu-open');
};

window.addEventListener('scroll', syncHeaderState, { passive: true });
syncHeaderState();

menuToggle?.addEventListener('click', openMenu);
menuClose?.addEventListener('click', closeMenu);
menuBackdrop?.addEventListener('click', closeMenu);

mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu();
    }
});

if (typeof Typed !== 'undefined' && document.querySelector('#typing')) {
    new Typed('#typing', {
        strings: ['Web Developer.', 'Laravel Engineer.', 'Problem Solver.'],
        typeSpeed: 90,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true
    });
}

if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 700,
        once: true,
        offset: 40
    });
}
