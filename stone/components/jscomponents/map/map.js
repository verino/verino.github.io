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
google.maps.event.addDomListener(window, 'load', initialize);