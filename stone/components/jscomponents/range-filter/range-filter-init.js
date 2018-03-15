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
  slider.noUiSlider.on('update', function(values, handle) {
    if (handle) {
      valueInputMax.value = values[handle];
    } else {
      valueInputMin.value = values[handle];
    }
  });

  // When the input changes, set the slider value
  valueInputMax.addEventListener('change', function() {
    slider.noUiSlider.set([null, this.value]);
  });