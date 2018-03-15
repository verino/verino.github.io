  var headerH = $("#js-header").height(),
    navH = $("#js-nav").innerHeight();
  $(document).on("scroll", function() {
    var documentScroll = $(this).scrollTop();
    if (documentScroll > headerH) {
      $("#js-nav").addClass("fixed");

    } else {
      $("#js-nav").removeClass("fixed");
    }
  });