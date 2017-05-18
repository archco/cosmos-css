/*!
 * cosmos-css - The css framework for personal practice.
 * @version v0.11.1
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */
window["Cosmos"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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
    value: function init() {} // jscs:ignore disallowEmptyBlocks

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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  ElementUtil
*************************************************************/
var NAME = 'Cosmos.lib.ElementUtil';
var ClassName = {
  SHOW: 'display-show',
  HIDE: 'display-hide'
};
var DataSet = {
  SORT_DIRECTION: 'sortDirection',
  SORT_VALUE: 'sortValue',
  SORT_TYPE: 'sortType'
};

var ElementUtil = function () {
  function ElementUtil() {
    _classCallCheck(this, ElementUtil);
  }

  _createClass(ElementUtil, null, [{
    key: 'getElement',


    /**
     * getElement
     *
     * @param  {String|Element|NodeList} selector
     * @param  {Element} [ base = document ]
     * @return {Element}
     */
    value: function getElement(selector) {
      var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      if (typeof selector === 'string') {
        return base.querySelector(selector);
      } else if (selector instanceof Element) {
        return selector;
      } else if (selector instanceof NodeList) {
        return selector[0];
      } else {
        throw new TypeError('selector is must be String or Element');
      }
    }

    /**
     * getElements
     *
     * @param  {String|Element|NodeList} selector
     * @param  {Element} [ base = document ]
     * @return {NodeList}
     */

  }, {
    key: 'getElements',
    value: function getElements(selector) {
      var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      if (typeof selector === 'string') {
        return base.querySelectorAll(selector);
      } else if (selector instanceof Element) {
        return this.toNodeList(selector);
      } else if (selector instanceof NodeList) {
        return selector;
      } else {
        throw new TypeError('selector is must be String or NodeList');
      }
    }

    /**
     * Element to NodeList
     *
     * @param  {Element} element
     * @return {NodeList}
     */

  }, {
    key: 'toNodeList',
    value: function toNodeList(element) {
      element.setAttribute('toNodeList', '');
      var nodelist = document.querySelectorAll('[toNodeList]');
      element.removeAttribute('toNodeList');
      return nodelist;
    }

    /**
     * Converting a NodeList to an Array.
     *
     * @param  {NodeList} nodelist
     * @return {Array}
     */

  }, {
    key: 'nodeListToArray',
    value: function nodeListToArray(nodelist) {
      return Array.prototype.slice.call(nodelist);
    }

    /**
     * add event listener on selector.
     *
     * @param {String}   selector
     * @param {String}   type  event type
     * @param {Function} listener
     * @param {Boolean}  [ useCapture = false ]
     */

  }, {
    key: 'addListener',
    value: function addListener(selector, type, listener) {
      var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var elements = this.getElements(selector);
      if (!elements.length) return null;

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
     * find ancestor by selector.
     *
     * @param  {Element|String} element or querySelector
     * @param  {String}  selector
     * @return {Element|null}
     */

  }, {
    key: 'findAncestor',
    value: function findAncestor(element, selector) {
      element = this.getElement(element);
      do {
        if (element == this.getElement('html')) return null;
        element = element.parentElement;
      } while (!element.matches(selector));
      return element;
    }

    /**
     * wrap elements by wrapper, one by one.
     *
     * @param  {String} selector
     * @param  {String} className wrapper's class name.
     * @param  {String} [ tagName = 'DIV' ] wrapper's tag name.
     * @return {void}
     */

  }, {
    key: 'wrap',
    value: function wrap(selector, className) {
      var tagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DIV';

      var elements = this.getElements(selector);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var elm = _step2.value;

          var parent = elm.parentNode;
          var sibling = elm.nextSibling;
          var div = document.createElement(tagName);
          div.classList.add(className);

          div.appendChild(elm);

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
     * wrap all elements inside to wrapper.
     *
     * @param  {String} selector
     * @param  {String} className wrapper's class name.
     * @param  {String} [ tagName = 'DIV' ] wrapper's tag name.
     * @return {void}
     */

  }, {
    key: 'wrapAll',
    value: function wrapAll(selector, className) {
      var tagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DIV';

      var elements = this.getElements(selector);
      var parent = elements[0].parentNode;
      var sibling = elements[0].nextSibling;
      var div = document.createElement(tagName);
      div.classList.add(className);

      elements.forEach(function (elm) {
        return div.appendChild(elm);
      });

      if (sibling) {
        parent.insertBefore(div, sibling);
      } else {
        parent.appendChild(div);
      }
    }

    /**
     * submitConfirm
     *
     * @param  {String|Element|NodeList} selector
     * @param  {String} [ message = 'Are you confirm?' ]
     * @return {void}
     */

  }, {
    key: 'submitConfirm',
    value: function submitConfirm(selector) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Are you confirm?';

      this.addListener(selector, 'submit', function (event) {
        if (!confirm(message)) event.preventDefault();
      }, true); // use capture.
    }

    /**
     * addClass
     *
     * @param  {String} selector
     * @param  {String} className
     * @return {void}
     */

  }, {
    key: 'addClass',
    value: function addClass(selector, className) {
      var elm = this.getElement(selector);
      elm.classList.add(className);
    }

    /**
     * removeClass
     *
     * @param  {String} selector
     * @param  {String} className
     * @return {void}
     */

  }, {
    key: 'removeClass',
    value: function removeClass(selector, className) {
      var elm = this.getElement(selector);
      elm.classList.remove(className);
    }

    /**
     * toggleClass
     *
     * @param  {String} selector
     * @param  {String} className
     * @return {void}
     */

  }, {
    key: 'toggleClass',
    value: function toggleClass(selector, className) {
      var elm = this.getElement(selector);
      elm.classList.toggle(className);
    }

    /**
     * hide element
     *
     * @param  {String} selector
     * @return {void}
     */

  }, {
    key: 'hide',
    value: function hide(selector) {
      this.addClass(selector, ClassName.HIDE);
    }

    /**
     * show element
     *
     * @param  {String} selector
     * @return {void}
     */

  }, {
    key: 'show',
    value: function show(selector) {
      this.removeClass(selector, ClassName.HIDE);
    }

    /**
     * toggleShow
     *
     * @param  {String} selector
     * @return {void}
     */

  }, {
    key: 'toggleShow',
    value: function toggleShow(selector) {
      var elm = this.getElement(selector);
      if (elm.classList.contains(ClassName.HIDE)) {
        this.show(selector);
      } else {
        this.hide(selector);
      }
    }

    /**
     * filter
     *
     * @param  {String}  selector
     * @param  {String}  filter
     * @param  {Boolean} [htmlMode=false]
     * @return {Number}  hit number
     */

  }, {
    key: 'filter',
    value: function filter(selector, _filter) {
      var htmlMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var elms = this.getElements(selector);

      if (elms.length === 1 && elms[0].tagName === 'TABLE') {
        return this.filterTable(elms[0], _filter, htmlMode);
      } else {
        return this.filterElements(elms, _filter, htmlMode);
      }
    }

    /**
     * filterElements
     *
     * @param  {String}  selector
     * @param  {String}  filter
     * @param  {Boolean} [htmlMode=false]
     * @return {Number}  hit number
     */

  }, {
    key: 'filterElements',
    value: function filterElements(selector, filter) {
      var htmlMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var elms = this.getElements(selector);

      return this._filtering(elms, filter, htmlMode);
    }

    /**
     * filterTable
     *
     * @param  {String}  selector
     * @param  {String}  filter
     * @param  {Boolean} [htmlMode=false]
     * @return {Number}  hit number
     */

  }, {
    key: 'filterTable',
    value: function filterTable(selector, filter) {
      var htmlMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var table = this.getElement(selector);
      var tableRows = this.getElements('tbody tr', table);

      return this._filtering(tableRows, filter, htmlMode);
    }
  }, {
    key: '_filtering',
    value: function _filtering(nodes, filter) {
      var htmlMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var hit = 0;
      filter = filter.toUpperCase();

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = nodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var node = _step3.value;

          var content = htmlMode ? node.innerHTML : node.textContent;

          if (content.toUpperCase().indexOf(filter) === -1) {
            this.hide(node);
          } else {
            this.show(node);
            hit++;
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

      return hit;
    }

    /**
     * sortElements
     *
     * @param  {String} selector
     * @param  {String} itemSelector
     * @return {void}
     */

  }, {
    key: 'sortElements',
    value: function sortElements(selector, itemSelector) {
      var _this = this;

      var parent = this.getElement(selector);
      var items = this.nodeListToArray(this.getElements(itemSelector, parent));
      var compareMethod = function compareMethod(a, b) {
        var aVal = _this._getSortValue(a);
        var bVal = _this._getSortValue(b);
        var type = parent.dataset[DataSet.SORT_TYPE] || a.dataset[DataSet.SORT_TYPE] || null;
        var asc = parent.dataset[DataSet.SORT_DIRECTION] === 'asc';

        return _this._compare(aVal, bVal, type, asc);
      };

      this._toggleSortDirection(parent);
      this._sorting(items, compareMethod.bind(this));
    }

    /**
     * sortTable
     *
     * @param  {String} selector
     * @return {void}
     */

  }, {
    key: 'sortTable',
    value: function sortTable(selector) {
      var _this2 = this;

      var table = this.getElement(selector);
      var heads = this.getElements('thead th', table);
      var rows = this.nodeListToArray(this.getElements('tbody tr', table));

      var _loop = function _loop(i, v) {
        v.addEventListener('click', function (e) {
          e.preventDefault();
          var th = e.currentTarget;
          _this2._toggleSortDirection(th);
          _this2._sortingTable(rows, i + 1, th.dataset[DataSet.SORT_TYPE], th.dataset[DataSet.SORT_DIRECTION]);
        });
      };

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = heads.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _ref = _step4.value;

          var _ref2 = _slicedToArray(_ref, 2);

          var i = _ref2[0];
          var v = _ref2[1];

          _loop(i, v);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: '_sortingTable',
    value: function _sortingTable(rows, nth, type, direction) {
      var _this3 = this;

      var compareMethod = function compareMethod(a, b) {
        a = _this3.getElement('td:nth-child(' + nth + ')', a);
        b = _this3.getElement('td:nth-child(' + nth + ')', b);
        var aVal = _this3._getSortValue(a);
        var bVal = _this3._getSortValue(b);
        var asc = direction === 'asc';
        type = type || a.dataset[DataSet.SORT_TYPE] || null;

        return _this3._compare(aVal, bVal, type, asc);
      };

      this._sorting(rows, compareMethod.bind(this));
    }
  }, {
    key: '_getSortValue',
    value: function _getSortValue(element) {
      var sortValue = element.dataset[DataSet.SORT_VALUE];
      if (!sortValue) sortValue = element.textContent;

      return sortValue.toUpperCase();
    }
  }, {
    key: '_sorting',
    value: function _sorting(items, compareMethod) {
      items.sort(compareMethod);
      items.forEach(function (v) {
        var p = v.parentNode;
        p.removeChild(v);
        p.appendChild(v);
      });
    }
  }, {
    key: '_toggleSortDirection',
    value: function _toggleSortDirection(elm) {
      if (elm.dataset[DataSet.SORT_DIRECTION] === 'asc') {
        elm.dataset[DataSet.SORT_DIRECTION] = 'desc';
      } else {
        elm.dataset[DataSet.SORT_DIRECTION] = 'asc';
      }
    }
  }, {
    key: '_compare',
    value: function _compare(a, b, type) {
      var asc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (type === 'number') {
        return this._compareNumber(a, b, asc);
      } else if (type === 'date') {
        return this._compareDate(a, b, asc);
      } else {
        // default: string
        return asc ? a.localeCompare(b) : b.localeCompare(a);
      }
    }
  }, {
    key: '_compareNumber',
    value: function _compareNumber(a, b) {
      var asc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      a = parseFloat(a);
      b = parseFloat(b);

      return asc ? a - b : b - a;
    }
  }, {
    key: '_compareDate',
    value: function _compareDate(a, b) {
      var asc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      a = new Date(a);
      b = new Date(b);

      return asc ? a - b : b - a;
    }
  }, {
    key: 'name',
    get: function get() {
      return NAME;
    }
  }]);

  return ElementUtil;
}();

exports.default = ElementUtil;

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

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Button
*************************************************************/
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
  HAS_ACTION: '.' + ClassName.CLOSE + '.' + ClassName.REMOVEABLE + ',\n    .' + ClassName.CLOSE + '.' + ClassName.HIDEABLE
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
        _elementUtil2.default.addListener(Selector.HAS_ACTION, 'click', this._btnCloseClickHandler.bind(this));
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

exports.default = Button;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scrollIt = __webpack_require__(20);

var _scrollIt2 = _interopRequireDefault(_scrollIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  util
*************************************************************/
var NAME = 'Cosmos.lib.Util';

var Util = function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: 'eventOnSelector',


    /**
     * event on selector - will be deprecated.
     * instead -> ElementUtil.addListener()
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
      if (elements.length === 0) return null;

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
     * find ancestor by selector - will be deprecated.
     * instead -> ElementUtil.findAncestor()
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
     * wrap elements by div.wrapper - will be deprecated.
     * instead -> ElementUtil.wrap()
     *
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
     * wrap all elements inside to div.wrapper - will be deprecated.
     * instead -> ElementUtil.wrapAll()
     *
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
     * @param  {String} search HTMLAnchorElement.search
     * @return {Object|null}
     */

  }, {
    key: 'searchToObject',
    value: function searchToObject(search) {
      if (search === '') return null;

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
        var correct = 0;
        big.forEach(function (v) {
          if (small.includes(v)) correct++;
        });
        return correct == small.length;
      } else if (Object(big) === big && Object(small) === small) {
        for (var p in small) {
          if (!(p in big && this.isContains(big[p], small[p]))) return false;
        }

        return true;
      } else {
        return big === small;
      }
    }

    /**
     * isMobileSize
     *
     * @param  {Number}  [ size = 800 ]
     * @return {Boolean}
     */

  }, {
    key: 'isMobileSize',
    value: function isMobileSize() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;

      return window.innerWidth < size;
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

Object.assign(Util, {
  scrollIt: _scrollIt2.default
});

exports.default = Util;

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
  Color
*************************************************************/
var NAME = 'Cosmos.lib.Color';
var Config = {
  lightnessPoint: 166, // 65%
  darkDefault: '#000',
  lightDefault: '#fff'
};

var Color = function () {
  function Color(color) {
    _classCallCheck(this, Color);

    this._color = Color.colorToArray(color);
  }

  _createClass(Color, [{
    key: 'getContrast',
    value: function getContrast() {
      var dark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Config.darkDefault;
      var light = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config.lightDefault;

      return Color.contrast(this._color, dark, light);
    }

    // static

  }], [{
    key: 'colorToArray',


    /**
     * color to rgb array.
     *
     * @param  {String|Array} color
     * @return {Array}  [red, green, blue]
     */
    value: function colorToArray(color) {
      var array = [];
      if (typeof color == 'string') {
        array = this.hexToRgb(color);
      } else if (Array.isArray(color)) {
        array = color;
      } else {
        throw new Error('parameter only "hex color" or "rgb array"');
      }

      return array;
    }

    /**
     * hex color to rgb array.
     * @link http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     *
     * @param  {String}  hex
     * @return {Array}
     */

  }, {
    key: 'hexToRgb',
    value: function hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

      return hex.replace(shorthandRegex, function (m, r, g, b) {
        return '#' + r + r + g + g + b + b;
      }).substring(1).match(/.{2}/g).map(function (x) {
        return parseInt(x, 16);
      });
    }

    /**
     * rgb values to hex color string
     *
     * @param  {Number} r
     * @param  {Number} g
     * @param  {Number} b
     * @param  {Boolean} [ toShort = false ] convert to shorthand.
     * @return {String}
     */

  }, {
    key: 'rgbToHex',
    value: function rgbToHex(r, g, b) {
      var toShort = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var hex = '#' + [r, g, b].map(function (x) {
        return x.toString(16).padStart(2, '0');
      }).join('');

      return toShort ? this._hexToShorthand(hex) : hex;
    }
  }, {
    key: '_hexToShorthand',
    value: function _hexToShorthand(hex) {
      var check = true;
      var rgb = hex.substring(1).match(/.{2}/g);

      // check.
      rgb.map(function (x) {
        if (!x.match(/(.)\1+/)) check = false;
      });

      return check ? '#' + rgb.map(function (x) {
        return x.substring(1);
      }).join('') : hex;
    }

    /**
     * get rgb color's lightness value.
     *
     * @param  {String|Array} color
     * @return {Number}  (0 ~ 255)
     */

  }, {
    key: 'lightness',
    value: function lightness(color) {
      var rgb = this.colorToArray(color);

      // Color lightness formula.
      // @link https://www.w3.org/TR/AERT#color-contrast
      return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    }

    /**
     * return contrast color of input.
     *
     * @param  {String|Array} color
     * @param  {String}  dark
     * @param  {String}  light
     * @return {String}  dark or light
     */

  }, {
    key: 'contrast',
    value: function contrast(color) {
      var dark = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config.darkDefault;
      var light = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Config.lightDefault;

      return this.lightness(color) > Config.lightnessPoint ? dark : light;
    }
  }, {
    key: 'name',
    get: function get() {
      return NAME;
    }
  }]);

  return Color;
}();

exports.default = Color;

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
  Helper - will be deprecated.
*************************************************************/
var NAME = 'Cosmos.lib.Helper';

var Helper = function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: 'submitConfirm',


    /**
     * submitConfirm - confirm 을 취소하면 event.preventDefault()
     * instead -> ElementUtil.submitConfirm()
     *
     * @param  {element} form
     * @param  {sting} message
     * @return {void}
     */
    value: function submitConfirm(form) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Are you confirm?';

      if (!form) throw new Error('Form target is not exist.');

      form.addEventListener('submit', function (event) {
        if (!confirm(message)) event.preventDefault();
      });
    }

    /**
     * check mobile size
     * instead -> Util.isMobileSize()
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

exports.default = Helper;

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

var _button = __webpack_require__(2);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Chip
*************************************************************/
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
  close_action: 'remove' };

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
      if (imgSrc) chip.appendChild(this._createImg(imgSrc));

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

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Collapse
*************************************************************/
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
var Default = {
  target: '',
  is_collapsed: true };

var Collapse = function (_CosmosModule) {
  _inherits(Collapse, _CosmosModule);

  function Collapse() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Collapse);

    var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, option));

    _this.setElement(element);
    return _this;
  }

  // static

  _createClass(Collapse, [{
    key: 'getDefaultOption',


    // public

    value: function getDefaultOption() {
      return Default;
    }
  }, {
    key: 'init',
    value: function init() {
      // collapse toggle listener
      _elementUtil2.default.addListener(Selector.TOGGLE, 'click', this._collapseToggleHandler.bind(this));

      // accordion head listener
      _elementUtil2.default.addListener(Selector.A_HEAD, 'click', this._accordionHeadHandler.bind(this));

      // Handle on activated collapse and accordion.
      this._activatedCollapse();
      this._activatedAccordion();
    }

    /**
     * initialize on this.element.
     *
     * @return {void}
     */

  }, {
    key: 'on',
    value: function on() {
      var _this2 = this;

      _elementUtil2.default.addListener(this.element, 'click', function () {
        _this2._toggle(_this2.element, _this2.target);
      });

      if (this.option.is_collapsed) {
        this.hide();
      } else {
        this.show();
      }
    }

    /**
     * show element's target.
     *
     * @return {void}
     */

  }, {
    key: 'show',
    value: function show() {
      this._show(this.element, this.target);
    }

    /**
     * hide element's target.
     *
     * @return {void}
     */

  }, {
    key: 'hide',
    value: function hide() {
      this._hide(this.element, this.target);
    }

    /**
     * set element property.
     *
     * @param {String|Element} element
     * @return {Collapse}
     */

  }, {
    key: 'setElement',
    value: function setElement(element) {
      this.element = element ? _elementUtil2.default.getElement(element) : element;
      this.target = this.option.target ? _elementUtil2.default.getElement(this.option.target) : this._getTarget(this.element);

      if (this.target && !this.target.classList.contains(ClassName.PANNEL)) {
        this.target.classList.add(ClassName.PANNEL);
      }

      return this;
    }

    // private

  }, {
    key: '_toggle',
    value: function _toggle(element, target) {
      if (element.classList.contains(ClassName.ACTIVE)) {
        this._hide(element, target);
      } else {
        this._show(element, target);
      }
    }
  }, {
    key: '_show',
    value: function _show(element, target) {
      element.classList.add(ClassName.ACTIVE);
      target.style.maxHeight = target.scrollHeight + 'px';
    }
  }, {
    key: '_hide',
    value: function _hide(element, target) {
      element.classList.remove(ClassName.ACTIVE);
      target.style.maxHeight = null;
    }
  }, {
    key: '_collapseToggleHandler',
    value: function _collapseToggleHandler(event) {
      var element = event.currentTarget;
      var target = this._getTarget(element);

      this._toggle(element, target);
    }
  }, {
    key: '_accordionHeadHandler',
    value: function _accordionHeadHandler(event) {
      var head = event.currentTarget;
      var body = head.nextElementSibling;
      var accordion = _elementUtil2.default.findAncestor(head, Selector.ACCORDION);

      if (head.classList.contains(ClassName.ACTIVE)) {
        this._toggle(head, body);
      } else {
        this._allClose(accordion);
        this._toggle(head, body);
      }
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
          var head = _step.value;

          if (head.classList.contains(ClassName.ACTIVE)) {
            var body = head.nextElementSibling;
            this._hide(head, body);
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
      var elements = document.querySelectorAll(Selector.C_ACTIVE);
      if (!elements.length) return;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var element = _step2.value;

          var target = this._getTarget(element);
          this._show(element, target);
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
      var heads = document.querySelectorAll(Selector.A_ACTIVE);
      if (!heads.length) return;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = heads[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var head = _step3.value;

          var accordion = _elementUtil2.default.findAncestor(head, Selector.ACCORDION);
          this._allClose(accordion);
          head.click();
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
    key: '_getTarget',
    value: function _getTarget(element) {
      if (!element) return null;
      return _elementUtil2.default.getElement(element.dataset.target);
    }
  }], [{
    key: 'load',
    value: function load() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var c = new this(element, option);
      c.init();
    }
  }, {
    key: 'name',
    get: function get() {
      return NAME;
    }
  }]);

  return Collapse;
}(_cosmosModule2.default);

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

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  dropdown
*************************************************************/
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
      _elementUtil2.default.addListener(Selector.TOGGLE, 'click', this._toggleButtonHandler.bind(this));

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
     * @param  {element} target  except target
     * @return {void}
     */

  }, {
    key: '_closeElseDropdown',
    value: function _closeElseDropdown() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var dropdowns = document.querySelectorAll(Selector.DROPDOWN);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dropdowns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var dropdown = _step.value;

          var content = dropdown.querySelector(Selector.CONTENT);
          if (target && target == dropdown) continue; // except target

          if (content.classList.contains(ClassName.SHOW)) {
            content.classList.remove(ClassName.SHOW);
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

var _button = __webpack_require__(2);

var _button2 = _interopRequireDefault(_button);

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  message
*************************************************************/
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
      _elementUtil2.default.addListener(Selector.CLOSE, 'click', this._closeButtonHandler, true);
    }
  }, {
    key: 'show',
    value: function show(message) {
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Status.INFO;

      // create message box
      var container = document.querySelector(Selector.CONTAINER); // container
      var box = document.createElement('DIV'); // message box
      var span = document.createElement('SPAN'); // message text

      span.textContent = message;
      box.classList.add(ClassName.BOX);
      box.classList.add(status);

      // append child
      box.appendChild(span);
      this.button.appendBtnClose(box, this._closeButtonHandler);
      container.appendChild(box);
    }

    // private

  }, {
    key: '_closeButtonHandler',
    value: function _closeButtonHandler(event) {
      var messageBox = _elementUtil2.default.findAncestor(event.currentTarget, Selector.BOX);

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

var _button = __webpack_require__(2);

var _button2 = _interopRequireDefault(_button);

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Modal
*************************************************************/
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
      _elementUtil2.default.addListener(Selector.OPEN, 'click', this._modalOpenHandler.bind(this));

      // modal close button.
      _elementUtil2.default.addListener(Selector.CLOSE, 'click', this._modalCloseHandler.bind(this), true);

      // window onclick.
      window.addEventListener('click', function (event) {
        if (event.target.classList.contains(ClassName.MODAL)) {
          _this2._modalHide(event.target);
        }
      });

      // If modal doesn't have close button, add it.
      var modals = document.querySelectorAll(Selector.MODAL);
      if (modals.length) {
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
      var m = _elementUtil2.default.findAncestor(event.currentTarget, Selector.MODAL);
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

var _util = __webpack_require__(3);

var _util2 = _interopRequireDefault(_util);

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  nav
*************************************************************/
var NAME = 'Cosmos.Nav';
var ClassName = {
  NAVBAR: 'navbar',
  TOGGLE_BTN: 'menu-toggle',
  CHANGE: 'change',
  USE_ACTIVATOR: 'use-activator'
};
var Selector = {
  NAVBAR: 'nav.' + ClassName.NAVBAR,
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
      _elementUtil2.default.addListener(Selector.TOGGLE_BTN, 'click', this._toggleHandler);

      this.activator(Selector.USE_ACTIVATOR);

      // handle jQuery slide style.
      $(window).resize(function () {
        var w = $(window).width();
        var $menu = $('nav ul');
        if (w > 768 && $menu.is(':hidden')) {
          $menu.removeAttr('style');
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
      if (!links.length) return;

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
        return string.substr(string.lastIndexOf('/'));
      }
    }

    // private

  }, {
    key: '_toggleHandler',
    value: function _toggleHandler(event) {
      var toggleBtn = event.currentTarget;
      var nav = _elementUtil2.default.findAncestor(toggleBtn, Selector.NAVBAR);

      // toggle button class change.
      toggleBtn.classList.toggle(ClassName.CHANGE);

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
      if (!ps.length) return;

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
      if (!i) return;
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

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Scaffolding
*************************************************************/
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
      _elementUtil2.default.wrap('table.responsive', 'table-responsive-wrapper');
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

var _util = __webpack_require__(3);

var _util2 = _interopRequireDefault(_util);

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  scroll-to
*************************************************************/
var NAME = 'Cosmos.ScrollTo';
var ClassName = {
  CONTAINER: 'scroll-to-container',
  TOTOP: 'scroll-to-top',
  TOBOTTOM: 'scroll-to-bottom',
  SHOW: 'show'
};
var Selector = {
  TOP: '.' + ClassName.TOTOP,
  BOTTOM: '.' + ClassName.TOBOTTOM
};

// default option.
var Default = {
  btn_top: Selector.TOP,
  btn_bottom: Selector.BOTTOM,
  scroll_duration: 600, // 300: fast, 600: default, 900: slow
  scroll_easing: 'easeOutCubic',
  show_distance: 400
};

var ScrollTo = function (_CosmosModule) {
  _inherits(ScrollTo, _CosmosModule);

  function ScrollTo(option) {
    _classCallCheck(this, ScrollTo);

    return _possibleConstructorReturn(this, (ScrollTo.__proto__ || Object.getPrototypeOf(ScrollTo)).call(this, option));
  }

  // static

  _createClass(ScrollTo, [{
    key: 'init',


    // public

    value: function init() {
      var _this2 = this;

      var duration = this.option.scroll_duration;
      var easing = this.option.scroll_easing;

      // button listener
      _elementUtil2.default.addListener(this.option.btn_top, 'click', function () {
        _util2.default.scrollIt(0, duration, easing);
      });
      _elementUtil2.default.addListener(this.option.btn_bottom, 'click', function () {
        _util2.default.scrollIt(_this2._getDocumentBottom(), duration, easing);
      });

      // scroll listener
      if (this.option.show_distance) {
        window.addEventListener('scroll', this._scrollHandler.bind(this));
        this._scrollHandler(); // invoke once.
      } else {
        this._showBtns(); // show buttons.
      }
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
      var bottom = this._getScrollBottom();
      var distance = this.option.show_distance;
      var toTop = document.querySelector(this.option.btn_top);
      var toBottom = document.querySelector(this.option.btn_bottom);

      // toTop
      if (top > distance && !this._isShown(toTop)) {
        toTop.classList.add(ClassName.SHOW);
      } else if (top <= distance && this._isShown(toTop)) {
        toTop.classList.remove(ClassName.SHOW);
      }

      // toBottom
      if (bottom > distance && !this._isShown(toBottom)) {
        toBottom.classList.add(ClassName.SHOW);
      } else if (bottom <= distance && this._isShown(toBottom)) {
        toBottom.classList.remove(ClassName.SHOW);
      }
    }
  }, {
    key: '_isShown',
    value: function _isShown(elm) {
      return elm.classList.contains(ClassName.SHOW);
    }
  }, {
    key: '_getScrollTop',
    value: function _getScrollTop() {
      return window.scrollY || window.pageYOffset;
    }
  }, {
    key: '_getScrollBottom',
    value: function _getScrollBottom() {
      return this._getDocumentBottom() - (this._getScrollTop() + window.innerHeight);
    }
  }, {
    key: '_getDocumentTop',
    value: function _getDocumentTop() {
      return document.documentElement.offsetTop || 0;
    }
  }, {
    key: '_getDocumentBottom',
    value: function _getDocumentBottom() {
      return document.documentElement.scrollHeight;
    }
  }, {
    key: '_showBtns',
    value: function _showBtns() {
      var toTop = document.querySelector(this.option.btn_top);
      var toBottom = document.querySelector(this.option.btn_bottom);

      if (toTop) toTop.classList.add(ClassName.SHOW);
      if (toBottom) toBottom.classList.add(ClassName.SHOW);
    }
  }], [{
    key: 'name',
    get: function get() {
      return NAME;
    }
  }]);

  return ScrollTo;
}(_cosmosModule2.default);

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

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  SipleCRUD
*************************************************************/
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

      _elementUtil2.default.addListener(Selector.BTN_UPDATE, 'click', function (e) {
        _this2._switchView(e.currentTarget, 'update');
      });
      _elementUtil2.default.addListener(Selector.BTN_DELETE, 'click', function (e) {
        _this2._switchView(e.currentTarget, 'delete');
      });
      _elementUtil2.default.addListener(Selector.BTN_CANCEL, 'click', function (e) {
        _this2._switchView(e.currentTarget, 'read');
      });
    }

    // private

  }, {
    key: '_getNodes',
    value: function _getNodes(element) {
      var item = _elementUtil2.default.findAncestor(element, Selector.ITEM);
      var current = _elementUtil2.default.findAncestor(element, Selector.VIEW);

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

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Tab
*************************************************************/
var NAME = 'Cosmos.Tab';
var ClassName = {
  TAB: 'tab',
  TAB_VERTICAL: 'tab-vertical',
  LINK: 'tab-link',
  CONTENT: 'tab-content',
  SHOW: 'show',
  ACTIVE: 'active',
  FADE: 'fade',
  EFFECT_FADE: 'tab-fade-effect'
};
var Selector = {
  TAB: '.' + ClassName.TAB + ',.' + ClassName.TAB_VERTICAL,
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
      _elementUtil2.default.addListener(Selector.LINK, 'click', this._tabHandle.bind(this));

      // initialize tabs.
      var tabs = this._getTabs();
      if (tabs.length) {
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

      if (tabIndex === null) {
        // all tabs.
        var tabs = this._getTabs();
        tabs.forEach(function (e, i) {
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
      var tab = _elementUtil2.default.findAncestor(a, Selector.TAB);
      var links = tab.querySelectorAll(Selector.LINK);
      var content = this._getContent(a);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var link = _step2.value;

          // content hide
          var _content = this._getContent(link);
          _content.classList.remove(ClassName.SHOW);

          // remove link.active
          link.classList.remove(ClassName.ACTIVE);
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

      return result === null ? null : result[0];
    }
  }, {
    key: '_getContent',
    value: function _getContent(link) {
      var content = document.querySelector(this._extractID(link.href));
      if (content && !content.classList.contains(ClassName.CONTENT)) {
        content.classList.add(ClassName.CONTENT);
      }

      return content;
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
          var link = _step3.value;

          // set default.
          if (link.classList.contains(ClassName.ACTIVE)) {
            link.click();
          }

          // tab fade effect.
          if (tab.classList.contains(ClassName.FADE)) {
            this._getContent(link).classList.add(ClassName.EFFECT_FADE);
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

exports.default = Tab;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Toast
*************************************************************/
var NAME = 'Cosmos.Toast';
var ClassName = {
  TOAST: 'toast',
  SHOW: 'show',
  CONTAINER: 'toast-container'
};
var Default = {
  text: 'no text',
  duration_short: 3000,
  duration_long: 8000,
  container: '.' + ClassName.CONTAINER,
  transition_duration: 600,
  log_enable: true,
  close_type: 'remove' };

var Toast = function (_CosmosModule) {
  _inherits(Toast, _CosmosModule);

  function Toast() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Toast);

    // set defaults.
    var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, option));

    _this.setText(_this.option.text);
    _this.setDuration(_this.option.duration_short);
    _this.setContainer(_this.option.container);
    return _this;
  }

  // static

  _createClass(Toast, [{
    key: 'getDefaultOption',


    // public

    value: function getDefaultOption() {
      return Default;
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      this.text = text;
      return this;
    }
  }, {
    key: 'setDuration',
    value: function setDuration(duration) {
      this.duration = duration;
      return this;
    }
  }, {
    key: 'setContainer',
    value: function setContainer(selector) {
      var elm = _elementUtil2.default.getElement(selector, _elementUtil2.default.getElement('body'));
      if (!elm) {
        elm = document.createElement('DIV');
        elm.classList.add(ClassName.CONTAINER);
        _elementUtil2.default.getElement('body').appendChild(elm);
      }

      this.container = elm;
      return this;
    }
  }, {
    key: 'show',
    value: function show() {
      var _this2 = this;

      var toast = this._makeToast();
      if (this.option.log_enable) this._log(); // log

      toast.classList.add(ClassName.SHOW);
      setTimeout(function () {
        toast.classList.remove(ClassName.SHOW);
        setTimeout(function () {
          if (_this2.option.close_type === 'remove') {
            _this2.container.removeChild(toast); // remove.
          } else {
            _elementUtil2.default.hide(toast); // hide.
          }
        }, _this2.option.transition_duration);
      }, this.duration);
    }

    // private

  }, {
    key: '_makeToast',
    value: function _makeToast() {
      var div = document.createElement('DIV');
      div.textContent = this.text;
      div.classList.add(ClassName.TOAST);
      this.container.appendChild(div);
      return div;
    }
  }, {
    key: '_log',
    value: function _log() {
      var date = new Date().toString();
      console.log('ToastLog[' + date + ']: ' + this.text);
    }
  }], [{
    key: 'makeText',


    /**
     * makeText
     *
     * @param  {String} text
     * @param  {Number} [ duration = null ]
     * @param  {Object} [ option = {} ]
     * @return {Toast}
     */
    value: function makeText(text) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      duration = duration || Default.duration_short;
      var instance = new this(option);
      return instance.setText(text).setDuration(duration);
    }
  }, {
    key: 'name',
    get: function get() {
      return NAME;
    }
  }]);

  return Toast;
}(_cosmosModule2.default);

exports.default = Toast;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
	"name": "cosmos-css",
	"version": "0.11.1",
	"description": "The css framework for personal practice.",
	"main": "dist/module/cosmos.js",
	"sass": "src/scss/style.scss",
	"directories": {
		"test": "test"
	},
	"dependencies": {
		"normalize.css": "^7.0.0",
		"scss-palette": "^0.3.2"
	},
	"devDependencies": {
		"autoprefixer": "^6.7.7",
		"babel-cli": "^6.24.1",
		"babel-eslint": "^7.2.3",
		"babel-loader": "^7.0.0",
		"babel-preset-env": "^1.3.3",
		"concurrently": "^3.4.0",
		"eslint": "^3.19.0",
		"fs-extra": "^2.1.2",
		"node-sass": "^4.5.2",
		"postcss": "^5.2.17",
		"postcss-cli": "^3.2.0",
		"pug": "^2.0.0-beta11",
		"pug-cli": "^1.0.0-alpha6",
		"webpack": "^2.4.1"
	},
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"prebuild": "node ./task/banner.js",
		"build": "npm run dev && npm run production && npm run js-module",
		"dev": "npm run scss && npm run pug && npm run js",
		"watch": "node node_modules/concurrently/src/main \"npm run scss:watch\" \"npm run pug:watch\" \"npm run js:watch\"",
		"production": "npm run scss:min && npm run js:min",
		"scss": "node node_modules/node-sass/bin/node-sass --source-map true src/scss/style.scss dist/css/style.css",
		"postscss": "npm run css",
		"scss:min": "node node_modules/node-sass/bin/node-sass --output-style compressed src/scss/style.scss dist/css/style.min.css",
		"postscss:min": "npm run css:min",
		"scss:watch": "npm run scss -- --watch",
		"pug": "node node_modules/pug-cli --pretty test/views/pages/ --out ./test/html/",
		"pug:watch": "npm run pug -- --watch",
		"js": "node node_modules/webpack/bin/webpack --config ./task/webpack.config.js",
		"js:min": "npm run js -- --optimize-minimize --output-filename script.min.js --devtool false",
		"js:watch": "npm run js -- --watch",
		"prejs-module": "node ./task/remove-dist-module",
		"js-module": "node node_modules/babel-cli/bin/babel src/js -d dist/module",
		"css": "node node_modules/postcss-cli dist/css/style.css --config ./task/postcss.config.js --output dist/css/style.css",
		"css:min": "node node_modules/postcss-cli dist/css/style.min.css --config ./task/postcss.config.js --output dist/css/style.min.css"
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collapse = exports.Toast = exports.Chip = exports.Button = exports.Helper = exports.Color = exports.ElementUtil = exports.Util = undefined;

var _util = __webpack_require__(3);

var _util2 = _interopRequireDefault(_util);

var _color = __webpack_require__(4);

var _color2 = _interopRequireDefault(_color);

var _helper = __webpack_require__(5);

var _helper2 = _interopRequireDefault(_helper);

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _scaffolding = __webpack_require__(13);

var _scaffolding2 = _interopRequireDefault(_scaffolding);

var _button = __webpack_require__(2);

var _button2 = _interopRequireDefault(_button);

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

var _toast = __webpack_require__(17);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize - loading modules.


// Functional modules. - nonloadable
_scaffolding2.default.load();

// Loadable Modules.
/*!
 * cosmos-css - The css framework for personal practice.
 * @version v0.11.1
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */

// Libraries.

_button2.default.load();
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
window.submitConfirm = function (selector) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Are you confirm?';

  _elementUtil2.default.submitConfirm(selector, message);
};

window.showToast = function (text) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  _toast2.default.makeText(text, duration, option).show();
};

window.checkMobileSize = window.isMobileSize = _util2.default.isMobileSize;
window.showMessage = _message2.default.showMessage;
window.modalDialog = _modal2.default.dialog;

// export
var version = __webpack_require__(18).version;
var lib = {
  Util: _util2.default,
  Color: _color2.default,
  ElementUtil: _elementUtil2.default
};
var Cosmos = {
  name: 'cosmos-css',
  version: 'v' + version,
  lib: lib,
  Button: _button2.default,
  Chip: _chip2.default,
  Toast: _toast2.default,
  Collapse: _collapse2.default
};

exports.default = Cosmos;
exports.Util = _util2.default;
exports.ElementUtil = _elementUtil2.default;
exports.Color = _color2.default;
exports.Helper = _helper2.default;
exports.Button = _button2.default;
exports.Chip = _chip2.default;
exports.Toast = _toast2.default;
exports.Collapse = _collapse2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollIt;
/**
 * scrollIt
 * @links https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
 * @links https://docs111.mootools.net/Effects/Fx-Transitions // easing types.
 *
 * @param  {Number|Element} destination
 * @param  {Number}   [duration=200]
 * @param  {String}   [easing='linear']
 * @param  {Function} callback
 * @return {void}
 */
function scrollIt(destination) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  var callback = arguments[3];


  var easings = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };

  var start = window.pageYOffset;
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) callback();
    return;
  }

  function scroll() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) callback();
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map