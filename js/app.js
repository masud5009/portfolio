const header = document.querySelector('#site-header');
const menu = document.querySelector('#mobile-menu');
const menuToggle = document.querySelector('#menu-toggle');
const menuClose = document.querySelector('#menu-close');
const menuBackdrop = document.querySelector('#mobile-menu-backdrop');
const mobileLinks = document.querySelectorAll('.mobile-nav-anchor');
const preloader = document.querySelector('#page-preloader');
const body = document.body;
let preloaderDismissed = false;

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

const dismissPreloader = () => {
    if (!body || preloaderDismissed) {
        body?.classList.remove('preloading');
        return;
    }

    preloaderDismissed = true;
    body.classList.remove('preloading');

    if (!preloader) return;

    preloader.classList.add('is-hidden');

    window.setTimeout(() => {
        preloader.remove();
    }, 900);
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

if (document.readyState === 'complete') {
    window.setTimeout(dismissPreloader, 320);
} else {
    window.addEventListener('load', () => {
        window.setTimeout(dismissPreloader, 320);
    }, { once: true });

    window.setTimeout(dismissPreloader, 3600);
}

window.addEventListener('pageshow', () => {
    dismissPreloader();
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
