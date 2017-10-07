function initialize() {
  var mapOptions = {
    zoom: 17,
    scrollwheel: false,
    center: new google.maps.LatLng(45.0449347,38.9384259)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {
// popup
$('.magnific-popup').magnificPopup({
  type:'inline',
  midClick: true,
});

  // slick
  $('#js-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true
  });
  // fixed nav
    var headerH = $("#js-header").height(),
    navH = $("#js-nav").innerHeight();
  $(document).on("scroll", function() {
    var documentScroll = $(this).scrollTop();
    if (documentScroll > headerH) {
      $("#js-nav").css({
        "position": "fixed",
        "top":" 0",
        "zIndex": "200",
        "width": "100%" 
      });
      $("#js-header").css({
        "marginTop": navH,
      });

    } else {
      $("#js-nav").css({
        "position": "",
        "top":"",
        "zIndex": "",
        "width": ""
      });
      $("#js-header").removeAttr("style");
    }
  });
});