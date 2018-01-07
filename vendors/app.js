$(document).ready(function() {

    $('.nav_trigger').click(function(e) {
        $('.nav, .nav_wrapper').toggleClass('active');
        e.preventDefault();
    });


    $('.header').sticky({ topSpacing: 0 });

});