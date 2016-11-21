/************************************************************
	dropdown
*************************************************************/

(function () {
	// add button's listener.
	var btns = document.querySelectorAll('.dropdown-toggle');
	if (btns) {
		for (let btn of btns) {
			btn.onclick = function () {
				dropdownToggle(this);
			};
		}
	}
	// Close the dropdown menu if the user clicks outside of it
	window.onclick = function(event) {
		if (! event.target.classList.contains('dropdown-toggle')) {
			closeElseDropdown();
		} else {
			let t = event.target.parentNode; // .dropdown
			closeElseDropdown(t);
		}
	}

	/**
	 * toggling dropdown contents
	 * 
	 * @param  {element} x  .dropdown-toggle
	 * @return {void}
	 */
	function dropdownToggle(x) {
		var c = x.parentNode.querySelector('.dropdown-content');
		c.classList.toggle('show');
	}

	/**
	 * close dropdown contents
	 * 
	 * @param  {element|null} t  except target
	 * @return {void}
	 */
	function closeElseDropdown(t = null) {
		var ds = document.querySelectorAll('.dropdown');

		for (let d of ds) {
			let c = d.querySelector('.dropdown-content');
			if (t && t == d) { continue; } // except target
			if (c.classList.contains('show')) {
				c.classList.remove('show');
			}
		}
	}
})();
