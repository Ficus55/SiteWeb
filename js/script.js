
$('.header__burger').on('click', function (e) {
    $('.header__menu,.header__phone').toggleClass("show"); //show menu items
    e.preventDefault();
    $('body').toggleClass("lock"); //disable global scroll if menu is opened
    e.preventDefault();
    $('.header__body').toggleClass("header__body__scroll"); //enable scroll for menu
    e.preventDefault();

    $(this).toggleClass("header__burger__active"); //burger button animation on
    e.preventDefault();
});

$('.header__list a').on('click', function (e) {
    setTimeout(function () {
        $('.header__menu,.header__phone').removeClass("show"); //hide menu items
        e.preventDefault();
        $('body').removeClass("lock"); //enable global scroll if menu was closed 
        e.preventDefault();
        $('.header__body').removeClass("header__body__scroll"); //disable scroll for menu
        e.preventDefault();

        $('.header__burger__active').removeClass("header__burger__active"); //burger button animation off
        e.preventDefault();
    }, 200);
});


const configHome = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 10,
    autoplay:5200
};

const configCourses = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 10,
    autoplay:5200,
    breakpoints: {
        768: {
            perView: 1
        },
        1024: {
            perView: 2
        }
    }
};

const configReviews = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 10,
    autoplay:5200,
    breakpoints: {
        768: {
            perView: 1
        },
        1024: {
            perView: 2
        }
    }
};

new Glide('.glide_reviews', configReviews).mount()

new Glide('.glide_courses', configCourses).mount()

new Glide('.glide_home', configHome).mount()


$(window).scroll(function () {
    var position = $(this).scrollTop();

    $('.section').each(function () {
        var target = $(this).offset().top - 30;
        var id = $(this).attr('id');

        if (position >= target) {
            $('.header__link').removeClass('active');
            $('.header__link[href=\\#' + id + ']').addClass('active');
        }
    });
});


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


