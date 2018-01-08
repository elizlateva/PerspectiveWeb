$(document).ready(function() {


    $('.nav_trigger').click(function(e) {
        $('.nav, .nav_wrapper').toggleClass('active');
        e.preventDefault();
    });


    $('.header').sticky({ topSpacing: 0 });


    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 768) { // check if user scrolled more than 50 from top of the browser window
            $(".lang, .lang a").css("color", "#b9b9b9"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".lang, .lang a").css("color", "#fff"); // if not, change it back to transparent
        }
    });

    $(".lang a").hover(function() {
        $(this).css("color", "#209ae7");

    });

    var partnersSwiper = new Swiper('.clients .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 6,
        spaceBetween: 20,
        slidesPerGroup: 1,
        autoplay: 2500,
        speed: 500,
        loop: true,
        breakpoints: {

            320: {
                slidesPerView: 1,


            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20

            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20

            },
        }
    });


});