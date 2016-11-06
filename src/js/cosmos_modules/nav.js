/************************************************************
	nav
*************************************************************
*	
*/

/** add event listeners */
(function () {
	// Responsive Nav
	$(".menu-toggle").click(function(){
		this.classList.toggle('change');
		$('.menu-main').slideToggle();
		$('.menu-left').slideToggle();
		$('.menu-right').slideToggle();
	});

	$(window).resize(function(){
		var w = $(window).width();
		var menu = $("nav ul");
		if (w > 768 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
})();
