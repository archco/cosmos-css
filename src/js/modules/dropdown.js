/************************************************************
	dropdown
*************************************************************
*	
*/

/** dropdown toggle button */
function dropdownToggle(x) {
	var c = x.parentNode.querySelector('.dropdown-content');
	c.classList.toggle('show');
}
/** IIFE - Add Event Listeners */
(function () {
	// Close the dropdown menu if the user clicks outside of it
	window.onclick = function(event) {
		if (! event.target.classList.contains('dropdown-toggle')) {
			var dropdowns = document.querySelectorAll('.dropdown-content');
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var d = dropdowns[i];
				if (d.classList.contains('show')) {
					d.classList.remove('show');
				}
			}
		}
	}
})();
