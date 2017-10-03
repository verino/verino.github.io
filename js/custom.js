(function($){
/* PREloader*/
$(window).load(function() {
	setTimeout(function () { 
		$(".preloader").delay(100).fadeOut().remove();   
	}, 2000);  
});

$(function() {
	/*Nicescroll*/
	$("body").niceScroll({
		cursorwidth:"10px"
	});

	/*Parallax*/
	$('.intro').parallax({
		imageSrc: 'img/header-bg.jpg'
	});

	/**Fixed header when scroll**/
	var headerH = $("#home").height(),
	navH = $("#js-nav").innerHeight();
	$(document).on("scroll", function() {
		var documentScroll = $(this).scrollTop();
		if (documentScroll > headerH) {
			$("#js-nav").addClass("fixed");
			$("#works").css({
				"marginTop": navH
			});

		} else {
			$("#js-nav").removeClass("fixed");
			$("#works").removeAttr("style");
		}
	});

/* Smooth scroll / Scroll To Top
/* ---------------------------------------------- */

$('a[href*=#]').bind("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
	}, 1000);
	e.preventDefault();
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
	target: '.header__navbar',
	offset: 10,
})
/*WOW*/
wow = new WOW({
			mobile: false
		});
		wow.init();
})
})(jQuery);