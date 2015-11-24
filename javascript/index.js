$(document).ready(function() {
    $('h3').typed({
        strings: ['A school equipped for the future!'],
        typeSpeed: 10,
        startDelay: 2000,
        showCursor: false
    });
    $('.nav-button').click(function() {
        $('nav, .nav-button').toggleClass('open');
    });
});
$(window).scroll(function() {
    var wScroll = $(window).scrollTop();
    $('h1').css({
        'transform': 'translate(-' + wScroll * 4 + 'px,0)',
        'opacity': 1-wScroll/300
    });
    $('.jumbotron div').css({
        'transform': 'rotate(-' + wScroll/10 + 'deg)',
        'opacity': 1-wScroll/300
    });
    $('h3').css({
        'transform': 'translate(' + wScroll * 4 + 'px,0)',
        'opacity': 1-wScroll/300
    });
});
