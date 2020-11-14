$(function() {

// Custom JS

//nav
$('.toggle-nav').click(function(){
			$(this).toggleClass('on');
			$('.overlay').toggleClass('open');

		});
		$('.nav-main a').click(function(){
			$('.toggle-nav').toggleClass('on');
			$('.overlay').toggleClass('open');

		});
//slick testimonials
$('#test').slick({
	slidesToShow: 2,
	slidesToScroll: 2,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	dots:true,
	arrows:false,
	responsive: [
	{
		breakpoint: 768,
		settings: {
			arrows: false,
			slidesToShow: 2,
			slidesToScroll: 2,
		}
	},
	{
		breakpoint: 480,
		settings: {
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}
	]
});

//number

var show = true;
    var countbox = ".counter";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.counter__numb').css('opacity', '1');
            $('.counter__numb').spincrement({
                thousandSeparator: "",
                duration: 4000
            });
             
            show = false;
        }
    });


    //scroll
$("a.anchor").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 3000);
    return false;
  });

// MY UPDATE
var itemSelector = ".item";
var $filterbutton = $('.filter-item');
var $page_prev_btn = $('.owl-prev');
var $page_next_btn = $('.owl-next');
var $container = $('#products').isotope({
	itemSelector: itemSelector,
	percentPosition: true,
	masonry: {
            // use element for option
            columnWidth: '.item'
        }
    });

    //Ascending order
    var responsiveIsotope = [
    [480, 4],
    [768, 6]
    ];
    var itemsPerPageDefault = 8;
    var itemsPerPage = defineItemsPerPage();
    var currentNumberPages = 1;
    var currentPage = 1;
    var startPage = 1;
    var currentFilter = '*';
    var filterAttribute = 'data-filter';
    var filterValue = "";
    var pageAttribute = 'data-page';
    var pagerClass = 'isotope-pager';

    // update items based on current filters    
    function changeFilter(selector) {
    	$container.isotope({
    		filter: selector
    	});
    }

    //grab all checked filters and goto page on fresh isotope output
    function goToPage(n) {
    	currentPage = n;

        // appearing
        if (currentPage < currentNumberPages) {
        	if ($page_next_btn.css('opacity') == 0) {
        		$page_next_btn.fadeTo("slow", 1);
        	}
        }
        if (currentPage > startPage) {
        	if ($page_prev_btn.css('opacity') == 0) {
        		$page_prev_btn.fadeTo("slow", 1);
        	}
        }
        // disappearing
        if (currentPage == currentNumberPages) {
        	if ($page_next_btn.css('opacity') == 1) {
        		$page_next_btn.fadeTo("slow", 0);
        	}
        }
        if (currentPage == startPage) {
        	if ($page_prev_btn.css('opacity') == 1) {
        		$page_prev_btn.fadeTo("slow", 0);
        	}
        }
        var selector = '*';
        var exclusives = [];
        // for each box checked, add its value and push to array
        var currentFilter = $('#stuff-filters a.active').attr('data-filter');
        selector += (currentFilter != '*') ? '.' + currentFilter : '';
        exclusives.push(selector);
        // smash all values back together for 'and' filtering
        filterValue = exclusives.length ? exclusives.join('') : '*';

        // add page number to the string of filters
        var wordPage = currentPage.toString();
        filterValue += ('.' + wordPage);

        changeFilter(filterValue);
        // console.log(filterValue);
    }

    // determine page breaks based on window width and preset values
    function defineItemsPerPage() {
    	var pages = itemsPerPageDefault;

    	for (var i = 0; i < responsiveIsotope.length; i++) {
    		if ($(window).width() <= responsiveIsotope[i][0]) {
    			pages = responsiveIsotope[i][1];
    			break;
    		}
    	}
    	return pages;
    }

    function setPagination() {

    	var SettingsPagesOnItems = function() {
    		var itemsLength = $container.children(itemSelector).length;
    		var pages = Math.ceil(itemsLength / itemsPerPage);
    		var item = 1;
    		var page = 1;
    		var selector = '*';
    		var exclusives = [];
            // for each box checked, add its value and push to array
            var currentFilter = $('#stuff-filters a.active').attr('data-filter');
            selector += (currentFilter != '*') ? '.' + currentFilter : '';
            exclusives.push(selector);
            // smash all values back together for 'and' filtering
            filterValue = exclusives.length ? exclusives.join('') : '*';
            // find each child element with current filter values
            $container.children(filterValue).each(function() {
                // increment page if a new one is needed
                if (item > itemsPerPage) {
                	page++;
                	item = 1;
                }
                // add page number to element as a class
                wordPage = page.toString();

                var classes = $(this).attr('class').split(' ');
                var lastClass = classes[classes.length - 1];
                // last class shorter than 4 will be a page number, if so, grab and replace
                if (lastClass.length < 4) {
                	$(this).removeClass();
                	classes.pop();
                	classes.push(wordPage);
                	classes = classes.join(' ');
                	$(this).addClass(classes);
                } else {
                    // if there was no page number, add it
                    $(this).addClass(wordPage);
                }
                item++;
            });
            currentNumberPages = page;
        }();

        // create page number navigation
        var CreatePagers = function() {

        	var $isotopePager = ($('.' + pagerClass).length == 0) ? $('<div class="' + pagerClass + ' owl-controls"></div>') : $('.' + pagerClass);

        	$isotopePager.html('');

        	var $page_prev_btn = $('.owl-buttons .owl-prev');
        	var $page_next_btn = $('.owl-buttons .owl-next');

        	if (currentNumberPages > 1) {
        		for (var i = 0; i < currentNumberPages; i++) {
        			if (i == 0) {
        				var $pager = $('<a href="javascript:void(0);" class="owl-page pager active" ' + pageAttribute + '="' + (i + 1) + '"></a>');
        			} else
        			var $pager = $('<a href="javascript:void(0);" class="owl-page pager" ' + pageAttribute + '="' + (i + 1) + '"><span></span></a>');
        			$pager.html('<span></span>');

        			$pager.click(function() {
        				var page = $(this).eq(0).attr(pageAttribute);
        				$('.isotope-pager a').removeClass("active");
        				$('.pager[data-page="' + page + '"]').addClass('active');
        				goToPage(page);
        			});
        			$pager.appendTo($isotopePager);
        		}
        	}

        	$('#stuff-filters').after($isotopePager);

        }();
    }

    // remove checks from all boxes and refilter
    function clearAll() {
    	currentFilter = '*';
    	setPagination();
    	goToPage(1);
    }

    setPagination();
    goToPage(1);

    //event handlers
    $('.filter-item').click(function(e) {
    	e.preventDefault();
    	$('.filter-item').removeClass('active');
    	$(this).addClass('active');
        // clearAll();
        var filter = $(this).attr('data-filter');
        currentFilter = filter;
        setPagination();
        goToPage(1);
    });

    $('#clear-filters').click(function() {
    	clearAll();
        // setPagination();
        // goToPage(1);
    });

    $(window).resize(function() {
    	itemsPerPage = defineItemsPerPage();
    	setPagination();
    	goToPage(1);
    });
    $page_prev_btn.click(function() {
    	var page = Number(currentPage) - 1;
    	console.log('Page = ' + page + ' currentPage = ' + currentPage);
    	if (page < 1) {
    		page = 1;
    	}
    	$('.isotope-pager a').removeClass("active");
    	$('.pager[data-page="' + page + '"]').addClass('active');
    	goToPage(page);
    });
    $page_next_btn.click(function() {
    	var page = Number(currentPage) + 1;
    	if (page > currentNumberPages) {
    		page = currentNumberPages;
    	}
    	$('.isotope-pager a').removeClass("active");
    	$('.pager[data-page="' + page + '"]').addClass('active');
    	goToPage(page);
    });
});
