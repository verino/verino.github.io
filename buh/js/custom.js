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


// * Аякс отправка форм
 //Документация: http://api.jquery.com/jquery.ajax/
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

// Nice scroll
$("body").niceScroll(
	{
		cursorwidth:"10px"
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

})