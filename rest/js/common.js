$(function() {

	// Custom JS
 new WOW().init();
	//smooth scroll
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 600
	});
//mob-menu
$('.toggle-nav').click(function(){
	$(this).toggleClass('on');
	$('.overlay').toggleClass('open');

});
$('.nav-main a').click(function(){
	$('.toggle-nav').toggleClass('on');
	$('.overlay').toggleClass('open');

});
//active

$(".menu-btn a").click(function(e) {
	$(".menu-btn li:first-child a").addClass("active");
	e.preventDefault();
	$(".menu-btn a").removeClass('active');
	$(this).addClass('active');
})


//tabs
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var tabLinks = document.querySelectorAll(".tabs a");
var tabPanels = document.querySelectorAll(".tabs-panel");

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	var _loop = function _loop() {
		var el = _step.value;

		el.addEventListener("click", function (e) {
			e.preventDefault();

			document.querySelector(".tabs li.active").classList.remove("active");
			document.querySelector(".tabs-panel.active").classList.remove("active");

			var parentListItem = el.parentElement;
			parentListItem.classList.add("active");
			var index = [].concat(_toConsumableArray(parentListItem.parentElement.children)).indexOf(parentListItem);

			var panel = [].concat(_toConsumableArray(tabPanels)).filter(function (el) {
				return el.getAttribute("data-index") == index;
			});
			panel[0].classList.add("active");
		});
	};

	for (var _iterator = tabLinks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		_loop();
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

//next

});
