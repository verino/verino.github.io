$(function() {

	// Custom JS
	$(".accordion_head").click(function() {
    if ($('.accordion_body').is(':visible')) {
      $(".accordion_body").slideUp(300);
      $(".plusminus").text('+');
    }
    if ($(this).next(".accordion_body").is(':visible')) {
      $(this).next(".accordion_body").slideUp(300);
      $(this).children(".plusminus").text('+');
    } else {
      $(this).next(".accordion_body").slideDown(300);
      $(this).children(".plusminus").text('-');
    }
  });

	$('.toggle-nav').click(function(){
      $(this).toggleClass('on');
      $('.overlay').toggleClass('open');

    });
    $('.nav-main a').click(function(){
      $('.toggle-nav').toggleClass('on');
      $('.overlay').toggleClass('open');

    });

    $("a[href^='#']").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

});
