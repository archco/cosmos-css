'use strict';

/*!
 * cosmos-css - personal practice css framework.
 * @version v0.4.1
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

/************************************************************
  util
*************************************************************/
var Util = function () {
  var NAME = 'Cosmos.Util';

  // public

  /**
   * event on selector
   * 
   * @param  string    selector   querySelector
   * @param  string    type       event type
   * @param  function  listener   event listener
   * @param  Boolean   useCapture
   * @return number|null
   */
  var eventOnSelector = function eventOnSelector(selector, type, listener) {
    var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var elements = document.querySelectorAll(selector);

    if (elements.length == 0) {
      return null;
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        element.addEventListener(type, listener, useCapture);
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

    return elements.length;
  };

  return {
    name: NAME,
    eventOnSelector: eventOnSelector
  };
}();
'use strict';

/************************************************************
  Color
*************************************************************/
var Color = function () {
  var NAME = 'Cosmos.Color';

  // public

  /**
   * hexToRgb
   * @link http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   * @param  string  hex
   * @return array|null
   */
  var hexToRgb = function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
  };

  /**
   * rgb values to hex color string
   * 
   * @param  number r
   * @param  number g
   * @param  number b
   * @return string
   */
  var rgbToHex = function rgbToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    return "#" + r + g + b;
  };

  /**
   * get rgb color's lightness value.
   * 
   * @param  string|array  color
   * @return number  (0 ~ 255)
   */
  var lightness = function lightness(color) {
    var r = void 0,
        g = void 0,
        b = void 0;
    if (typeof color == 'string') {
      var rgb = hexToRgb(color);
      r = rgb[0];
      g = rgb[1];
      b = rgb[2];
    } else if (Array.isArray(color)) {
      r = color[0];
      g = color[1];
      b = color[2];
    } else {
      throw new Error('parameter only "hex color" or "rgb array"');
    }
    // Color lightness formula.
    // @link https://www.w3.org/TR/AERT#color-contrast
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  return {
    name: NAME,
    hexToRgb: hexToRgb,
    rgbToHex: rgbToHex,
    lightness: lightness
  };
}();
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
    Util.eventOnSelector('.' + ClassName.TOGGLE_BTN, 'click', _toggleHandler);

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
    // toggling dropdown content.
    Util.eventOnSelector('.' + ClassName.TOGGLE, 'click', _toggleButtonHandler);

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', _otherClickHandler);
  };

  var _toggleButtonHandler = function _toggleButtonHandler(event) {
    var c = event.currentTarget.parentNode.querySelector('.' + ClassName.CONTENT);
    if (c) {
      c.classList.toggle(ClassName.SHOW);
    }
  };

  var _otherClickHandler = function _otherClickHandler(event) {
    var t = event.target;

    if (t.classList.contains(ClassName.TOGGLE)) {
      // dropdown
      var dropdown = t.parentNode;
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

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = ds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var d = _step.value;

        var c = d.querySelector('.' + ClassName.CONTENT);
        if (t && t == d) {
          continue;
        } // except target
        if (c.classList.contains(ClassName.SHOW)) {
          c.classList.remove(ClassName.SHOW);
        }
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
      $('html,body').animate({ scrollTop: top }, 'slow', 'swing');
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
    return $(window).scrollTop();
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
    Util.eventOnSelector('.' + Config.CLOSE_CLASS, 'click', _closeButtonHandler);
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
  var Selector = {
    OPEN: 'button[data-toggle="modal"]',
    CLOSE: '.modal .modal-close'
  };
  var ClassName = {
    MODAL: 'modal',
    CONTENT: 'modal-content',
    CLOSE: 'modal-close',
    SHOW: 'show'
  };
  var Config = {
    CLOSE_TEXT: '<i class="fa fa-times" aria-hidden="true"></i>'
  };

  // public

  var load = function load() {
    // modal open button.
    Util.eventOnSelector(Selector.OPEN, 'click', _modalOpenHandler);

    // modal close button.
    Util.eventOnSelector(Selector.CLOSE, 'click', _modalCloseHandler);

    // window onclick.
    window.addEventListener('click', function (event) {
      if (event.target.classList.contains(ClassName.MODAL)) {
        _modalHide(event.target);
      }
    });

    // If modal doesn't have close button, add it.
    var modals = document.querySelectorAll('.' + ClassName.MODAL);
    if (modals.length > 0) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = modals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var m = _step.value;

          _addCloseBtn(m);
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
  };

  var dialog = function dialog(text) {
    var m = document.createElement('div'); // modal
    var c = document.createElement('div'); // modal-content
    // modal-content
    c.classList.add(ClassName.CONTENT);
    c.textContent = text;
    // modal
    m.classList.add(ClassName.MODAL);
    m.appendChild(c);
    _addCloseBtn(m);
    document.body.appendChild(m);
    // show
    _modalShow(m);
  };

  // private

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
    if (!modal.classList.contains(ClassName.SHOW)) {
      modal.classList.add(ClassName.SHOW);
    }
  };

  var _modalHide = function _modalHide(modal) {
    if (modal.classList.contains(ClassName.SHOW)) {
      modal.classList.remove(ClassName.SHOW);
    }
  };

  var _addCloseBtn = function _addCloseBtn(modal) {
    if (modal.querySelector('.' + ClassName.CLOSE)) {
      return;
    }
    var b = document.createElement('button');
    b.classList.add(ClassName.CLOSE);
    b.innerHTML = Config.CLOSE_TEXT;
    b.addEventListener('click', _modalCloseHandler);
    modal.querySelector('.' + ClassName.CONTENT).appendChild(b);
  };

  return {
    name: NAME,
    load: load,
    dialog: dialog
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
