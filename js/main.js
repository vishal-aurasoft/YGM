(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
       
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);

document.getElementById("year").innerHTML = new Date().getFullYear();
function calldata() {
    var name = document.getElementById("username").value;
    var contact = document.getElementById("contactno").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var course = document.getElementById("course").value;
    var city = document.getElementById("city").value;
    
    Email.send({
        SecureToken: "321d13fd-4104-4be9-a0ad-1929fd9c577f",
        To: 'vishal.aurasoft@gmail.com',
        From: "websiteygm@gmail.com",
        Subject: "mail from contact form",
        Body: "Name :- " + name + "<br/>Contact :- " + contact + "<br/>Email :- " + email + "<br/>Country :- " + country + "<br/>Course :- " + course + "<br/>City :- " + city
    }).then(
        // message => alert(message)
    );

}

$(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({

        autoplay: true,
        rewind: false,
        loop: true,
        margin: 20,

        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        nav: true,
        responsive: {
            0: {
                items: 1
            },

            1024: {
                items: 2
            }
        }
    });
});
$('.owl-carousel-service').owlCarousel({
    autoplay: true,
    rewind: false,
    loop: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        1024: {
            items: 4
        }
    }
})

$('.owl-carousel-achivers').owlCarousel({
    autoplay: true,
    rewind: false,
    loop: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    loop: true,
    dots: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        426: {
            items: 1
        }
        ,
        768: { items: 3 }
        ,
        1024: {
            items: 4
        }
    }
})

AOS.init();




