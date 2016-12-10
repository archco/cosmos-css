'use strict';

/*!
 * cosmos-css - personal practice css framework.
 * @version v0.3.0
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
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

/*!
 * cosmos-css - personal practice css framework.
 * @version v0.3.0
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */
/************************************************************
  util
*************************************************************/

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

/*!
 * cosmos-css - personal practice css framework.
 * @version v0.3.0
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */
/************************************************************
  nav
*************************************************************/

(function () {
  // Responsive Nav
  $(".menu-toggle").click(function () {
    // parent nav
    var nav = this.parentNode.parentNode;
    // menu groups
    var menuGroups = ['.menu-main', '.menu-left', '.menu-right', '.menu-center'];

    // button toggle
    this.classList.toggle('change');
    // menu display toggle
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = menuGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var m = _step.value;

        $(nav).find(m).slideToggle();
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

/*!
 * cosmos-css - personal practice css framework.
 * @version v0.3.0
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */
/************************************************************
  dropdown
*************************************************************/

(function () {
  // add button's listener.
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
      closeElseDropdown();
    } else {
      var t = event.target.parentNode; // .dropdown
      closeElseDropdown(t);
    }
  };

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
  function closeElseDropdown() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var ds = document.querySelectorAll('.dropdown');

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = ds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var d = _step2.value;

        var c = d.querySelector('.dropdown-content');
        if (t && t == d) {
          continue;
        } // except target
        if (c.classList.contains('show')) {
          c.classList.remove('show');
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
})();
'use strict';

/*!
 * cosmos-css - personal practice css framework.
 * @version v0.3.0
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */
/************************************************************
  scroll-to
*************************************************************/

(function () {
  var scrollToTop = document.querySelector('#scroll-to-top');
  if (!scrollToTop) {
    return;
  }

  // scroll-to-top click listener.
  scrollToTop.addEventListener('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow', 'swing');
  });

  // scroll Listener.
  window.addEventListener('scroll', function () {
    var top = scrollTop();
    var isShow = scrollToTop.classList.contains('show');

    if (top > 500 && !isShow) {
      scrollToTop.classList.add('show');
    } else if (top <= 500 && isShow) {
      scrollToTop.classList.remove('show');
    }
  });
})();

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

/*!
 * cosmos-css - personal practice css framework.
 * @version v0.3.0
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */
/************************************************************
  message
*************************************************************/

/**
 * add '.message-box' into '#message-container'
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

/*!
 * cosmos-css - personal practice css framework.
 * @version v0.3.0
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */
/************************************************************
  Parallax
*************************************************************/

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
'use strict';

/*!
 * cosmos-css - personal practice css framework.
 * @version v0.3.0
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */
/************************************************************
  AJAX-loading
*************************************************************/

(function () {
  var a = document.querySelector('#ajax-loading');
  if (!a) {
    return;
  }

  // append loader element.
  appendLoader(a);
  // Register callback to jquery ajax.
  $(document).ajaxStart(function () {
    if (!a.classList.contains('show')) {
      a.classList.add('show');
    }
  }).ajaxStop(function () {
    if (a.classList.contains('show')) {
      a.classList.remove('show');
    }
  });

  function appendLoader(a) {
    var loader = document.createElement('div');
    loader.classList.add('loader');
    a.appendChild(loader);
  }
})();
/*!
 * cosmos-css - personal practice css framework.
 * @version v0.3.0
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */
// Just example
// console.log("Hello, World!");
"use strict";
//# sourceMappingURL=script.js.map
