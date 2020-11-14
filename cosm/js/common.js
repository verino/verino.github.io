$(function() {

	// Custom JS

	//nav
$('.toggle-nav').click(function(){
			$(this).toggleClass('on');
			$('.overlay').toggleClass('open');

		});
		$('.main-nav a').click(function(){
			$('.toggle-nav').toggleClass('on');
			$('.overlay').toggleClass('open');

		});
//slider

	$('.slider').on(`init reInit`, function(event, slick) {
		$('.counter__big').text(1);
		$('.counter__small').text( ' / ' + slick.slideCount);
	});
	$('.slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
		$('.counter__big').text(currentSlide + 1);
		$('.counter__small').text( ' / ' + slick.slideCount);
	});
	$('.slider').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		infinity:true,
		dots: false,
	});

	$('.reviews__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		infinity:true,
		responsive: [
		{
			breakpoint: 769,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});

	//scroll
	$("a.nav__link").click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination + 1
		}, 600);
		return false;
	});

	//scroll
	$('.table__wrap').overlayScrollbars({ 
	});

	//popup
	$('.magnific-popup').magnificPopup({
	type: 'inline',
	midClick: true,
});


});


