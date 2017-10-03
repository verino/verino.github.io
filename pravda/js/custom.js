$(function() {

	//jCarousel Plugin
	$('#carousel').jcarousel({
		vertical: true,
		scroll: 1,
		auto: 2,
		wrap: 'last',
		initCallback: mycarousel_initCallback,
	});


	//Combine jCarousel with Image Display
	$('div#slideshow__carousel li a').click(function() {

		$('div#slideshow__main li').removeClass('act');
		$('div#slideshow__main li.' + $(this).attr('rel')).addClass('act');

		return false;
	});
	// list-checked active
	$('.list-checked  input[type="radio"]+label').click(function() {
		$('.list-checked  input[type="radio"]+label').removeClass('active'),
			$(this).addClass('active');
	});
	// match-height
	$('.js-cln').matchHeight();

	//overflow text
	var size = 46,
    newsContent= $('.news__list--finally .news__title--small a'),
    newsText = newsContent.text();
    
if(newsText.length > size){
	newsContent.text(newsText.slice(0, size) + ' ...');
}

});


//Carousel Tweaking

function mycarousel_initCallback(carousel) {
	  // Pause autoscrolling if the user moves with the cursor over the clip.
  carousel.clip.hover(function() {
    carousel.stopAuto();
  }, function() {
    carousel.startAuto();
  });

}