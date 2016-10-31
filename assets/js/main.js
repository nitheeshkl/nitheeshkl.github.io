
function main() {

(function () {
    'use strict';

    // hide .navbar first
    $(".navbar").hide();

    // fade in navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we fade in navbar
            if ($(this).scrollTop() > 200) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

    // page scroll
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                return false;
            }
        }
    });

    // show menu on book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    // jQuery parallax
    function initParallax() {
        $('#intro').parallax("100%", 0.3);
    }

    initParallax();
}());

}
main();
