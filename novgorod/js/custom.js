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
    dots: true,
    autoplay: true,
  autoplaySpeed: 4000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $('.partners__slider').slick({
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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
      $(".under-header").css({
        "marginTop": navH,
      });
    } else {
      $("#js-nav").removeAttr("style");
      $(".under-header").removeAttr("style");
    }
  });
  
//parallax
$('.parallax-window').parallax();

});

// Collapse accordion every time dropdown is shown
$('.dropdown-accordion').on('show.bs.dropdown', function (event) {
  var accordion = $(this).find($(this).data('accordion'));
  accordion.find('.panel-collapse.in').collapse('hide');
});

// Prevent dropdown to be closed when we click on an accordion link
$('.dropdown-accordion').on('click', 'a[data-toggle="collapse"]', function (event) {
  event.preventDefault();
  event.stopPropagation();
  $($(this).data('parent')).find('.panel-collapse.in').collapse('hide');
  $($(this).attr('href')).collapse('show');
})