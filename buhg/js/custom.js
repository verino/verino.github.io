$(function() {
 
//*magnific-popup http://dimsemenov.com/plugins/magnific-popup/
$('.magnific-popup').magnificPopup({
	type: 'inline',
	midClick: true,
});




//* slick.js http://kenwheeler.github.io/slick/
// slick.js

$('#js-carousel').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  dots:false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
});





/*WOW*/
wow = new WOW({
			mobile: false
		});
wow.init();

// countdown
var twoDaysFromNow = new Date().valueOf() + 0.25 * 24 * 60 * 60 * 1000;
$('#clock').countdown(twoDaysFromNow, function(event) {
  var totalHours = event.offset.totalDays * 24 + event.offset.hours;
  $(this).html(event.strftime(totalHours + ' ч %M мин %S сек'));
});
// Nice scroll
$("body").niceScroll(
	{
		cursorwidth:"10px"
	});
//form validation
$('#email').blur(function() {
	if($(this).val() != '') {
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		if(pattern.test($(this).val())){
			$(this).css({'border' : '1px solid #569b44'});
			$('#valid').text('Верно');
		} else {
			$(this).css({'border' : '1px solid #ff0000'});
			$('#valid').text('Не верно');
		}
	} else {
		$(this).css({'border' : '1px solid #ff0000'});
		$('#valid').text('Поле email не должно быть пустым');
	}
});

// Form ajax

$("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку!");
      $("#form").trigger("reset");

    });
    return false;
  });

/* Smooth scroll / Scroll To Top
/* ---------------------------------------------- */

$('a[href*=#]').bind("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top-130
	}, 1000);
	e.preventDefault();
});

})

jQuery(function($) {

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



});