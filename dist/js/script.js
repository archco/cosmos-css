'use strict';

/*!
 * cosmos-css - personal practice css framework.
 * @version v0.3.1
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
/************************************************************
  util
*************************************************************/

// utilities for modules. empty yet.
"use strict";
'use strict';

/************************************************************
  Helper
*************************************************************/
var Helper = function () {
  var NAME = 'Cosmos.Helper';

  /**
   * submitConfirm - confirm 을 취소하면 event.preventDefault()
   * 
   * @param  {element} form
   * @param  {sting} message
   * @return {void}
   */
  var submitConfirm = function submitConfirm(form) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Are you confirm?';

    if (!form) {
      throw new Error('Form target is not exist.');
    }
    form.addEventListener('submit', function (event) {
      if (!confirm(message)) {
        event.preventDefault();
      }
    });
  };

  /**
   * check mobile size
   * 
   * @return {boolean}
   */
  var checkMobileSize = function checkMobileSize() {
    if (window.innerWidth < 800) {
      return true;
    } else {
      return false;
    }
  };

  return {
    name: NAME,
    submitConfirm: submitConfirm,
    checkMobileSize: checkMobileSize
  };
}();
'use strict';

/************************************************************
  nav
*************************************************************/
var Nav = function () {
  var NAME = 'Cosmos.Nav';
  var ClassName = {
    TOGGLE_BTN: 'menu-toggle',
    CHANGE: 'change'
  };
  var MenuGroups = ['.menu-main', '.menu-left', '.menu-right', '.menu-center'];

  var load = function load() {
    var t = document.querySelector('.' + ClassName.TOGGLE_BTN);
    if (t) {
      // menu toggle button.
      t.addEventListener('click', _toggleHandler);
    }
    // handle jQuery slide style.
    $(window).resize(function () {
      var w = $(window).width();
      var menu = $("nav ul");
      if (w > 768 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  };

  var _toggleHandler = function _toggleHandler(event) {
    var t = event.currentTarget;
    var nav = t.parentNode.parentNode;
    // toggle button class change.
    t.classList.toggle(ClassName.CHANGE);
    // menu slide (use jQuery)
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = MenuGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
  };

  return {
    name: NAME,
    load: load
  };
}();
'use strict';

/************************************************************
  dropdown
*************************************************************/
var Dropdown = function () {
  var NAME = 'Cosmos.Dropdown';
  var ClassName = {
    DROPDOWN: 'dropdown',
    TOGGLE: 'dropdown-toggle',
    CONTENT: 'dropdown-content',
    SHOW: 'show'
  };

  var load = function load() {
    var btns = document.querySelectorAll('.' + ClassName.TOGGLE);
    if (btns.length == 0) {
      return;
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = btns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var btn = _step.value;

        btn.addEventListener('click', _toggleButtonHandler);
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

    window.onclick = _otherClickHandler;
  };

  var _toggleButtonHandler = function _toggleButtonHandler(event) {
    // toggling dropdown content.
    var c = event.currentTarget.parentNode.querySelector('.' + ClassName.CONTENT);
    if (c) {
      c.classList.toggle(ClassName.SHOW);
    }
  };

  var _otherClickHandler = function _otherClickHandler(event) {
    var t = event.target;
    // Close the dropdown menu if the user clicks outside of it
    if (t.classList.contains(ClassName.TOGGLE)) {
      // dropdown
      var dropdown = t.parentNode; // .dropdown
      _closeElseDropdown(dropdown);
    } else {
      // not dropdown
      _closeElseDropdown();
    }
  };

  /**
   * close dropdown contents
   * 
   * @param  {element} t  except target
   * @return {void}
   */
  var _closeElseDropdown = function _closeElseDropdown() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var ds = document.querySelectorAll('.' + ClassName.DROPDOWN);

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = ds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var d = _step2.value;

        var c = d.querySelector('.' + ClassName.CONTENT);
        if (t && t == d) {
          continue;
        } // except target
        if (c.classList.contains(ClassName.SHOW)) {
          c.classList.remove(ClassName.SHOW);
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
  };

  return {
    name: NAME,
    load: load
  };
}();
'use strict';

/************************************************************
  scroll-to
*************************************************************/
var ScrollTo = function () {
  var NAME = 'Cosmos.ScrollTo';
  var Config = {
    TOTOP: '#scroll-to-top',
    SHOW: 'show'
  };

  var btnToTop = document.querySelector(Config.TOTOP);

  var load = function load() {
    if (!btnToTop) {
      return;
    }

    // scroll-to-top button listener
    btnToTop.addEventListener('click', function () {
      var top = 0;
      $('body').animate({ scrollTop: top }, 'slow', 'swing');
    });

    // scroll listener
    window.addEventListener('scroll', _scrollHandler);
  };

  var _scrollHandler = function _scrollHandler() {
    var top = _getScrollTop();
    var isShow = btnToTop.classList.contains(Config.SHOW);

    if (top > 500 && !isShow) {
      btnToTop.classList.add(Config.SHOW);
    } else if (top <= 500 && isShow) {
      btnToTop.classList.remove(Config.SHOW);
    }
  };

  var _getScrollTop = function _getScrollTop() {
    return $('body').scrollTop();
  };

  var _getScrollBottom = function _getScrollBottom() {
    return $(document).height();
  };

  return {
    name: NAME,
    load: load
  };
}();
'use strict';

/************************************************************
  message
*************************************************************/
var Message = function () {
  var NAME = 'Cosmos.Message';
  var Status = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error'
  };
  var Config = {
    CONTAINER: '#message-container',
    CLOSE_TEXT: '<i class="fa fa-times" aria-hidden="true"></i>',
    CLOSE_CLASS: 'btn-close-message',
    BOX_CLASS: 'message-box'
  };

  /**
   * add '.message-box' into '#message-container'
   * 
   * @param  {String} message
   * @param  {String} status  ['info','success','warning','error']
   */
  var showMessage = function showMessage(message) {
    var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Status.INFO;

    var c, b, span, btn;

    // create message box
    c = document.querySelector(Config.CONTAINER); // container
    b = document.createElement('DIV'); // message box
    span = document.createElement('SPAN'); // message text
    btn = document.createElement('BUTTON'); // close button
    span.textContent = message;
    btn.innerHTML = Config.CLOSE_TEXT;
    btn.classList.add(Config.CLOSE_CLASS);
    btn.addEventListener('click', _closeButtonHandler);
    b.classList.add(Config.BOX_CLASS);
    b.classList.add(status);
    // append child
    b.appendChild(span);
    b.appendChild(btn);
    c.appendChild(b);
  };

  var load = function load() {
    // add event listener - close buttons
    var btns = document.querySelectorAll('.' + Config.CLOSE_CLASS);
    if (btns.length == 0) {
      return;
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = btns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var btn = _step.value;

        btn.addEventListener('click', _closeButtonHandler);
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
  };

  var _closeButtonHandler = function _closeButtonHandler(event) {
    var messageBox = event.currentTarget.parentNode;
    messageBox.style.opacity = '0';
    setTimeout(function () {
      messageBox.style.display = 'none';
    }, 600); // 0.6s
  };

  return {
    name: NAME,
    load: load,
    showMessage: showMessage
  };
}();
'use strict';

/************************************************************
  Modal
*************************************************************/
var Modal = function () {
  var NAME = 'Cosmos.Modal';

  var load = function load() {
    // modal open button.
    var openBtns = document.querySelectorAll('button[data-toggle="modal"]');
    if (openBtns.length > 0) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = openBtns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var btn = _step.value;

          btn.addEventListener('click', _modalOpenHandler);
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
    // modal close button.
    var closeBtns = document.querySelectorAll('.modal .modal-close');
    if (closeBtns.length > 0) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = closeBtns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _btn = _step2.value;

          _btn.addEventListener('click', _modalCloseHandler);
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
    // window onclick.
    window.onclick = function (event) {
      if (event.target.classList.contains('modal')) {
        _modalHide(event.target);
      }
    };
    // If modal doesn't have close button, add it.
    var modals = document.querySelectorAll('.modal');
    if (modals.length > 0) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = modals[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var m = _step3.value;

          _addCloseBtn(m);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  };

  var _modalCloseHandler = function _modalCloseHandler(event) {
    var m = event.currentTarget.parentNode.parentNode;
    _modalHide(m);
  };

  var _modalOpenHandler = function _modalOpenHandler(event) {
    var targetID = event.currentTarget.dataset.target;
    var t = document.querySelector(targetID);
    if (!t) {
      return;
    }

    _modalShow(t);
  };

  var _modalShow = function _modalShow(modal) {
    if (!modal.classList.contains('show')) {
      modal.classList.add('show');
    }
  };

  var _modalHide = function _modalHide(modal) {
    if (modal.classList.contains('show')) {
      modal.classList.remove('show');
    }
  };

  var _addCloseBtn = function _addCloseBtn(modal) {
    if (modal.querySelector('.modal-close')) {
      return;
    }
    var b = document.createElement('button');
    b.classList.add('modal-close');
    b.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    b.addEventListener('click', _modalCloseHandler);
    modal.querySelector('.modal-content').appendChild(b);
  };

  return {
    name: NAME,
    load: load
  };
}();
'use strict';

/************************************************************
  Parallax
*************************************************************/
var Parallax = function () {
  var NAME = 'Cosmos.Parallax';
  var ClassName = {
    PARALLAX: 'parallax',
    HIDE: 'hide'
  };

  var load = function load() {
    var ps = document.querySelectorAll('.' + ClassName.PARALLAX);
    if (ps.length == 0) {
      return;
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = ps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var p = _step.value;

        _process(p);
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
  };

  var _process = function _process(p) {
    var i = p.querySelector('img');
    if (!i) {
      return;
    }
    var h = p.dataset.height || i.clientHeight;
    // hide <img>
    i.classList.add('hide');
    // set parallax background image.
    p.style.backgroundImage = 'url(\'' + i.src + '\')';
    // set parallax height.
    p.style.height = h + 'px';
  };

  return {
    name: NAME,
    load: load
  };
}();
'use strict';

/************************************************************
  AJAX-loading
*************************************************************/
var AjaxLoading = function () {
  var NAME = 'Cosmos.Ajax-loading';
  var Config = {
    SELECTOR: '#ajax-loading',
    SHOW: 'show',
    LOADER_TAG: 'div',
    LOADER_CLASS: 'loader'
  };

  // public

  var load = function load() {
    var a = document.querySelector(Config.SELECTOR);
    if (!a) {
      return;
    }

    _appendLoader(a); // append loader element.
    // Register callback to jquery ajax.
    $(document).ajaxStart(function () {
      if (!a.classList.contains(Config.SHOW)) {
        a.classList.add(Config.SHOW);
      }
    }).ajaxStop(function () {
      if (a.classList.contains(Config.SHOW)) {
        a.classList.remove(Config.SHOW);
      }
    });
  };

  /**
   * append div.loader into element
   * 
   * @param  {element} a
   * @return {void}
   */
  var _appendLoader = function _appendLoader(a) {
    var loader = document.createElement(Config.LOADER_TAG);
    loader.classList.add(Config.LOADER_CLASS);
    a.appendChild(loader);
  };

  return {
    name: NAME,
    load: load
  };
}();
"use strict";

// initialize - loading modules.
(function () {
  AjaxLoading.load();
  Dropdown.load();
  Message.load();
  Modal.load();
  Nav.load();
  Parallax.load();
  ScrollTo.load();
})();

// define helper functions.
function submitConfirm(form, message) {
  Helper.submitConfirm(form, message);
}

function checkMobileSize() {
  return Helper.checkMobileSize();
}

function showMessage(message, status) {
  Message.showMessage(message, status);
}
// Just example
// console.log("Hello, World!");
"use strict";
//# sourceMappingURL=script.js.map
