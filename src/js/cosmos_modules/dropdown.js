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
	// toggle button add click event listener.
	var btns = document.querySelectorAll('.dropdown-toggle');
	if (btns) {
		for (btn of btns) {
			btn.onclick = function () {
				dropdownToggle(this);
			};
		}
	}
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
