/*!
 * cosmos-css - The css framework for personal practice.
 * @version v0.9.1
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
  CosmosModule
*************************************************************/
var CosmosModule = function () {
  function CosmosModule() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CosmosModule);

    this.setOption(option);
  }

  /**
   * module load
   * 
   * @return {void}
   */


  _createClass(CosmosModule, [{
    key: "init",


    /**
     * init - abstract method.
     * 
     * @return {void}
     */
    value: function init() {}

    /**
     * setOption
     * 
     * @param {Object} option
     */

  }, {
    key: "setOption",
    value: function setOption(option) {
      this.option = Object.assign({}, this.getDefaultOption(), option);
    }

    /**
     * getOption
     * 
     * @return {Object}
     */

  }, {
    key: "getOption",
    value: function getOption() {
      return this.option;
    }

    /**
     * getDefaultOption - abstract method.
     * 
     * @return {Object}
     */

  }, {
    key: "getDefaultOption",
    value: function getDefaultOption() {
      return {};
    }
  }], [{
    key: "load",
    value: function load() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var m = new this(option);
      m.init();
    }

    /**
     * get defaultOption
     * 
     * @return {Object}
     */

  }, {
    key: "defaultOption",
    get: function get() {
      var m = new this();
      return m.getDefaultOption();
    }
  }]);

  return CosmosModule;
}();

exports.default = CosmosModule;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  util
*************************************************************/
var Util = function () {
  var NAME = 'Cosmos.lib.Util';

  var Util = function () {
    function Util() {
      _classCallCheck(this, Util);
    }

    _createClass(Util, null, [{
      key: 'eventOnSelector',


      /**
       * event on selector
       * 
       * @param  {String}   selector   querySelector
       * @param  {String}   type       event type
       * @param  {Function} listener   event listener
       * @param  {Boolean}  useCapture
       * @return {number|null}
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
       * 
       * @param  {Element} element
       * @param  {String}  selector
       * @return {Element|null}
       */

    }, {
      key: 'findAncestor',
      value: function findAncestor(element, selector) {
        do {
          if (element == document.querySelector('html')) return null;
          element = element.parentElement;
        } while (!element.matches(selector));
        return element;
      }

      /**
       * wrap elements by div.wrapper
       * @param  {String} target  querySelector
       * @param  {String} wrapper wrapper's class name
       * @return {void}
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
       * @param  {String}  target  querySelector
       * @param  {String}  wrapper wrapper's class name
       * @return {void}
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

      /**
       * location.search to Object.
       * 
       * @return {Object|null}
       */

    }, {
      key: 'locationSearchToObject',
      value: function locationSearchToObject() {
        return this.searchToObject(window.location.search);
      }

      /**
       * searchToObject
       * 
       * @param  {String} search [HTMLAnchorElement.search]
       * @return {Object|null}
       */

    }, {
      key: 'searchToObject',
      value: function searchToObject(search) {
        if (search == '') return null;

        var queries = search.substring(1).split('&');
        var obj = {};

        queries.forEach(function (value) {
          var q = value.split('=');
          if (!q[1]) return;
          obj[decodeURIComponent(q[0])] = decodeURIComponent(q[1]);
        });

        return obj;
      }

      /**
       * returns true if 'big' contains 'small'.
       * 
       * @param  {mixed}  big
       * @param  {mixed}  small
       * @return {Boolean}
       */

    }, {
      key: 'isContains',
      value: function isContains(big, small) {
        if ((typeof big === 'undefined' ? 'undefined' : _typeof(big)) !== (typeof small === 'undefined' ? 'undefined' : _typeof(small))) return false;

        if (Array.isArray(big) && Array.isArray(small)) {
          var _ret = function () {
            var correct = 0;
            big.forEach(function (v) {
              if (small.includes(v)) correct++;
            });
            return {
              v: correct == small.length
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        } else if (Object(big) === big && Object(small) === small) {
          for (var p in small) {
            if (!(p in big && this.isContains(big[p], small[p]))) return false;
          }
          return true;
        } else {
          return big === small;
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Button
*************************************************************/
var Button = function () {
  var NAME = 'Cosmos.Button';
  var ClassName = {
    CLOSE: 'btn-close',
    POSITION_CORNER: 'at-corner',
    POSITION_RIGHT_MIDDLE: 'at-right-middle',
    HIDE: 'display-hide',
    REMOVEABLE: 'removeable',
    HIDEABLE: 'hideable'
  };
  var Selector = {
    CLOSE: '.' + ClassName.CLOSE,
    HAS_ACTION: '.' + ClassName.CLOSE + '.' + ClassName.REMOVEABLE + ', .' + ClassName.CLOSE + '.' + ClassName.HIDEABLE
  };
  // default option.
  var Default = {
    close_init_enable: true,
    close_action: 'remove', // remove | hide
    close_position: 'default', // default | corner | right_middle
    close_style: 'default', // default | icon | circle_default | circle_icon
    close_content: {
      default: '✖',
      icon: '<i class="fa fa-times" aria-hidden="true"></i>'
    }
  };

  var Button = function (_CosmosModule) {
    _inherits(Button, _CosmosModule);

    function Button() {
      _classCallCheck(this, Button);

      return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
      key: 'appendBtnClose',


      // public

      value: function appendBtnClose(element) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (this._hasBtnClose(element)) {
          console.log('already has .btn-close');
          return;
        }
        var btnClose = this._createBtnClose();
        var handler = callback || this._btnCloseClickHandler;

        btnClose.addEventListener('click', handler.bind(this));
        element.appendChild(btnClose);
      }
    }, {
      key: 'init',
      value: function init() {
        // btn-close addEventListener.
        if (this.option.close_init_enable) {
          _util2.default.eventOnSelector(Selector.HAS_ACTION, 'click', this._btnCloseClickHandler.bind(this));
        }
      }
    }, {
      key: 'getDefaultOption',
      value: function getDefaultOption() {
        return Default;
      }

      // private

    }, {
      key: '_btnCloseClickHandler',
      value: function _btnCloseClickHandler(event) {
        var btnClose = event.currentTarget;
        var element = btnClose.parentNode;
        var parent = element.parentNode;
        var action = this._getActionType(btnClose);

        if (action == 'hide') {
          element.classList.add(ClassName.HIDE);
        } else if (action == 'remove') {
          parent.removeChild(element);
        }
        event.preventDefault();
      }
    }, {
      key: '_createBtnClose',
      value: function _createBtnClose() {
        var btnClose = document.createElement('button');

        btnClose.classList.add(ClassName.CLOSE);
        if (this.option.close_position == 'corner') {
          btnClose.classList.add(ClassName.POSITION_CORNER);
        } else if (this.option.close_position == 'right_middle') {
          btnClose.classList.add(ClassName.POSITION_RIGHT_MIDDLE);
        }
        btnClose.innerHTML = this.option.close_content[this.option.close_style];

        return btnClose;
      }
    }, {
      key: '_hasBtnClose',
      value: function _hasBtnClose(element) {
        if (element.querySelector(Selector.CLOSE)) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: '_getActionType',
      value: function _getActionType(btnClose) {
        if (btnClose.classList.contains(ClassName.REMOVEABLE)) {
          return 'remove';
        } else if (btnClose.classList.contains(ClassName.HIDEABLE)) {
          return 'hide';
        } else {
          return this.option.close_action;
        }
      }
    }], [{
      key: 'addBtnClose',
      value: function addBtnClose(element) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        var b = new Button(option);
        b.appendBtnClose(element, callback);
      }
    }, {
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Button;
  }(_cosmosModule2.default);

  return Button;
}();

exports.default = Button;

/***/ }),
/* 3 */
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
  var NAME = 'Cosmos.lib.Color';
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
/* 4 */
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
  var NAME = 'Cosmos.lib.Helper';

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

  var AjaxLoading = function (_CosmosModule) {
    _inherits(AjaxLoading, _CosmosModule);

    function AjaxLoading() {
      _classCallCheck(this, AjaxLoading);

      return _possibleConstructorReturn(this, (AjaxLoading.__proto__ || Object.getPrototypeOf(AjaxLoading)).apply(this, arguments));
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
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return AjaxLoading;
  }(_cosmosModule2.default);

  return AjaxLoading;
}();

exports.default = AjaxLoading;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

var _button = __webpack_require__(2);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Chip
*************************************************************/
var Chip = function () {
  var NAME = 'Cosmos.Chip';
  var ClassName = {
    CHIP: 'chip'
  };
  var Selector = {
    CHIP: '.' + ClassName.CHIP
  };
  var Default = {
    tag: 'span', // chip's tagName. span, div, a ...
    close_button: true, // enable close button.
    close_action: 'remove' // close action. remove | hide
  };

  var Chip = function (_CosmosModule) {
    _inherits(Chip, _CosmosModule);

    function Chip(container) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Chip);

      var _this = _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).call(this, option));

      _this.container = document.querySelector(container);
      _this.button = new _button2.default({
        close_action: _this.option.close_action
      });
      return _this;
    }

    // static

    _createClass(Chip, [{
      key: 'add',


      // public

      /**
       * add
       * 
       * @param {String} text
       * @param {String} imgSrc
       * @param {Object} data  dataset values.
       * @return {void}
       */
      value: function add(text) {
        var imgSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var chip = this._createChip(text, imgSrc, data);

        this.container.appendChild(chip);
      }

      /**
       * removeAll
       * 
       * @return {Number}
       */

    }, {
      key: 'removeAll',
      value: function removeAll() {
        var chips = this.container.querySelectorAll(Selector.CHIP);
        var count = chips.length;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = chips[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var chip = _step.value;

            this.container.removeChild(chip);
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

        return count;
      }

      /**
       * getContainer
       * 
       * @return {Element}
       */

    }, {
      key: 'getContainer',
      value: function getContainer() {
        return this.container;
      }
    }, {
      key: 'getDefaultOption',
      value: function getDefaultOption() {
        return Default;
      }

      // private

    }, {
      key: '_createChip',
      value: function _createChip(text, imgSrc, data) {
        var chip = document.createElement(this.option.tag);
        // base.
        chip.classList.add(ClassName.CHIP);
        chip.textContent = text;
        // img.
        if (imgSrc) {
          chip.appendChild(this._createImg(imgSrc));
        }
        // dataset.
        for (var key in data) {
          if (key == 'href' && chip.tagName == 'A') {
            chip.href = data[key];
            continue;
          }
          chip.dataset[key] = data[key];
        }
        // close button.
        if (this.option.close_button) {
          this.button.appendBtnClose(chip);
        }

        return chip;
      }
    }, {
      key: '_createImg',
      value: function _createImg(src) {
        var img = document.createElement('img');
        img.src = src;
        return img;
      }
    }], [{
      key: 'name',
      get: function get() {
        return NAME;
      }
    }]);

    return Chip;
  }(_cosmosModule2.default);

  return Chip;
}();

exports.default = Chip;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

  var Collapse = function (_CosmosModule) {
    _inherits(Collapse, _CosmosModule);

    function Collapse() {
      _classCallCheck(this, Collapse);

      return _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).apply(this, arguments));
    }

    _createClass(Collapse, [{
      key: 'init',


      // public

      value: function init() {
        // collapse toggle listener
        _util2.default.eventOnSelector(Selector.TOGGLE, 'click', this._toggleHandler.bind(this));
        // accordion head listener
        _util2.default.eventOnSelector(Selector.A_HEAD, 'click', this._headClickHandler.bind(this));
        // Handle on activated collapse and accordion.
        this._activatedCollapse();
        this._activatedAccordion();
      }

      // private

    }, {
      key: '_toggleHandler',
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
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Collapse;
  }(_cosmosModule2.default);

  return Collapse;
}();

exports.default = Collapse;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

  var Dropdown = function (_CosmosModule) {
    _inherits(Dropdown, _CosmosModule);

    function Dropdown() {
      _classCallCheck(this, Dropdown);

      return _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));
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
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Dropdown;
  }(_cosmosModule2.default);

  return Dropdown;
}();

exports.default = Dropdown;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

var _button = __webpack_require__(2);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  var ClassName = {
    CLOSE: 'btn-close',
    BOX: 'message-box'
  };
  var Selector = {
    CONTAINER: '#message-container',
    BOX: '.' + ClassName.BOX,
    CLOSE: '.' + ClassName.BOX + ' .' + ClassName.CLOSE
  };
  var ButtonOption = {
    close_position: 'right_middle',
    close_style: 'icon'
  };

  var Message = function (_CosmosModule) {
    _inherits(Message, _CosmosModule);

    function Message() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Message);

      var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, option));

      _this.button = new _button2.default(ButtonOption);
      return _this;
    }

    // static

    _createClass(Message, [{
      key: 'init',


      // public

      value: function init() {
        // add event listener - close buttons
        _util2.default.eventOnSelector(Selector.CLOSE, 'click', this._closeButtonHandler, true);
      }
    }, {
      key: 'show',
      value: function show(message) {
        var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Status.INFO;

        var c, b, span;

        // create message box
        c = document.querySelector(Selector.CONTAINER); // container
        b = document.createElement('DIV'); // message box
        span = document.createElement('SPAN'); // message text

        span.textContent = message;
        b.classList.add(ClassName.BOX);
        b.classList.add(status);

        // append child
        b.appendChild(span);
        this.button.appendBtnClose(b, this._closeButtonHandler);
        c.appendChild(b);
      }

      // private

    }, {
      key: '_closeButtonHandler',
      value: function _closeButtonHandler(event) {
        var messageBox = _util2.default.findAncestor(event.currentTarget, Selector.BOX);

        messageBox.style.opacity = '0';
        setTimeout(function () {
          messageBox.style.display = 'none';
        }, 600); // 0.6s
        event.stopPropagation();
      }
    }], [{
      key: 'showMessage',


      /**
       * add '.message-box' into '#message-container'
       * 
       * @param  {String} message
       * @param  {String} status  ['info','success','warning','error']
       */
      value: function showMessage(message) {
        var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Status.INFO;

        var m = new Message();
        m.show(message, status);
      }
    }, {
      key: 'name',
      get: function get() {
        return NAME;
      }
    }]);

    return Message;
  }(_cosmosModule2.default);

  return Message;
}();

exports.default = Message;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

var _button = __webpack_require__(2);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Modal
*************************************************************/
var Modal = function () {
  var NAME = 'Cosmos.Modal';
  var ClassName = {
    MODAL: 'modal',
    CONTENT: 'modal-content',
    CLOSE: 'btn-close',
    SHOW: 'show'
  };
  var Selector = {
    MODAL: '.' + ClassName.MODAL,
    OPEN: 'button[data-toggle="modal"]',
    CLOSE: '.' + ClassName.MODAL + ' .' + ClassName.CLOSE,
    CONTENT: '.' + ClassName.CONTENT
  };
  var ButtonOption = {
    close_position: 'corner',
    close_style: 'icon'
  };

  var Modal = function (_CosmosModule) {
    _inherits(Modal, _CosmosModule);

    function Modal() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Modal);

      var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, option));

      _this.button = new _button2.default(ButtonOption);
      return _this;
    }

    // static

    _createClass(Modal, [{
      key: 'init',


      // public

      value: function init() {
        var _this2 = this;

        // modal open button.
        _util2.default.eventOnSelector(Selector.OPEN, 'click', this._modalOpenHandler.bind(this));

        // modal close button.
        _util2.default.eventOnSelector(Selector.CLOSE, 'click', this._modalCloseHandler.bind(this), true);

        // window onclick.
        window.addEventListener('click', function (event) {
          if (event.target.classList.contains(ClassName.MODAL)) {
            _this2._modalHide(event.target);
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
        var m = _util2.default.findAncestor(event.currentTarget, Selector.MODAL);
        this._modalHide(m);
        event.stopPropagation();
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

        var content = modal.querySelector(Selector.CONTENT);
        this.button.appendBtnClose(content, this._modalCloseHandler.bind(this));
      }
    }], [{
      key: 'dialog',
      value: function dialog(text) {
        var m = new Modal();
        m.makeDialog(text);
      }
    }, {
      key: 'name',
      get: function get() {
        return NAME;
      }
    }]);

    return Modal;
  }(_cosmosModule2.default);

  return Modal;
}();

exports.default = Modal;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

  var Nav = function (_CosmosModule) {
    _inherits(Nav, _CosmosModule);

    function Nav() {
      _classCallCheck(this, Nav);

      return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
      key: 'init',


      // public

      value: function init() {
        _util2.default.eventOnSelector(Selector.TOGGLE_BTN, 'click', this._toggleHandler);

        this.activator(Selector.USE_ACTIVATOR);

        // handle jQuery slide style.
        $(window).resize(function () {
          var w = $(window).width();
          var menu = $("nav ul");
          if (w > 768 && menu.is(':hidden')) {
            menu.removeAttr('style');
          }
        });
      }

      /**
       * activator
       * 
       * @param  string selector  menu selector string
       * @return void
       */

    }, {
      key: 'activator',
      value: function activator(selector) {
        var links = document.querySelectorAll(selector + ' a');
        if (links.length == 0) return;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var a = _step.value;

            if (compareWithLocation(a)) {
              a.parentNode.classList.add('active');
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

        function compareWithLocation(anchor) {
          var l = {
            path: lastTerm(document.location.pathname),
            query: _util2.default.locationSearchToObject()
          };
          var a = {
            path: lastTerm(anchor.pathname),
            query: _util2.default.searchToObject(anchor.search)
          };

          if (anchor.getAttribute('href') == '#') {
            // sample link (e.g. <a href="#">)
            return false;
          }

          if (l.path == a.path) {
            if (!a.query || _util2.default.isContains(l.query, a.query)) return true;
          }

          return false;
        }

        function lastTerm(string) {
          return string.substr(string.lastIndexOf("/"));
        }
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
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = MenuGroups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var m = _step2.value;

            $(nav).find(m).slideToggle();
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
    }], [{
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Nav;
  }(_cosmosModule2.default);

  return Nav;
}();

exports.default = Nav;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Parallax
*************************************************************/
var Parallax = function () {
  var NAME = 'Cosmos.Parallax';
  var ClassName = {
    PARALLAX: 'parallax',
    HIDE: 'display-hide'
  };

  var Parallax = function (_CosmosModule) {
    _inherits(Parallax, _CosmosModule);

    function Parallax() {
      _classCallCheck(this, Parallax);

      return _possibleConstructorReturn(this, (Parallax.__proto__ || Object.getPrototypeOf(Parallax)).apply(this, arguments));
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
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Parallax;
  }(_cosmosModule2.default);

  return Parallax;
}();

exports.default = Parallax;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Scaffolding
*************************************************************/
var Scaffolding = function () {
  var NAME = 'Cosmos.Scaffolding';

  var Scaffolding = function (_CosmosModule) {
    _inherits(Scaffolding, _CosmosModule);

    function Scaffolding() {
      _classCallCheck(this, Scaffolding);

      return _possibleConstructorReturn(this, (Scaffolding.__proto__ || Object.getPrototypeOf(Scaffolding)).apply(this, arguments));
    }

    _createClass(Scaffolding, [{
      key: 'init',


      // public

      value: function init() {
        // wrap table.responsive
        _util2.default.wrap('table.responsive', 'table-responsive-wrapper');
      }
    }], [{
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Scaffolding;
  }(_cosmosModule2.default);

  return Scaffolding;
}();

exports.default = Scaffolding;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  scroll-to
*************************************************************/
var ScrollTo = function () {
  var NAME = 'Cosmos.ScrollTo';
  var Selector = {
    TOP: '#scroll-to-top'
  };
  var ClassName = {
    SHOW: 'show'
  };
  // default option.
  var Default = {
    btn_top: Selector.TOP,
    animate_duration: 'default' // fast(200), default(400), slow(600)
  };

  var ScrollTo = function (_CosmosModule) {
    _inherits(ScrollTo, _CosmosModule);

    function ScrollTo(option) {
      _classCallCheck(this, ScrollTo);

      var _this = _possibleConstructorReturn(this, (ScrollTo.__proto__ || Object.getPrototypeOf(ScrollTo)).call(this, option));

      _this.btnTop = document.querySelector(_this.option.btn_top);
      return _this;
    }

    // static

    _createClass(ScrollTo, [{
      key: 'init',


      // public

      value: function init() {
        var _this2 = this;

        if (!this.btnTop) {
          return;
        }

        // scroll-to-top button listener
        this.btnTop.addEventListener('click', function () {
          $('html,body').animate({ scrollTop: 0 }, _this2.option.animate_duration, 'swing');
        });

        // scroll listener
        window.addEventListener('scroll', this._scrollHandler.bind(this));
      }
    }, {
      key: 'getDefaultOption',
      value: function getDefaultOption() {
        return Default;
      }

      // private

    }, {
      key: '_scrollHandler',
      value: function _scrollHandler() {
        var top = this._getScrollTop();
        var isShow = this.btnTop.classList.contains(ClassName.SHOW);

        if (top > 500 && !isShow) {
          this.btnTop.classList.add(ClassName.SHOW);
        } else if (top <= 500 && isShow) {
          this.btnTop.classList.remove(ClassName.SHOW);
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
      key: 'name',
      get: function get() {
        return NAME;
      }
    }]);

    return ScrollTo;
  }(_cosmosModule2.default);

  return ScrollTo;
}();

exports.default = ScrollTo;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

  var SimpleCRUD = function (_CosmosModule) {
    _inherits(SimpleCRUD, _CosmosModule);

    function SimpleCRUD() {
      _classCallCheck(this, SimpleCRUD);

      return _possibleConstructorReturn(this, (SimpleCRUD.__proto__ || Object.getPrototypeOf(SimpleCRUD)).apply(this, arguments));
    }

    _createClass(SimpleCRUD, [{
      key: 'init',


      // public

      value: function init() {
        var _this2 = this;

        _util2.default.eventOnSelector(Selector.BTN_UPDATE, 'click', function (e) {
          _this2._switchView(e.currentTarget, 'update');
        });
        _util2.default.eventOnSelector(Selector.BTN_DELETE, 'click', function (e) {
          _this2._switchView(e.currentTarget, 'delete');
        });
        _util2.default.eventOnSelector(Selector.BTN_CANCEL, 'click', function (e) {
          _this2._switchView(e.currentTarget, 'read');
        });
      }

      // private

    }, {
      key: '_getNodes',
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
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return SimpleCRUD;
  }(_cosmosModule2.default);

  return SimpleCRUD;
}();

exports.default = SimpleCRUD;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    ACTIVE: 'active',
    FADE: 'fade',
    EFFECT_FADE: 'tab-fade-effect'
  };
  var Selector = {
    TAB: '.' + ClassName.TAB,
    LINK: '.' + ClassName.LINK,
    CONTENT: '.' + ClassName.CONTENT
  };

  var Tab = function (_CosmosModule) {
    _inherits(Tab, _CosmosModule);

    function Tab() {
      _classCallCheck(this, Tab);

      return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
    }

    _createClass(Tab, [{
      key: 'init',


      // public

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
        var _this2 = this;

        var tabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (tabIndex == null) {
          // all tabs.
          var tabs = this._getTabs();
          tabs.forEach(function (e, i, a) {
            _this2._default(linkIndex, i);
          });
        } else {
          this._default(linkIndex, tabIndex);
        }
      }

      // private

    }, {
      key: '_tabHandle',
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
        var c = document.querySelector(this._extractID(link.href));
        if (c && !c.classList.contains(ClassName.CONTENT)) {
          c.classList.add(ClassName.CONTENT);
        }
        return c;
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
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Tab;
  }(_cosmosModule2.default);

  return Tab;
}();

exports.default = Tab;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
	"name": "cosmos-css",
	"version": "0.9.1",
	"description": "The css framework for personal practice.",
	"main": "dist/js/main.js",
	"sass": "src/scss/style.scss",
	"directories": {
		"test": "tests"
	},
	"dependencies": {
		"scss-palette": "^0.2.1"
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
		"build": "npm run dev && npm run production && npm run js-module",
		"prebuild": "node banner.js",
		"dev": "npm run sass && npm run pug && npm run js",
		"watch": "node node_modules/concurrently/src/main \"npm run sass:watch\" \"npm run pug:watch\" \"npm run js:watch\"",
		"production": "npm run sass:min && npm run js:min",
		"test": "echo \"Error: no test specified\" && exit 1",
		"sass": "node node_modules/node-sass/bin/node-sass --source-map true src/scss/style.scss dist/css/style.css",
		"sass:min": "node node_modules/node-sass/bin/node-sass --output-style compressed src/scss/style.scss dist/css/style.min.css",
		"sass:watch": "npm run sass -- --watch",
		"pug": "node node_modules/pug-cli --pretty tests/views/test.pug tests/views/components.pug tests/views/modules.pug --out ./tests/html/",
		"pug:watch": "npm run pug -- --watch",
		"js": "node node_modules/webpack/bin/webpack",
		"js:min": "npm run js -- --optimize-minimize --output-filename script.min.js --devtool false",
		"js:watch": "npm run js -- --watch",
		"js-module": "node node_modules/webpack/bin/webpack --output-filename main.js --output-library-target commonjs-module"
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chip = exports.Button = exports.Helper = exports.Color = exports.Util = undefined;

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

var _color = __webpack_require__(3);

var _color2 = _interopRequireDefault(_color);

var _helper = __webpack_require__(4);

var _helper2 = _interopRequireDefault(_helper);

var _scaffolding = __webpack_require__(13);

var _scaffolding2 = _interopRequireDefault(_scaffolding);

var _button = __webpack_require__(2);

var _button2 = _interopRequireDefault(_button);

var _ajaxLoading = __webpack_require__(5);

var _ajaxLoading2 = _interopRequireDefault(_ajaxLoading);

var _dropdown = __webpack_require__(8);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _message = __webpack_require__(9);

var _message2 = _interopRequireDefault(_message);

var _modal = __webpack_require__(10);

var _modal2 = _interopRequireDefault(_modal);

var _nav = __webpack_require__(11);

var _nav2 = _interopRequireDefault(_nav);

var _parallax = __webpack_require__(12);

var _parallax2 = _interopRequireDefault(_parallax);

var _scrollTo = __webpack_require__(14);

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _tab = __webpack_require__(16);

var _tab2 = _interopRequireDefault(_tab);

var _collapse = __webpack_require__(7);

var _collapse2 = _interopRequireDefault(_collapse);

var _simpleCrud = __webpack_require__(15);

var _simpleCrud2 = _interopRequireDefault(_simpleCrud);

var _chip = __webpack_require__(6);

var _chip2 = _interopRequireDefault(_chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize - loading modules.
// Libraries.
_scaffolding2.default.load();
// Functional modules. - nonloadable

// Loadable Modules.

_button2.default.load();
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
var version = __webpack_require__(17).version;
var Cosmos = {
  name: 'cosmos-css',
  version: 'v' + version,
  Util: _util2.default,
  Color: _color2.default,
  Helper: _helper2.default,
  Button: _button2.default,
  Chip: _chip2.default
};

exports.default = Cosmos;
exports.Util = _util2.default;
exports.Color = _color2.default;
exports.Helper = _helper2.default;
exports.Button = _button2.default;
exports.Chip = _chip2.default;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map