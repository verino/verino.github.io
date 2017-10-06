$(function() {

// map

function initialize() {
  var mapOptions = {
    zoom: 15,
    scrollwheel: false,
    center: new google.maps.LatLng(34.8724375,-111.760678)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  // var image = "../img/company.png";
  var myLatLng = new google.maps.LatLng(34.8661349,-111.7578885);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    // icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

// datepicker

$('#checkout' ).datepicker(
  { dateFormat: 'd MM yy' }
  );
$('#checkin' ).datepicker(
  { dateFormat: 'd MM yy' }
  );

// popup
$('.magnific-popup').magnificPopup({
  type:'inline',
  midClick: true,
}
);


// input value
$('.search-form-minus').on('click',function(event) {
  event.preventDefault();
  current = +$(this).siblings('input').val();
  input = $(this).siblings('input');
  $(input).val(current - 1);

  if (current < 1) {
    $(input).val(current);
  }
});

$('.search-form-plus').on('click',function(event) {
  event.preventDefault();
  current = +$(this).siblings('input').val();
  input = $(this).siblings('input');
  $(input).val(current + 1);
});

// Disabling typing letters in numeric inputs
  $(":input[class='people-number']").keypress(function (e) { // selector by class is used for IE9 support
    //Don't type anything if the key is not digit
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      console.log('not a digit!');
      return false;
    }
    // Allow max 4 digits in input
    if (this.value.length > 3) {
      return false;
    }
  });

});


(function($){
// range slider

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [0, 3000],
  connect: true,
  step: 1,
  orientation: "horizontal",
  range: {
    'min': 0,
    'max': 5000
  },
  format: wNumb({
    decimals: 0
  })
});

var valueInputMin = document.getElementById('min-price'),
valueInputMax = document.getElementById('max-price');

// When the slider value changes, update the input and span
slider.noUiSlider.on('update', function( values, handle ) {
  if ( handle ) {
    valueInputMax.value = values[handle];
  } else {
    valueInputMin.value = values[handle];
  }
});

// When the input changes, set the slider value
valueInputMax.addEventListener('change', function(){
  slider.noUiSlider.set([null, this.value]);
});

})(jQuery);
