
// /* PREloader*/
// $(window).load(function() {
// 	setTimeout(function () { 
// 		$(".preloader").delay(100).fadeOut().remove();   
// 	}, 2000);  
// });

$(function() {
	/*Nicescroll*/
	// $("body").niceScroll({
	// 	cursorwidth:"10px"
	// });

	/*Parallax*/
	// $('.skills').parallax({
	// 	imageSrc: 'img/header-bg.jpg'
	// });

	/*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    function menuscroll() {
        var $navmenu = $('#js-nav');
        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass("is-scrolling");
        }
    }
    menuscroll();
    $(window).on('scroll', function() {
        menuscroll();
    });

/* Smooth scroll / Scroll To Top
/* ---------------------------------------------- */

$('a[href*=#]').bind("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
	}, 1500);
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

});