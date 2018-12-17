$(function() {
	// Custom JS
	$('.magnific-popup').magnificPopup({
		type: 'inline',
		midClick: true
	});
		//first nav
		$('.toggle-nav').click(function(){
			$(this).toggleClass('on');
			$('.toggler').toggleClass('active');
		});
		$('.main-nav a').click(function(){
			$('.toggle-nav').toggleClass('on');

		});

    /* Smooth scroll / Scroll To Top
/* ---------------------------------------------- */

$('.main-nav li a').bind("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top - 70}, 1500);
	e.preventDefault();
});

$('.to-top').bind("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top + 70}, 1500);
	e.preventDefault();
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
	target: '.header',
	offset: 10,
});

//counter
	var today = new Date();
	var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() +2);
	$('#myCounter').mbComingsoon({
	expiryDate:  tomorrow,
	interval: 1000,       // Counter uopdate interval
	speed: 500,
	localization: {
	days: "дней",       //Localize labels of counter
	hours: "часов",
	minutes: "минут",
	seconds: "секунд"
	},
	 callBack: Function //Function executed on expiry or if espired
	});

	//mask
	$('input[type="tel"]').mask("(999) 999-9999");
	//slick

	$('.slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		infinity:true
	});

});

