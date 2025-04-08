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
$(document).ready(function () {
    $('.project-btn').on('click', function () {
        var target = $(this).data('target');
        $("#" + target).toggle();
        $(".project-info").not("#" + target).hide();

    });
});

// typging animation
var options = {
    strings: ["Web Designer.", "Programmer.", "Web Developer."],
    typeSpeed: 100,
    backSpeed: 25,
    startDelay: 0,
    backDelay: 1500,
    loop: true,
    showCursor: true,
};

new Typed("#typing", options);


$(document).ready(function () {
    $('.slider-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});