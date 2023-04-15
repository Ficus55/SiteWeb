
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
    autoplay: 5200
};

const configCourses = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 10,
    autoplay: 5200,
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
    autoplay: 5200,
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


//Form validation

function checkLogin(input) {
    return !/^([A-Za-z]+([ -_]?[A-Za-z0-9])*){3,15}$/.test(input.value);
}

function checkEmail(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

function checkPassword(input) {
    return !/^((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{8,17})$/.test(input.value);
}


//Remove warning message
document.addEventListener("input", function (event) {
    if (event.target.nextElementSibling.closest(".error")) {
        event.target.nextElementSibling.closest(".error").remove();
    }
});



//Remove warning message for each of 7 input fields
// let inputFields = document.querySelectorAll(".input-field");

// inputFields.forEach ((element) => {
//     element.addEventListener("input", removeWarningMessage);
// });

// function removeWarningMessage(event) {
//     if (event.target.nextElementSibling.closest(".error")) {
//         event.target.nextElementSibling.closest(".error").remove();
//     }
// }


//About form
let signupForm = document.forms.signup;
let signupName = signupForm.name;
let signupEmail = signupForm.email;
let signupPassword = signupForm.password;


signupForm.addEventListener("submit", function (event) {
    let errors = document.querySelectorAll(".signup .error");
    errors.forEach ((element) => {
        element.remove();
    });
    if (checkLogin(signupName)) {
        if (!signupName.nextElementSibling.closest(".error")) {
            signupName.insertAdjacentHTML('afterend', `<div class="error">Enter valid name please! <div>First symbol should be letter</div><div>Length from 3 to 15 symbols</div></div>`);
        }
        event.preventDefault();
    }else if (checkEmail(signupEmail)) {
        if (!signupEmail.nextElementSibling.closest(".error")) {
            signupEmail.insertAdjacentHTML('afterend', `<div class="error">Enter valid email please! <div>Example: email-name@domain.name</div></div>`);
        }
        event.preventDefault();
    }else if (checkPassword(signupPassword)) {
        if (!signupPassword.nextElementSibling.closest(".error")) {
            signupPassword.insertAdjacentHTML('afterend', `<div class="error">Enter valid password please! <ul>
            <li>Password may contain:</li>
            <li>at least one digit from 0-9</li>
            <li>at least one uppercase character</li>
            <li>at least one lowercase character</li>
            <li>at least one special character</li>
            <li>length from 8 to 17 characters</li>
        </ul></div>`);
        }
        event.preventDefault();
    }
});


//Contact form
let contactForm = document.forms.contact;
let contactName = contactForm.name;
let contactEmail = contactForm.email;
let contactMessage = contactForm.message;
let contactMessageSymbolsLeft = contactMessage.getAttribute("maxlength");
let symbolsCounter = document.querySelector(".form-control-message-counter span");

symbolsCounter.innerHTML = contactMessageSymbolsLeft;
contactMessage.addEventListener("input", function () {
    symbolsCounter.innerHTML = contactMessageSymbolsLeft - contactMessage.value.length;
});

contactForm.addEventListener("submit", function (event) {
    if (checkLogin(contactName)) {
        if (!contactName.nextElementSibling.closest(".error")) {
            contactName.insertAdjacentHTML('afterend', `<div class="error">Enter valid name please! <div>First symbol should be letter</div><div>Length from 3 to 15 symbols</div></div>`);
        }
        event.preventDefault();
    }
    if (checkEmail(contactEmail)) {
        if (!contactEmail.nextElementSibling.closest(".error")) {
            contactEmail.insertAdjacentHTML('afterend', `<div class="error">Enter valid email please! <div>Example: email-name@domain.name</div></div>`);
        }
        event.preventDefault();
    }
    if (contactMessage.value.length <= 20) {
        if (!contactMessage.nextElementSibling.closest(".error")) {
            contactMessage.insertAdjacentHTML('afterend', `<div class="error">Message should be more than 20 symbols</div>`);
        }
        event.preventDefault();
    }
});


//Newsletter form
let newsletterForm = document.forms.newsletter;
let newsletterEmail = newsletterForm.email;

newsletterForm.addEventListener("submit", function (event) {
    if (checkEmail(newsletterEmail)) {
        if (!newsletterEmail.nextElementSibling.closest(".error")) {
            newsletterEmail.insertAdjacentHTML('afterend', `<div class="error">Enter valid email please! <div>Example: email-name@domain.name</div></div>`);
        }
        event.preventDefault();
    }
});


//Copyright year
let year = new Date().getFullYear();
let copyrightYear = document.querySelector(".copyright-year").innerHTML = year;








































