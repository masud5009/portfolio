

// navbar scrolled js
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});



// project showing js
var welcome = document.querySelector('#welcome');
var blog = document.querySelector('#blog');
var pos = document.querySelector('#pos');
var ecom = document.querySelector('#ecom');

function showBlog() {
    blog.style.display = 'block';
    pos.style.display = 'none';
    ecom.style.display = 'none';
    welcome.style.display = 'none';
}
function showPos() {
    pos.style.display = 'block';
    blog.style.display = 'none';
    ecom.style.display = 'none';
    welcome.style.display = 'none';
}
function showEcom() {
    ecom.style.display = 'block';
    blog.style.display = 'none';
    pos.style.display = 'none';
    welcome.style.display = 'none';
}



