$(window).scroll(function () {
	// Parallax effects
	var wScroll = $(window).scrollTop();
	$('.bg').css({
		'transform': 'translate(0,-' + wScroll / 2 + 'px)'
	});
	$('header').css({
		'background-color': 'rgba(51,51,51,' + wScroll / 1000 + ')'
	});
});
