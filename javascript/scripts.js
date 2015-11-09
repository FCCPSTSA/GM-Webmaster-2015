$(window).scroll(function() {
    // Parallax effects
    var wScroll = $(window).scrollTop();
    $('.bg').css({
        'transform': 'translate(0,-' + wScroll / 2 + 'px)'
    });
    $('header').css({
        'background-color': 'rgba(100,100,100,' + wScroll/1000 + ')'
    });
});
$(document).ready(function() {
    $('h3').typed({
        strings: ['A school equipped for the future!'],
        typeSpeed: 50
    });
});
