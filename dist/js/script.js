/*!
 * cosmos-css - The css framework for personal practice.
 * @version v0.8.2
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  util
*************************************************************/
var Util = function () {
  var NAME = 'Cosmos.Util';

  var Util = function () {
    function Util() {
      _classCallCheck(this, Util);
    }

    _createClass(Util, null, [{
      key: 'eventOnSelector',


      /**
       * event on selector
       * 
       * @param  string    selector   querySelector
       * @param  string    type       event type
       * @param  function  listener   event listener
       * @param  Boolean   useCapture
       * @return number|null
       */
      value: function eventOnSelector(selector, type, listener) {
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
      }

      /**
       * find ancestor by selector
       * @param element  element  current element
       * @param string   selector
       */

    }, {
      key: 'findAncestor',
      value: function findAncestor(element, selector) {
        do {
          element = element.parentElement;
        } while (!element.matches(selector));
        return element;
      }

      /**
       * wrap elements by div.wrapper
       * @param  string  target  querySelector
       * @param  string  wrapper wrapper's class name
       * @return void
       */

    }, {
      key: 'wrap',
      value: function wrap(target, wrapper) {
        var elements = document.querySelectorAll(target);
        var div = document.createElement('div');
        div.classList.add(wrapper);

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var el = _step2.value;

            var parent = el.parentNode;
            var sibling = el.nextSibling;

            div.appendChild(el);

            if (sibling) {
              parent.insertBefore(div, sibling);
            } else {
              parent.appendChild(div);
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

      /**
       * wrap all elements inside to div.wrapper
       * @param  string  target  querySelector
       * @param  string  wrapper wrapper's class name
       * @return void
       */

    }, {
      key: 'wrapAll',
      value: function wrapAll(target, wrapper) {
        var elements = document.querySelectorAll(target);
        var div = document.createElement('div');
        div.classList.add(wrapper);
        var parent = elements[0].parentNode;
        var sibling = elements[0].nextSibling;

        elements.forEach(function (elm) {
          div.appendChild(elm);
        });

        if (sibling) {
          parent.insertBefore(div, sibling);
        } else {
          parent.appendChild(div);
        }
      }
    }, {
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Util;
  }();

  return Util;
}();

exports.default = Util;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  Color
*************************************************************/
var Color = function () {
  var NAME = 'Cosmos.Color';
  var Config = {
    lightnessPoint: 166, // 65%
    darkDefault: '#000000',
    lightDefault: '#FFFFFF'
  };

  var Color = function () {
    function Color(color) {
      _classCallCheck(this, Color);

      this._color = Color.colorToArray(color);
    }

    _createClass(Color, [{
      key: 'getContrast',
      value: function getContrast(dark, light) {
        return Color.contrast(this._color, dark, light);
      }

      // static methods

    }], [{
      key: 'colorToArray',


      /**
       * color to rgb array
       * @param  string|array color
       * @return array  [red, green, blue]
       */
      value: function colorToArray(color) {
        var array = [];
        if (typeof color == 'string') {
          array = Color.hexToRgb(color);
        } else if (Array.isArray(color)) {
          array = color;
        } else {
          throw new Error('parameter only "hex color" or "rgb array"');
        }
        return array;
      }

      /**
       * hexToRgb
       * @link http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
       * @param  string  hex
       * @return array|null
       */

    }, {
      key: 'hexToRgb',
      value: function hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
          return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
      }

      /**
       * rgb values to hex color string
       * 
       * @param  number r
       * @param  number g
       * @param  number b
       * @return string
       */

    }, {
      key: 'rgbToHex',
      value: function rgbToHex(r, g, b) {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
        return "#" + r + g + b;
      }
    }, {
      key: 'lightness',


      /**
       * get rgb color's lightness value.
       * 
       * @param  string|array  color
       * @return number  (0 ~ 255)
       */
      value: function lightness(color) {
        var rgb = Color.colorToArray(color);
        // Color lightness formula.
        // @link https://www.w3.org/TR/AERT#color-contrast
        return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      }
    }, {
      key: 'contrast',


      /**
       * get contrast color
       * @param  array|string color
       * @param  string  dark
       * @param  string  light
       * @return string  dark or light
       */
      value: function contrast(color) {
        var dark = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config.darkDefault;
        var light = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Config.lightDefault;

        var lightness = Color.lightness(color);
        if (lightness > Config.lightnessPoint) {
          return dark;
        } else {
          return light;
        }
      }
    }, {
      key: 'name',
      get: function get() {
        return NAME;
      }
    }]);

    return Color;
  }();

  return Color;
}();

exports.default = Color;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

  var AjaxLoading = function () {
    function AjaxLoading() {
      _classCallCheck(this, AjaxLoading);
    }

    _createClass(AjaxLoading, [{
      key: 'init',


      // public

      value: function init() {
        var a = document.querySelector(Config.SELECTOR);
        if (!a) {
          return;
        }

        this._appendLoader(a); // append loader element.
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
      }

      // private

      /**
       * append div.loader into element
       * @param  {element} a
       * @return {void}
       */

    }, {
      key: '_appendLoader',
      value: function _appendLoader(a) {
        var loader = document.createElement(Config.LOADER_TAG);
        loader.classList.add(Config.LOADER_CLASS);
        a.appendChild(loader);
      }
    }], [{
      key: 'load',
      value: function load() {
        var a = new AjaxLoading();
        a.init();
      }
    }, {
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return AjaxLoading;
  }();

  return AjaxLoading;
}();

exports.default = AjaxLoading;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
    Collapse
*************************************************************/
var Collapse = function () {
  var NAME = 'Cosmos.Collapse';
  var ClassName = {
    TOGGLE: 'collapse-toggle',
    PANNEL: 'collapse-panel',
    ACTIVE: 'active',
    SHOW: 'show',
    ACCORDION: 'accordion',
    A_HEAD: 'accordion-head',
    A_BODY: 'accordion-body'
  };
  var Selector = {
    TOGGLE: '.' + ClassName.TOGGLE,
    ACCORDION: '.' + ClassName.ACCORDION,
    A_HEAD: '.' + ClassName.ACCORDION + ' .' + ClassName.A_HEAD,
    C_ACTIVE: '.' + ClassName.TOGGLE + '.' + ClassName.ACTIVE,
    A_ACTIVE: '.' + ClassName.ACCORDION + ' .' + ClassName.A_HEAD + '.' + ClassName.ACTIVE
  };

  var Collapse = function () {
    function Collapse() {
      _classCallCheck(this, Collapse);
    }

    _createClass(Collapse, [{
      key: 'init',


      // public
      // 

      value: function init() {
        // collapse toggle listener
        _util2.default.eventOnSelector(Selector.TOGGLE, 'click', this._toggleHandler.bind(this));
        // accordion head listener
        _util2.default.eventOnSelector(Selector.A_HEAD, 'click', this._headClickHandler.bind(this));
        // Handle on activated collapse and accordion.
        this._activatedCollapse();
        this._activatedAccordion();
      }

      // static
      // 

    }, {
      key: '_toggleHandler',


      // private
      // 

      value: function _toggleHandler(event) {
        var t = event.currentTarget;
        var p = document.querySelector(t.dataset.target);

        this._collapseToggle(t, p);
      }
    }, {
      key: '_headClickHandler',
      value: function _headClickHandler(event) {
        var h = event.currentTarget;
        var b = h.nextElementSibling;
        var a = _util2.default.findAncestor(h, Selector.ACCORDION);

        if (h.classList.contains(ClassName.ACTIVE)) {
          this._collapseToggle(h, b);
        } else {
          this._allClose(a);
          this._collapseToggle(h, b);
        }
      }
    }, {
      key: '_collapseToggle',
      value: function _collapseToggle(head, body) {
        head.classList.toggle(ClassName.ACTIVE);
        this._toggleMaxHeight(body);
      }
    }, {
      key: '_collapseClose',
      value: function _collapseClose(head, body) {
        head.classList.remove(ClassName.ACTIVE);
        body.style.maxHeight = null;
      }
    }, {
      key: '_allClose',
      value: function _allClose(accordion) {
        var heads = accordion.querySelectorAll(Selector.A_HEAD);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = heads[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var h = _step.value;

            if (h.classList.contains(ClassName.ACTIVE)) {
              var b = h.nextElementSibling;
              this._collapseClose(h, b);
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
      }
    }, {
      key: '_activatedCollapse',
      value: function _activatedCollapse() {
        // Collapse can multiple active.
        var ts = document.querySelectorAll(Selector.C_ACTIVE);
        if (ts.length == 0) {
          return;
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = ts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var t = _step2.value;

            var b = t.nextElementSibling;
            this._toggleMaxHeight(b);
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
    }, {
      key: '_activatedAccordion',
      value: function _activatedAccordion() {
        // Only one accordion can be active at a time. After all, only the last one will be activated.
        var hs = document.querySelectorAll(Selector.A_ACTIVE);
        if (hs.length == 0) {
          return;
        }

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = hs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var h = _step3.value;

            var a = _util2.default.findAncestor(h, Selector.ACCORDION);
            this._allClose(a);
            h.click();
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

      /**
       * _toggleMaxHeight
       * @param  {Element} elm
       * @return {void}
       */

    }, {
      key: '_toggleMaxHeight',
      value: function _toggleMaxHeight(elm) {
        if (elm.style.maxHeight) {
          elm.style.maxHeight = null;
        } else {
          elm.style.maxHeight = elm.scrollHeight + 'px';
        }
      }
    }], [{
      key: 'load',
      value: function load() {
        var c = new Collapse();
        c.init();
      }
    }, {
      key: 'name',
      get: function get() {
        return NAME;
      }
    }]);

    return Collapse;
  }();

  return Collapse;
}();

exports.default = Collapse;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  var Selector = {
    DROPDOWN: '.' + ClassName.DROPDOWN,
    TOGGLE: '.' + ClassName.TOGGLE,
    CONTENT: '.' + ClassName.CONTENT
  };

  var Dropdown = function () {
    function Dropdown() {
      _classCallCheck(this, Dropdown);
    }

    _createClass(Dropdown, [{
      key: 'init',


      // public

      value: function init() {
        // toggling dropdown content.
        _util2.default.eventOnSelector(Selector.TOGGLE, 'click', this._toggleButtonHandler.bind(this));

        // Close the dropdown menu if the user clicks outside of it
        window.addEventListener('click', this._otherClickHandler.bind(this));
      }

      // private

    }, {
      key: '_toggleButtonHandler',
      value: function _toggleButtonHandler(event) {
        var c = event.currentTarget.parentNode.querySelector(Selector.CONTENT);
        if (c) {
          c.classList.toggle(ClassName.SHOW);
        }
      }
    }, {
      key: '_otherClickHandler',
      value: function _otherClickHandler(event) {
        var t = event.target;

        if (t.classList.contains(ClassName.TOGGLE)) {
          // dropdown
          var dropdown = t.parentNode;
          this._closeElseDropdown(dropdown);
        } else {
          // not dropdown
          this._closeElseDropdown();
        }
      }

      /**
       * close dropdown contents
       * 
       * @param  {element} t  except target
       * @return {void}
       */

    }, {
      key: '_closeElseDropdown',
      value: function _closeElseDropdown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var ds = document.querySelectorAll(Selector.DROPDOWN);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = ds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var d = _step.value;

            var c = d.querySelector(Selector.CONTENT);
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
      }
    }], [{
      key: 'load',
      value: function load() {
        var d = new Dropdown();
        d.init();
      }
    }, {
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Dropdown;
  }();

  return Dropdown;
}();

exports.default = Dropdown;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  Helper
*************************************************************/
var Helper = function () {
  var NAME = 'Cosmos.Helper';

  var Helper = function () {
    function Helper() {
      _classCallCheck(this, Helper);
    }

    _createClass(Helper, null, [{
      key: 'submitConfirm',


      /**
       * submitConfirm - confirm 을 취소하면 event.preventDefault()
       * 
       * @param  {element} form
       * @param  {sting} message
       * @return {void}
       */
      value: function submitConfirm(form) {
        var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Are you confirm?';

        if (!form) {
          throw new Error('Form target is not exist.');
        }
        form.addEventListener('submit', function (event) {
          if (!confirm(message)) {
            event.preventDefault();
          }
        });
      }

      /**
       * check mobile size
       * 
       * @return {boolean}
       */

    }, {
      key: 'checkMobileSize',
      value: function checkMobileSize() {
        if (window.innerWidth < 800) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Helper;
  }();

  return Helper;
}();

exports.default = Helper;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  message
*************************************************************/
var Message = function () {
  var NAME = 'Cosmos.Message';
  var Status = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    DANGER: 'danger',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var Config = {
    CONTAINER: '#message-container',
    CLOSE_TEXT: '<i class="fa fa-times" aria-hidden="true"></i>',
    CLOSE_CLASS: 'btn-close-message',
    BOX_CLASS: 'message-box'
  };

  var Message = function () {
    function Message() {
      _classCallCheck(this, Message);
    }

    _createClass(Message, [{
      key: 'init',


      // public

      value: function init() {
        // add event listener - close buttons
        _util2.default.eventOnSelector('.' + Config.CLOSE_CLASS, 'click', Message._closeButtonHandler);
      }
    }], [{
      key: 'load',
      value: function load() {
        var m = new Message();
        m.init();
      }

      /**
       * add '.message-box' into '#message-container'
       * 
       * @param  {String} message
       * @param  {String} status  ['info','success','warning','error']
       */

    }, {
      key: 'showMessage',
      value: function showMessage(message) {
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
        btn.addEventListener('click', Message._closeButtonHandler);
        b.classList.add(Config.BOX_CLASS);
        b.classList.add(status);
        // append child
        b.appendChild(span);
        b.appendChild(btn);
        c.appendChild(b);
      }
    }, {
      key: '_closeButtonHandler',
      value: function _closeButtonHandler(event) {
        var messageBox = event.currentTarget.parentNode;
        messageBox.style.opacity = '0';
        setTimeout(function () {
          messageBox.style.display = 'none';
        }, 600); // 0.6s
      }
    }, {
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Message;
  }();

  return Message;
}();

exports.default = Message;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  Modal
*************************************************************/
var Modal = function () {
  var NAME = 'Cosmos.Modal';
  var ClassName = {
    MODAL: 'modal',
    CONTENT: 'modal-content',
    CLOSE: 'modal-close',
    SHOW: 'show'
  };
  var Selector = {
    MODAL: '.' + ClassName.MODAL,
    OPEN: 'button[data-toggle="modal"]',
    CLOSE: '.' + ClassName.MODAL + ' .' + ClassName.CLOSE,
    CONTENT: '.' + ClassName.CONTENT
  };
  var Config = {
    CLOSE_TEXT: '<i class="fa fa-times" aria-hidden="true"></i>'
  };

  var Modal = function () {
    function Modal() {
      _classCallCheck(this, Modal);
    }

    _createClass(Modal, [{
      key: 'init',


      // public

      value: function init() {
        var _this = this;

        // modal open button.
        _util2.default.eventOnSelector(Selector.OPEN, 'click', this._modalOpenHandler.bind(this));

        // modal close button.
        _util2.default.eventOnSelector(Selector.CLOSE, 'click', this._modalCloseHandler.bind(this));

        // window onclick.
        window.addEventListener('click', function (event) {
          if (event.target.classList.contains(ClassName.MODAL)) {
            _this._modalHide(event.target);
          }
        });

        // If modal doesn't have close button, add it.
        var modals = document.querySelectorAll(Selector.MODAL);
        if (modals.length > 0) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = modals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var m = _step.value;

              this._addCloseBtn(m);
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
      }
    }, {
      key: 'makeDialog',
      value: function makeDialog(text) {
        var m = document.createElement('div'); // modal
        var c = document.createElement('div'); // modal-content
        // modal-content
        c.classList.add(ClassName.CONTENT);
        c.textContent = text;
        // modal
        m.classList.add(ClassName.MODAL);
        m.appendChild(c);
        this._addCloseBtn(m);
        document.body.appendChild(m);
        // show
        this._modalShow(m);
      }

      // private

    }, {
      key: '_modalCloseHandler',
      value: function _modalCloseHandler(event) {
        var m = event.currentTarget.parentNode.parentNode;
        this._modalHide(m);
      }
    }, {
      key: '_modalOpenHandler',
      value: function _modalOpenHandler(event) {
        var targetID = event.currentTarget.dataset.target;
        var t = document.querySelector(targetID);
        if (!t) {
          return;
        }

        this._modalShow(t);
      }
    }, {
      key: '_modalShow',
      value: function _modalShow(modal) {
        if (!modal.classList.contains(ClassName.SHOW)) {
          modal.classList.add(ClassName.SHOW);
        }
      }
    }, {
      key: '_modalHide',
      value: function _modalHide(modal) {
        if (modal.classList.contains(ClassName.SHOW)) {
          modal.classList.remove(ClassName.SHOW);
        }
      }
    }, {
      key: '_addCloseBtn',
      value: function _addCloseBtn(modal) {
        if (modal.querySelector(Selector.CLOSE)) {
          return;
        }
        var b = document.createElement('button');
        b.classList.add(ClassName.CLOSE);
        b.innerHTML = Config.CLOSE_TEXT;
        b.addEventListener('click', this._modalCloseHandler.bind(this));
        modal.querySelector(Selector.CONTENT).appendChild(b);
      }
    }], [{
      key: 'load',
      value: function load() {
        var m = new Modal();
        m.init();
      }
    }, {
      key: 'dialog',
      value: function dialog(text) {
        var m = new Modal();
        m.makeDialog(text);
      }
    }, {
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Modal;
  }();

  return Modal;
}();

exports.default = Modal;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  nav
*************************************************************/
var Nav = function () {
  var NAME = 'Cosmos.Nav';
  var ClassName = {
    NAVBAR: 'navbar',
    TOGGLE_BTN: 'menu-toggle',
    CHANGE: 'change',
    USE_ACTIVATOR: 'use-activator'
  };
  var Selector = {
    TOGGLE_BTN: 'nav.' + ClassName.NAVBAR + ' .' + ClassName.TOGGLE_BTN,
    USE_ACTIVATOR: 'nav.' + ClassName.NAVBAR + ' ul.' + ClassName.USE_ACTIVATOR
  };
  var MenuGroups = ['.menu-float-left', '.menu-float-right', '.menu-left', '.menu-right', '.menu-center', '.menu-between', '.menu-around'];

  var Nav = function () {
    function Nav() {
      _classCallCheck(this, Nav);
    }

    _createClass(Nav, [{
      key: 'init',


      // public

      value: function init() {
        _util2.default.eventOnSelector(Selector.TOGGLE_BTN, 'click', this._toggleHandler);

        this._activator(Selector.USE_ACTIVATOR);

        // handle jQuery slide style.
        $(window).resize(function () {
          var w = $(window).width();
          var menu = $("nav ul");
          if (w > 768 && menu.is(':hidden')) {
            menu.removeAttr('style');
          }
        });
      }

      // private

    }, {
      key: '_toggleHandler',
      value: function _toggleHandler(event) {
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
      }

      /**
       * _activator (beta version)
       * @param  string  selector
       * @return void
       */

    }, {
      key: '_activator',
      value: function _activator(selector) {
        var links = document.querySelectorAll(selector + ' a');
        if (links.length == 0) {
          return;
        }
        var l = document.location.pathname;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var a = _step2.value;

            if (lastTerm(l) == lastTerm(a.href)) {
              //console.log(lastTerm(l), lastTerm(a.href));
              a.parentNode.classList.add('active');
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

        function lastTerm(string) {
          return string.substr(string.lastIndexOf("/"));
        }
      }
    }], [{
      key: 'load',
      value: function load() {
        var n = new Nav();
        n.init();
      }
    }, {
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Nav;
  }();

  return Nav;
}();

exports.default = Nav;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  Parallax
*************************************************************/
var Parallax = function () {
  var NAME = 'Cosmos.Parallax';
  var ClassName = {
    PARALLAX: 'parallax',
    HIDE: 'display-hide'
  };

  var Parallax = function () {
    function Parallax() {
      _classCallCheck(this, Parallax);
    }

    _createClass(Parallax, [{
      key: 'init',


      // public

      value: function init() {
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

            this._process(p);
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

      // private

    }, {
      key: '_process',
      value: function _process(p) {
        var i = p.querySelector('img');
        if (!i) {
          return;
        }
        var h = p.dataset.height || i.clientHeight;
        // hide <img>
        i.classList.add(ClassName.HIDE);
        // set parallax background image.
        p.style.backgroundImage = 'url(\'' + i.src + '\')';
        // set parallax height.
        p.style.height = h + 'px';
      }
    }], [{
      key: 'load',
      value: function load() {
        var p = new Parallax();
        p.init();
      }
    }, {
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Parallax;
  }();

  return Parallax;
}();

exports.default = Parallax;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  Scaffolding
*************************************************************/
var Scaffolding = function () {
  var NAME = 'Cosmos.Scaffolding';

  var Scaffolding = function () {
    function Scaffolding() {
      _classCallCheck(this, Scaffolding);
    }

    _createClass(Scaffolding, [{
      key: 'init',


      // public

      value: function init() {
        // wrap table.responsive
        _util2.default.wrap('table.responsive', 'table-responsive-wrapper');
      }
    }], [{
      key: 'load',
      value: function load() {
        var s = new Scaffolding();
        s.init();
      }
    }, {
      key: 'name',


      // static
      get: function get() {
        return NAME;
      }
    }]);

    return Scaffolding;
  }();

  return Scaffolding;
}();

exports.default = Scaffolding;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  scroll-to
*************************************************************/
var ScrollTo = function () {
  var NAME = 'Cosmos.ScrollTo';
  var Config = {
    TOTOP: '#scroll-to-top',
    SHOW: 'show'
  };

  var ScrollTo = function () {
    function ScrollTo() {
      _classCallCheck(this, ScrollTo);

      this.btnToTop = document.querySelector(Config.TOTOP);
    }

    // static

    _createClass(ScrollTo, [{
      key: 'init',


      // public

      value: function init() {
        if (!this.btnToTop) {
          return;
        }

        // scroll-to-top button listener
        this.btnToTop.addEventListener('click', function () {
          var top = 0;
          $('html,body').animate({ scrollTop: top }, 'slow', 'swing');
        });

        // scroll listener
        window.addEventListener('scroll', this._scrollHandler.bind(this));
      }

      // private

    }, {
      key: '_scrollHandler',
      value: function _scrollHandler() {
        var top = this._getScrollTop();
        var isShow = this.btnToTop.classList.contains(Config.SHOW);

        if (top > 500 && !isShow) {
          this.btnToTop.classList.add(Config.SHOW);
        } else if (top <= 500 && isShow) {
          this.btnToTop.classList.remove(Config.SHOW);
        }
      }
    }, {
      key: '_getScrollTop',
      value: function _getScrollTop() {
        return $(window).scrollTop();
      }
    }, {
      key: '_getScrollBottom',
      value: function _getScrollBottom() {
        return $(document).height();
      }
    }], [{
      key: 'load',
      value: function load() {
        var s = new ScrollTo();
        s.init();
      }
    }, {
      key: 'name',
      get: function get() {
        return NAME;
      }
    }]);

    return ScrollTo;
  }();

  return ScrollTo;
}();

exports.default = ScrollTo;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  SipleCRUD
*************************************************************/
var SimpleCRUD = function () {
  var NAME = 'Cosmos.SimpleCRUD';
  var ClassName = {
    ITEM: 'simple-crud-item',
    VIEW_READ: 'simple-crud-view-read',
    VIEW_UPDATE: 'simple-crud-view-update',
    VIEW_DELETE: 'simple-crud-view-delete',
    BTN_UPDATE: 'simple-crud-update',
    BTN_DELETE: 'simple-crud-delete',
    BTN_CANCEL: 'simple-crud-cancel',
    SHOW: 'show'
  };
  var Selector = {
    ITEM: '.' + ClassName.ITEM,
    VIEW: '[class*="simple-crud-view-"]',
    VIEW_READ: '.' + ClassName.VIEW_READ,
    VIEW_UPDATE: '.' + ClassName.VIEW_UPDATE,
    VIEW_DELETE: '.' + ClassName.VIEW_DELETE,
    BTN_UPDATE: 'button.' + ClassName.BTN_UPDATE,
    BTN_DELETE: 'button.' + ClassName.BTN_DELETE,
    BTN_CANCEL: 'button.' + ClassName.BTN_CANCEL
  };

  var SimpleCRUD = function () {
    function SimpleCRUD() {
      _classCallCheck(this, SimpleCRUD);
    }

    _createClass(SimpleCRUD, [{
      key: 'init',


      // public
      //

      value: function init() {
        var _this = this;

        _util2.default.eventOnSelector(Selector.BTN_UPDATE, 'click', function (e) {
          _this._switchView(e.currentTarget, 'update');
        });
        _util2.default.eventOnSelector(Selector.BTN_DELETE, 'click', function (e) {
          _this._switchView(e.currentTarget, 'delete');
        });
        _util2.default.eventOnSelector(Selector.BTN_CANCEL, 'click', function (e) {
          _this._switchView(e.currentTarget, 'read');
        });
      }

      // static
      // 

    }, {
      key: '_getNodes',


      // private
      // 

      value: function _getNodes(element) {
        var item = _util2.default.findAncestor(element, Selector.ITEM);
        var current = _util2.default.findAncestor(element, Selector.VIEW);

        return {
          item: item,
          current: current,
          read: item.querySelector(Selector.VIEW_READ),
          update: item.querySelector(Selector.VIEW_UPDATE),
          delete: item.querySelector(Selector.VIEW_DELETE)
        };
      }
    }, {
      key: '_switchView',
      value: function _switchView(element, name) {
        var nodes = this._getNodes(element);
        // console.log(NAME, 'switchView: ' + name);
        nodes.current.classList.remove(ClassName.SHOW);
        nodes[name].classList.add(ClassName.SHOW);
      }
    }], [{
      key: 'load',
      value: function load() {
        var s = new SimpleCRUD();
        s.init();
      }
    }, {
      key: 'name',
      get: function get() {
        return NAME;
      }
    }]);

    return SimpleCRUD;
  }();

  return SimpleCRUD;
}();

exports.default = SimpleCRUD;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  Tab
*************************************************************/
var Tab = function () {
  var NAME = 'Cosmos.Tab';
  var ClassName = {
    TAB: 'tab',
    LINK: 'tab-link',
    CONTENT: 'tab-content',
    SHOW: 'show',
    HIDE: 'hide',
    ACTIVE: 'active',
    FADE: 'fade',
    EFFECT_FADE: 'tab-fade-effect'
  };
  var Selector = {
    TAB: '.' + ClassName.TAB,
    LINK: '.' + ClassName.LINK,
    CONTENT: '.' + ClassName.CONTENT
  };

  var Tab = function () {
    function Tab() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Selector.TAB;

      _classCallCheck(this, Tab);

      Selector.TAB = selector;
    }

    // public
    // 

    _createClass(Tab, [{
      key: 'init',
      value: function init() {
        // add event handler on links.
        _util2.default.eventOnSelector(Selector.LINK, 'click', this._tabHandle.bind(this));

        // initialize tabs.
        var tabs = this._getTabs();
        if (tabs.length > 0) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = tabs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var t = _step.value;

              this._loadTab(t);
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
      }
    }, {
      key: 'setDefault',
      value: function setDefault(linkIndex) {
        var _this = this;

        var tabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (tabIndex == null) {
          // all tabs.
          var tabs = this._getTabs();
          tabs.forEach(function (e, i, a) {
            _this._default(linkIndex, i);
          });
        } else {
          this._default(linkIndex, tabIndex);
        }
      }

      // static
      // 

    }, {
      key: '_tabHandle',


      // private
      // 

      value: function _tabHandle(event) {
        var a = event.currentTarget;
        var tab = _util2.default.findAncestor(a, Selector.TAB);
        var links = tab.querySelectorAll(Selector.LINK);
        var content = this._getContent(a);

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var l = _step2.value;

            // content hide
            var c = this._getContent(l);
            c.classList.remove(ClassName.SHOW);
            // remove link.active
            l.classList.remove(ClassName.ACTIVE);
          }
          // active and show content.
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

        a.classList.add(ClassName.ACTIVE);
        content.classList.add(ClassName.SHOW);
        event.preventDefault();
      }
    }, {
      key: '_extractID',
      value: function _extractID(str) {
        var result = /([#])\S+/.exec(str);

        return result == null ? null : result[0];
      }
    }, {
      key: '_getContent',
      value: function _getContent(link) {
        return document.querySelector(this._extractID(link.href));
      }
    }, {
      key: '_getTabs',
      value: function _getTabs() {
        return document.querySelectorAll(Selector.TAB);
      }
    }, {
      key: '_loadTab',
      value: function _loadTab(tab) {
        var links = tab.querySelectorAll(Selector.LINK);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = links[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var l = _step3.value;

            // set default.
            if (l.classList.contains(ClassName.ACTIVE)) {
              l.click();
            }
            // tab fade effect.
            if (tab.classList.contains(ClassName.FADE)) {
              this._getContent(l).classList.add(ClassName.EFFECT_FADE);
            }
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
    }, {
      key: '_default',
      value: function _default(linkIndex, tabIndex) {
        var tab = this._getTabs()[tabIndex];
        var link = tab.querySelectorAll(Selector.LINK)[linkIndex];
        link.click();
      }
    }], [{
      key: 'load',
      value: function load() {
        var t = new Tab();
        t.init();
      }
    }, {
      key: 'name',
      get: function get() {
        return NAME;
      }
    }]);

    return Tab;
  }();

  return Tab;
}();

exports.default = Tab;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
	"name": "cosmos-css",
	"version": "0.8.2",
	"description": "The css framework for personal practice.",
	"main": "dist/js/script.js",
	"module": "src/js/load.js",
	"sass": "src/scss/style.scss",
	"style": "dist/css/style.css",
	"directories": {
		"test": "tests"
	},
	"dependencies": {
		"scss-palette": "^0.2.0"
	},
	"devDependencies": {
		"babel-core": "^6.23.1",
		"babel-loader": "^6.3.2",
		"babel-preset-es2015": "^6.22.0",
		"concurrently": "^3.3.0",
		"eslint": "^3.12.1",
		"jquery": "^3.1.1",
		"node-sass": "^4.5.0",
		"pug": "^2.0.0-beta6",
		"pug-cli": "^1.0.0-alpha6",
		"webpack": "^2.2.1"
	},
	"scripts": {
		"build": "npm run dev && npm run production",
		"dev": "npm run sass && npm run pug && npm run webpack",
		"watch": "node node_modules/concurrently/src/main \"npm run sass:watch\" \"npm run pug:watch\" \"npm run webpack:watch\"",
		"production": "npm run sass:min && npm run webpack:min",
		"test": "echo \"Error: no test specified\" && exit 1",
		"sass": "node node_modules/node-sass/bin/node-sass --source-map true src/scss/style.scss dist/css/style.css",
		"sass:min": "node node_modules/node-sass/bin/node-sass --output-style compressed src/scss/style.scss dist/css/style.min.css",
		"sass:watch": "npm run sass && npm run sass -- --watch",
		"pug": "node node_modules/pug-cli --pretty tests/views/test.pug tests/views/components.pug tests/views/modules.pug --out ./tests/html/",
		"pug:watch": "npm run pug -- --watch",
		"webpack": "node node_modules/webpack/bin/webpack",
		"webpack:watch": "npm run webpack && npm run webpack -- --watch",
		"webpack:min": "npm run webpack -- --optimize-minimize --output-filename script.min.js --devtool false"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/archco/cosmos-css.git"
	},
	"author": "archco",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/archco/cosmos-css/issues"
	},
	"homepage": "https://github.com/archco/cosmos-css#readme"
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _color = __webpack_require__(1);

var _color2 = _interopRequireDefault(_color);

var _scaffolding = __webpack_require__(10);

var _scaffolding2 = _interopRequireDefault(_scaffolding);

var _ajaxLoading = __webpack_require__(2);

var _ajaxLoading2 = _interopRequireDefault(_ajaxLoading);

var _dropdown = __webpack_require__(4);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _helper = __webpack_require__(5);

var _helper2 = _interopRequireDefault(_helper);

var _message = __webpack_require__(6);

var _message2 = _interopRequireDefault(_message);

var _modal = __webpack_require__(7);

var _modal2 = _interopRequireDefault(_modal);

var _nav = __webpack_require__(8);

var _nav2 = _interopRequireDefault(_nav);

var _parallax = __webpack_require__(9);

var _parallax2 = _interopRequireDefault(_parallax);

var _scrollTo = __webpack_require__(11);

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _tab = __webpack_require__(13);

var _tab2 = _interopRequireDefault(_tab);

var _collapse = __webpack_require__(3);

var _collapse2 = _interopRequireDefault(_collapse);

var _simpleCrud = __webpack_require__(12);

var _simpleCrud2 = _interopRequireDefault(_simpleCrud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize - loading modules.
_scaffolding2.default.load();
_ajaxLoading2.default.load();
_dropdown2.default.load();
_message2.default.load();
_modal2.default.load();
_nav2.default.load();
_parallax2.default.load();
_scrollTo2.default.load();
_tab2.default.load();
_collapse2.default.load();
_simpleCrud2.default.load();

// define global helper functions.
window.submitConfirm = _helper2.default.submitConfirm;
window.checkMobileSize = _helper2.default.checkMobileSize;
window.showMessage = _message2.default.showMessage;
window.modalDialog = _modal2.default.dialog;

// export
var version = __webpack_require__(14).version;
var Cosmos = {
  name: 'cosmos-css',
  version: 'v' + version,
  Util: _util2.default,
  Color: _color2.default
};

exports.default = Cosmos;

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map