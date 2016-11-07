
function splash() {

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

    // preloader
    $(window).on('load', function() {
        // fade out loading animation
        $("#status").fadeOut("slow");

        // fade out the whole div that covers the webpage
        $("#preloader").delay(500).fadeOut("slow").remove();
    });

    //vticker
    $(function() {
  		$('#splash-ticker').vTicker('init', {padding: 4});
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

    // word cloud
    $(window).on('load', function() {
        var words = [
        {text: "linux", weight: 13},
        {text: "robots", weight: 10.5},
        {text: "programming", weight: 9.4},
        {text: "pi", weight: 8},
        {text: "coding", weight: 6.2},
        {text: "intel", weight: 5},
        {text: "java", weight: 5},
        {text: "android", weight: 13},
        {text: "git", weight: 10.5},
        {text: "bash", weight: 9.4},
        {text: "foss", weight: 8},
        {text: "c", weight: 6.2},
        {text: "kernel", weight: 8},
        {text: "drivers", weight: 5},
        {text: "arduino", weight: 13},
        {text: "vim", weight: 10.5},
        {text: "apache", weight: 9.4},
        {text: "awesome", weight: 8},
        {text: "gnome", weight: 6.2},
        {text: "bootloader", weight: 5},
        {text: "jekyll", weight: 5},
        {text: "bootstrap", weight: 8},
        {text: "embedded", weight: 10.5},
        {text: "bash", weight: 9.4},
        {text: "math", weight: 8},
        {text: "physics", weight: 6.2},
        {text: "networks", weight: 5},
        {text: "wearables", weight: 7},
        {text: "IOT", weight: 13},
        {text: "operating systems", weight: 8},
        {text: "engineering", weight: 8},
        {text: "RTOS", weight: 8},
        {text: "gnome", weight: 5},
        {text: "WM", weight: 6},
        {text: "web", weight: 5},
      /* ... */
        ];

        $('#words').jQCloud(words, {
            width: 500,
            height: 350,
            removeOverflowing: false,
            autoResize: false,
            delay: 10,
        });
    });
}());

}

var splash_div = document.getElementById('intro');
if (splash_div != null) { splash(); }
