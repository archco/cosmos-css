/************************************************************
	scrolltop
*************************************************************
*	
*/

/**
 * scrollTop 
 * 
 * @return void
 */
(function () {
	// btn-to-top addEventListener.
	var b = document.querySelector('#btn-to-top');
	if (b) {
		b.addEventListener('click', function () {
			$('html,body').animate({scrollTop:0}, 'slow', 'swing');
		});
	}

	// scroll addEventListener.
	window.addEventListener('scroll', function () {
		scrollListener();
	});
})();

/**
 * scrollListener
 * 
 * @return void
 */
function scrollListener() {
	var top = scrollTop(),
		btnToTop = document.querySelector('#btn-to-top');
	// btn-to-top
	if (top > 500) {
		btnToTop.style.display = 'block';
	} else {
		btnToTop.style.display = 'none';
	}
}

/**
 * scrollTop
 * 
 * @return Number
 */
function scrollTop() {
	var top = 0;
	if (typeof(window.pageYOffset) == "number") {
		top = window.pageYOffset;
	} else if (document.body && document.body.scrollTop) {
		top = document.body.scrollTop;
	} else if (document.documentElement && document.documentElement.scrollTop) {
		top = document.documentElement.scrollTop;
	}
	return top;
}