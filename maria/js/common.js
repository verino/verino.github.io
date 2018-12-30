$(function() {

	// Custom JS

//mob-menu
$('.toggle-nav').click(function(){
	$(this).toggleClass('on');
	$('.overlay').toggleClass('open');

});
$('.nav-main a').click(function(){
	$('.toggle-nav').toggleClass('on');
	$('.overlay').toggleClass('open');

});

//wow
wow = new WOW(
{

	mobile:false
}
)
wow.init();


//smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 800
});

//typed
var typed = new Typed(".hero__title", {
		strings: [ "", "Привет! Я Мария Лупина."," Рада видеть Вас в гостях!", "Я художник. Дизайнер.", " А так же преподаватель."],
		typeSpeed: 40,
  loop: true, // Default value
});


//isotope

var portfolioIsotope = $('.portfolio__container').isotope({
	itemSelector: '.portfolio__thumbnail',
	layoutMode: 'fitRows'
});

$('#portfolio-flters li a').on( 'click', function() {
	$("#portfolio-flters li a").removeClass('filter-active');
	$(this).addClass('filter-active');

	portfolioIsotope.isotope({ filter: $(this).data('filter') });
});

  //magnific popup

  $('.popup-img').magnificPopup({
  	type: 'image',
  	removalDelay: 300,
  	mainClass: 'mfp-with-zoom',
  	gallery: {
  		enabled: true
  	},
  	zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
    }
});



});

$(function() {
	//owl

	var $testimonialsDiv = $('.testimonials__user');
	if ($testimonialsDiv.length && $.fn.owlCarousel) {
		$testimonialsDiv.owlCarousel({
			items: 3,
			dots:true,
			loop:true,
			autoplay:true,
			autoplayTimeout:2000,
						responsive: {
				0: {
					items: 1
				},
				768: {
					items: 3
				}
			}
		});
	}

	var $galleryDiv = $('.serv__items');
	if ($galleryDiv.length && $.fn.owlCarousel) {
		$galleryDiv.owlCarousel({
			items:4,
			loop:true,
			margin:10,
			autoplay:true,
			autoplayTimeout:2000,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 4
				}
			}
		});
	}
	
});