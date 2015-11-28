$(window).scroll(function () {
	// Parallax effects
	var wScroll = $(window).scrollTop();
	$('.bg').css({
		'transform': 'translate(0,-' + wScroll / 2 + 'px)'
	});
	$('header').css({
		'background-color': 'rgba(100,100,100,' + wScroll / 500 + ')'
	});
});
$(document).ready(function() {
    $('.nav-button').click(function() {
        $('nav, .nav-button').toggleClass('open');
    });
});
