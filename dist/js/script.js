'use strict';

/*!
 * cosmos-css
 *
 * @version: v0.1.1
 * @updated: 2016-11-06
 * @link: https://github.com/archco/cosmos-css
 */

// Check for jQuery.
if (typeof jQuery === 'undefined') {
  var jQuery;
  // Check if require is a defined function.
  if (typeof require === 'function') {
    jQuery = $ = require('jquery');
    // Else use the dollar sign alias.
  } else {
    if (typeof $ === 'undefined') {
      throw new Error("jQuery required");
    }
    jQuery = $;
  }
}
'use strict';

/************************************************************
	util
*************************************************************
*	
*/

/**
 * submitConfirm - confirm 을 취소하면 event.preventDefault()
 * 
 * @param  {element} form
 * @param  {sting} message
 */
function submitConfirm(form, message) {
	var message = typeof message !== 'undefined' ? message : 'Are you confirm?';
	form.addEventListener('submit', function (event) {
		if (!confirm(message)) {
			event.preventDefault();
		}
	});
}

/**
 * checkMobileSize
 * 
 * @return {bool}
 */
function checkMobileSize() {
	if (window.innerWidth < 800) {
		return true;
	} else {
		return false;
	}
}
'use strict';

/************************************************************
	nav
*************************************************************
*	
*/

/** add event listeners */
(function () {
	// Responsive Nav
	$(".menu-toggle").click(function () {
		this.classList.toggle('change');
		$('.menu-main').slideToggle();
		$('.menu-left').slideToggle();
		$('.menu-right').slideToggle();
	});

	$(window).resize(function () {
		var w = $(window).width();
		var menu = $("nav ul");
		if (w > 768 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
})();
'use strict';

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
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = btns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var btn = _step.value;

				btn.onclick = function () {
					dropdownToggle(this);
				};
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
	}
	// Close the dropdown menu if the user clicks outside of it
	window.onclick = function (event) {
		if (!event.target.classList.contains('dropdown-toggle')) {
			var dropdowns = document.querySelectorAll('.dropdown-content');
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = dropdowns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var d = _step2.value;

					if (d.classList.contains('show')) {
						d.classList.remove('show');
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}
	};
})();
'use strict';

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
			$('html,body').animate({ scrollTop: 0 }, 'slow', 'swing');
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
	if (!btnToTop) {
		return;
	}
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
	if (typeof window.pageYOffset == "number") {
		top = window.pageYOffset;
	} else if (document.body && document.body.scrollTop) {
		top = document.body.scrollTop;
	} else if (document.documentElement && document.documentElement.scrollTop) {
		top = document.documentElement.scrollTop;
	}
	return top;
}
'use strict';

/************************************************************
	message
*************************************************************
*	
*/

/**
 * showMessage - message-box를 추가.
 * 
 * @param  {String} message
 * @param  {String} status  ['info','success','warning','error']
 */
function showMessage(message, status) {
	// default parameter
	var status = typeof status !== 'undefined' ? status.toLowerCase() : 'info';
	var c, b, span, btn;
	c = document.querySelector('#message-container');
	// create message box
	b = document.createElement('DIV');
	span = document.createElement('SPAN');
	btn = document.createElement('BUTTON');
	span.textContent = message;
	btn.innerHTML = "<i class=\"fa fa-times\" aria-hidden=\"true\"></i>";
	btn.classList.add('btn-close-message');
	btn.addEventListener('click', function () {
		var b = this;
		messageCloseBtnEventHandler(b);
	});
	b.classList.add('message-box');
	b.classList.add('message-' + status);
	// append child
	b.appendChild(span);
	b.appendChild(btn);
	c.appendChild(b);
}
/**
 * messageCloseBtnEventHandler
 */
function messageCloseBtnEventHandler(element) {
	var messageBox = element.parentNode;
	messageBox.style.opacity = '0';
	setTimeout(function () {
		messageBox.style.display = 'none';
	}, 600); // 0.6s
}
/**
 * IIFE - flash message 용 close button add event listner 
 */
(function () {
	// add event listener - close buttons
	var btns = document.querySelectorAll('.btn-close-message');
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function () {
			var b = this;
			messageCloseBtnEventHandler(b);
		}, false);
	}
})();
'use strict';

/************************************************************
	Parallax
*************************************************************
*	
*/

(function () {
	// const TAG = "parallax";
	var ps = document.querySelectorAll('.parallax');
	if (ps.length == 0) {
		return;
	}
	// console.log(TAG, ps);
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = ps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var p = _step.value;

			parallaxProcess(p);
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
})();

/**
 * parallaxProcess
 * 
 * @param  {element} p
 * @return {void}
 */
function parallaxProcess(p) {
	// const TAG = parallaxProcess.name;
	var i = p.querySelector('img');
	if (!i) {
		return;
	}
	var h = p.dataset.height || i.clientHeight;
	// console.log(TAG, h);
	// hide img tag.
	i.classList.add('hide');
	// set parallax background image.
	p.style.backgroundImage = 'url(\'' + i.src + '\')';
	// set parallax height.
	p.style.height = h + 'px';
}
"use strict";

// Just example
console.log("Hello, World!");
//# sourceMappingURL=script.js.map
