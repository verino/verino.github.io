 // When the window has finished loading create our google map below
 google.maps.event.addDomListener(window, 'load', init);

 function init() {
   // Basic options for a simple Google Map
   // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
   var mapOptions = {
     // How zoomed in you want the map to start at (always required)
     zoom: 11,
     scrollwheel: false,
     scaleControl: false,
     mapTypeControl: false,
     rotateControl: false,
     zoomControl: false,
     streetViewControl: false,

     // The latitude and longitude to center the map (always required)
     center: new google.maps.LatLng(40.6700, -73.9400), // New York

     // How you would like to style the map. 
     // This is where you would paste any style found on Snazzy Maps.
     styles: [{
       "featureType": "water",
       "elementType": "geometry",
       "stylers": [{
         "color": "#e9e9e9"
       }, {
         "lightness": 17
       }]
     }, {
       "featureType": "landscape",
       "elementType": "geometry",
       "stylers": [{
         "color": "#f5f5f5"
       }, {
         "lightness": 20
       }]
     }, {
       "featureType": "road.highway",
       "elementType": "geometry.fill",
       "stylers": [{
         "color": "#ffffff"
       }, {
         "lightness": 17
       }]
     }, {
       "featureType": "road.highway",
       "elementType": "geometry.stroke",
       "stylers": [{
         "color": "#ffffff"
       }, {
         "lightness": 29
       }, {
         "weight": 0.2
       }]
     }, {
       "featureType": "road.arterial",
       "elementType": "geometry",
       "stylers": [{
         "color": "#ffffff"
       }, {
         "lightness": 18
       }]
     }, {
       "featureType": "road.local",
       "elementType": "geometry",
       "stylers": [{
         "color": "#ffffff"
       }, {
         "lightness": 16
       }]
     }, {
       "featureType": "poi",
       "elementType": "geometry",
       "stylers": [{
         "color": "#f5f5f5"
       }, {
         "lightness": 21
       }]
     }, {
       "featureType": "poi.park",
       "elementType": "geometry",
       "stylers": [{
         "color": "#dedede"
       }, {
         "lightness": 21
       }]
     }, {
       "elementType": "labels.text.stroke",
       "stylers": [{
         "visibility": "on"
       }, {
         "color": "#ffffff"
       }, {
         "lightness": 16
       }]
     }, {
       "elementType": "labels.text.fill",
       "stylers": [{
         "saturation": 36
       }, {
         "color": "#333333"
       }, {
         "lightness": 40
       }]
     }, {
       "elementType": "labels.icon",
       "stylers": [{
         "visibility": "off"
       }]
     }, {
       "featureType": "transit",
       "elementType": "geometry",
       "stylers": [{
         "color": "#f2f2f2"
       }, {
         "lightness": 19
       }]
     }, {
       "featureType": "administrative",
       "elementType": "geometry.fill",
       "stylers": [{
         "color": "#fefefe"
       }, {
         "lightness": 20
       }]
     }, {
       "featureType": "administrative",
       "elementType": "geometry.stroke",
       "stylers": [{
         "color": "#fefefe"
       }, {
         "lightness": 17
       }, {
         "weight": 1.2
       }]
     }]
   };

   // Get the HTML DOM element that will contain your map 
   // We are using a div with id="map" seen below in the <body>
   var mapElement = document.getElementById('map');

   // Create the Google Map using our element and options defined above
   var map = new google.maps.Map(mapElement, mapOptions);
   // Markers

   var neighborhoods = [
     // Main
     {
       lat: 40.6700,
       lng: -73.9400,
       title: 'Title 1',
       icon: 'map-pin.png',
       content: 'Text text text'
     }, {
       lat: 40.6900,
       lng: -73.9600,
       title: 'Title 2',
       icon: 'map-pin.png',
       content: 'Text text text'
     },
   ];
   // Info windows + Markers
   infoWindow = new google.maps.InfoWindow();

   function displayMarkers() {

     // this variable sets the map bounds and zoom level according to markers position
     var bounds = new google.maps.LatLngBounds();

     // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
     for (var i = 0; i < neighborhoods.length; i++) {

       var latlng = new google.maps.LatLng(neighborhoods[i].lat, neighborhoods[i].lng);
       var name = neighborhoods[i].title;
       var icon = neighborhoods[i].icon;
       var content = neighborhoods[i].content;

       createMarker(latlng, name, content, icon, i * 150);

       // Marker’s Lat. and Lng. values are added to bounds variable
       bounds.extend(latlng);
     }

   }


   function createMarker(latlng, title, content, icon, timeout) {

     window.setTimeout(function() {
       var marker = new google.maps.Marker({
         map: map,
         position: latlng,
         clickable: true,
         icon: {
           url: "i/" + icon
         },
         animation: google.maps.Animation.DROP,
       });

       google.maps.event.addListener(marker, 'click', function() {
         var infoContent = '<div id="info_container">' +
           '<h3 class="info_title">' + title + '</h3><div>' + content + '</div></div>';

         infoWindow.setContent(infoContent);
         infoWindow.open(map, marker);

       });

     }, timeout);

   }

   displayMarkers();


   /* Map center on resize
   =========================*/
   var getCen = map.getCenter();

   google.maps.event.addDomListener(window, 'resize', function() {
     map.setCenter(getCen);
   });


   // Enable scroll zoom after click on map
   map.addListener('click', function() {
     map.setOptions({
       scrollwheel: true
     });
   });
   // Enable scroll zoom after drag on map
   map.addListener('drag', function() {
     map.setOptions({
       scrollwheel: true
     });
   });
   // Disable scroll zoom when mouse leave map
   map.addListener('mouseout', function() {
     map.setOptions({
       scrollwheel: false
     });
   });


 }