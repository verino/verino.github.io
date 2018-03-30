$(function() {
 
//*magnific-popup http://dimsemenov.com/plugins/magnific-popup/
$('.magnific-popup').magnificPopup({
	type: 'inline',
	midClick: true,
});

$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
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


//wow.js

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       200,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

//parallax
$('.parallax-window').parallax();
//mixitup
var containerEl = document.querySelector('.portfolio-items-wrapper');
var mixer;
if (containerEl) {
	mixer = mixitup(containerEl);
}
function initialize() {
  var mapOptions = {
    zoom: 17,
    scrollwheel: false,
    center: new google.maps.LatLng(45.0449347,38.9384259)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  // var image = "../img/company.png";
  var myLatLng = new google.maps.LatLng(45.0449347,38.9384259);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    // icon: image
  });
}

// slide-out-navbar

var trigger = $('.hamburger'),
overlay = $('.overlay'),
isClosed = false;

trigger.click(function () {
  hamburger_cross();      
});

function hamburger_cross() {

  if (isClosed == true) {          
    overlay.hide();
    trigger.removeClass('is-open');
    trigger.addClass('is-closed');
    isClosed = false;
  } else {   
    overlay.show();
    trigger.removeClass('is-closed');
    trigger.addClass('is-open');
    isClosed = true;
  }
}

$('[data-toggle="offcanvas"]').click(function () {
  $('#wrapper').toggleClass('toggled');
}); 

})

jQuery(function($){
 $(".phone").mask("+7(999) 999-99-99");
});