$(document).ready(function() {

    $('.nav_trigger').click(function(e) {
        $('.nav, .nav_wrapper').toggleClass('active');
        e.preventDefault();
    });

    $('.header').sticky({ topSpacing: 0 });

    $('.scroll_down').on('click', function() {

        var scrollTopOffset = $(this).parents('section').next().offset().top;

        if (!$(this).hasClass('white')) {
            // remove the height of the fixed header which is 91 px
            scrollTopOffset = scrollTopOffset - 91;
        }

        $('html,body').animate({ scrollTop: scrollTopOffset }, 400);
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
                slidesPerView: 2,
                spaceBetween: 20


            },
            480: {
                slidesPerView: 3,
                spaceBetween: 20

            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20

            },
        }
    });

});