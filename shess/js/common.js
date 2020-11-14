$(function() {

//accordion
$(window).on('load', function() {
	if ($(window).width() < 576) {
		$('.faq__title').on('click', function() {
			$(this).closest('.faq__item').siblings().removeClass('active').find('.faq__content').slideUp(400);
			$(this).closest('.faq__item').toggleClass('active').find('.faq__content').slideToggle(400);
			return false;
		});
	}
});

//scroll
$("a[href^='#']").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
//slideout.js menu


	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 300,
		'tolerance': 76,
		'side': 'right',
		'easing': 'cubic-bezier(.32,2,.55,.27)'
	});

	document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
		slideout.toggle();
	});

	function close(eve) {
		eve.preventDefault();
		slideout.close();
	}

	slideout
	.on('beforeopen', function() {
		this.panel.classList.add('panel-open');
	})
	.on('open', function() {
		this.panel.addEventListener('click', close);
	})
	.on('beforeclose', function() {
		this.panel.classList.remove('panel-open');
		this.panel.removeEventListener('click', close);
	});



 //polyfill img:object-fit
  objectFitImages();

//initialized slick only on mobile device

$(window).on('load resize', function() {
	if ($(window).width() < 768) {
		$('.posts__wrap:not(.slick-initialized)').slick({
			arrows:false,
			slidesToShow: 1,
			dots: true,
			slidesToScroll: 1
		});
	} else {
		$(".posts__wrap.slick-initialized").slick("unslick");
	}
});
$(window).on('load resize', function() {
	if ($(window).width() < 768) {
		$('.partidas__wrap:not(.slick-initialized)').slick({
			arrows:false,
			slidesToShow: 1,
			dots: true,
			slidesToScroll: 1
		});
	} else {
		$(".partidas__wrap.slick-initialized").slick("unslick");
	}
});
});
