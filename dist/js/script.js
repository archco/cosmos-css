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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
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

var _changeCase = __webpack_require__(9);

var _changeCase2 = _interopRequireDefault(_changeCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  CosmosModule
*************************************************************/
var CosmosModule = function () {
  function CosmosModule() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CosmosModule);

    this.setOption(option);
    this.subModules = new Map();
    this.subModuleInstances = new Map();
  }

  /**
   * module load
   *
   * @return {CosmosModule}
   */


  _createClass(CosmosModule, [{
    key: 'init',


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
     * @return {CosmosModule} instance
     */

  }, {
    key: 'setOption',
    value: function setOption(option) {
      this.option = Object.assign({}, this.getDefaultOption(), option);
      return this;
    }

    /**
     * getOption
     *
     * @return {Object}
     */

  }, {
    key: 'getOption',
    value: function getOption() {
      return this.option;
    }

    /**
     * getDefaultOption - abstract method.
     *
     * @return {Object}
     */

  }, {
    key: 'getDefaultOption',
    value: function getDefaultOption() {
      return {};
    }

    /**
     * addSubModules
     *
     * @param {Array} modules
     * @return {CosmosModule}
     */

  }, {
    key: 'addSubModules',
    value: function addSubModules(modules) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = modules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mod = _step.value;

          var name = _changeCase2.default.pascalCase(mod.name);
          this.subModules.set(name, mod);
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

      return this;
    }

    /**
     * removeSubModules
     *
     * @param  {Array} modules
     * @return {CosmosModule}
     */

  }, {
    key: 'removeSubModules',
    value: function removeSubModules(modules) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = modules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var mod = _step2.value;

          var name = _changeCase2.default.pascalCase(mod.name);
          this.subModules.delete(name);
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

      return this;
    }

    /**
     * loadSubModules
     *
     * @return {CosmosModule}
     */

  }, {
    key: 'loadSubModules',
    value: function loadSubModules() {
      var _this = this;

      this.subModules.forEach(function (Mod) {
        var instance = new Mod(_this.getSubModuleOption(Mod.name));
        var instanceName = _changeCase2.default.camelCase(Mod.name); // mod's instance name to be camelCase.

        if (Mod.isLoadable) {
          instance.init();
        }

        if (Mod.isFunctional) {
          _this[instanceName] = instance;
        }

        _this.subModuleInstances.set(instanceName, instance);
      });

      return this;
    }

    /**
     * getSubModuleOption
     *
     * @param  {String} modName
     * @return {Object}
     */

  }, {
    key: 'getSubModuleOption',
    value: function getSubModuleOption(modName) {
      var options = this.option.sub_modules;
      modName = _changeCase2.default.snakeCase(modName);

      if (options && options[modName]) {
        return options[modName];
      } else {
        return {};
      }
    }

    /**
     * setSubModuleOption
     *
     * @param {String} modName
     * @param {Object} option
     * @return {CosmosModule}
     */

  }, {
    key: 'setSubModuleOption',
    value: function setSubModuleOption(modName, option) {
      modName = _changeCase2.default.snakeCase(modName);
      this.option.sub_modules[modName] = option;
      return this;
    }

    /**
     * getSubModuleInstance
     *
     * @param  {String} modName
     * @return {Object} instance of sub-module.
     */

  }, {
    key: 'getSubModuleInstance',
    value: function getSubModuleInstance(modName) {
      modName = _changeCase2.default.camelCase(modName);
      return this.subModuleInstances.get(modName);
    }
  }], [{
    key: 'load',
    value: function load() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isLoadable) return;
      var instance = new this(option);
      instance.init();
      return instance;
    }

    /**
     * get defaultOption
     *
     * @return {Object}
     */

  }, {
    key: 'defaultOption',
    get: function get() {
      var instance = new this();
      return instance.getDefaultOption();
    }

    /**
     * is loadable
     *
     * @return {Boolean}
     */

  }, {
    key: 'isLoadable',
    get: function get() {
      return false;
    }
  }, {
    key: 'isFunctional',
    get: function get() {
      return false;
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
  }]);

  return ElementUtil;
}();

exports.default = ElementUtil;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(4)

var NON_WORD_REGEXP = __webpack_require__(36)
var CAMEL_CASE_REGEXP = __webpack_require__(34)
var CAMEL_CASE_UPPER_REGEXP = __webpack_require__(35)

/**
 * Sentence case a string.
 *
 * @param  {string} str
 * @param  {string} locale
 * @param  {string} replacement
 * @return {string}
 */
module.exports = function (str, locale, replacement) {
  if (str == null) {
    return ''
  }

  replacement = typeof replacement !== 'string' ? ' ' : replacement

  function replace (match, index, value) {
    if (index === 0 || index === (value.length - match.length)) {
      return ''
    }

    return replacement
  }

  str = String(str)
    // Support camel case ("camelCase" -> "camel Case").
    .replace(CAMEL_CASE_REGEXP, '$1 $2')
    // Support odd camel case ("CAMELCase" -> "CAMEL Case").
    .replace(CAMEL_CASE_UPPER_REGEXP, '$1 $2')
    // Remove all non-word characters and replace with a single space.
    .replace(NON_WORD_REGEXP, replace)

  // Lower case the entire string.
  return lowerCase(str, locale)
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  az: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  lt: {
    regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
    map: {
      '\u0069\u0307': '\u0049',
      '\u006A\u0307': '\u004A',
      '\u012F\u0307': '\u012E',
      '\u0069\u0307\u0300': '\u00CC',
      '\u0069\u0307\u0301': '\u00CD',
      '\u0069\u0307\u0303': '\u0128'
    }
  }
}

/**
 * Upper case a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  var lang = LANGUAGES[locale]

  str = str == null ? '' : String(str)

  if (lang) {
    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
  }

  return str.toUpperCase()
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /\u0130|\u0049|\u0049\u0307/g,
    map: {
      '\u0130': '\u0069',
      '\u0049': '\u0131',
      '\u0049\u0307': '\u0069'
    }
  },
  az: {
    regexp: /[\u0130]/g,
    map: {
      '\u0130': '\u0069',
      '\u0049': '\u0131',
      '\u0049\u0307': '\u0069'
    }
  },
  lt: {
    regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
    map: {
      '\u0049': '\u0069\u0307',
      '\u004A': '\u006A\u0307',
      '\u012E': '\u012F\u0307',
      '\u00CC': '\u0069\u0307\u0300',
      '\u00CD': '\u0069\u0307\u0301',
      '\u0128': '\u0069\u0307\u0303'
    }
  }
}

/**
 * Lowercase a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  var lang = LANGUAGES[locale]

  str = str == null ? '' : String(str)

  if (lang) {
    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
  }

  return str.toLowerCase()
}


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

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Button
*************************************************************/
var NAME = 'Button';
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

    /**
     * appendBtnClose
     *
     * @param  {Element} element
     * @param  {Function} [ callback = null ]
     * @return {void}
     */
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


    /**
     * addBtnClose
     *
     * @param {Element} element
     * @param {Object} [ option = {} ]
     * @param {Function} [ callback = null ]
     */
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
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }, {
    key: 'isFunctional',
    get: function get() {
      return true;
    }
  }]);

  return Button;
}(_cosmosModule2.default);

exports.default = Button;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scrollIt = __webpack_require__(15);

var _scrollIt2 = _interopRequireDefault(_scrollIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  util
*************************************************************/
var Util = function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: 'locationSearchToObject',


    /**
     * location.search to Object.
     *
     * @return {Object|null}
     */
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
  }]);

  return Util;
}();

Object.assign(Util, {
  scrollIt: _scrollIt2.default
});

exports.default = Util;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(3)

/**
 * Upper case the first character of a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return ''
  }

  str = String(str)

  return upperCase(str.charAt(0), locale) + str.substr(1)
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(3)
var noCase = __webpack_require__(2)

/**
 * Camel case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale, mergeNumbers) {
  var result = noCase(value, locale)

  // Replace periods between numeric entities with an underscore.
  if (!mergeNumbers) {
    result = result.replace(/ (?=\d)/g, '_')
  }

  // Replace spaces between words with an upper cased character.
  return result.replace(/ (.)/g, function (m, $1) {
    return upperCase($1, locale)
  })
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports.no = exports.noCase = __webpack_require__(2)
exports.dot = exports.dotCase = __webpack_require__(29)
exports.swap = exports.swapCase = __webpack_require__(41)
exports.path = exports.pathCase = __webpack_require__(39)
exports.upper = exports.upperCase = __webpack_require__(3)
exports.lower = exports.lowerCase = __webpack_require__(4)
exports.camel = exports.camelCase = __webpack_require__(8)
exports.snake = exports.snakeCase = __webpack_require__(10)
exports.title = exports.titleCase = __webpack_require__(42)
exports.param = exports.paramCase = __webpack_require__(37)
exports.header = exports.headerCase = __webpack_require__(30)
exports.pascal = exports.pascalCase = __webpack_require__(38)
exports.constant = exports.constantCase = __webpack_require__(28)
exports.sentence = exports.sentenceCase = __webpack_require__(40)
exports.isUpper = exports.isUpperCase = __webpack_require__(32)
exports.isLower = exports.isLowerCase = __webpack_require__(31)
exports.ucFirst = exports.upperCaseFirst = __webpack_require__(7)
exports.lcFirst = exports.lowerCaseFirst = __webpack_require__(33)


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)

/**
 * Snake case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '_')
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cosmos = __webpack_require__(13);

var _cosmos2 = _interopRequireDefault(_cosmos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var option = {
  sub_modules: {
    button: {
      close_style: 'icon'
    },
    toast: {
      log_enable: true,
      container_position: 'middle-right',
      close_type: 'hide'
    },
    scroll_to: {
      scroll_duration: 600
    }
  }
};

window.Cosmos = _cosmos2.default;
window.cosmos = new _cosmos2.default(option).init();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = exports.Collapse = exports.Toast = exports.Chip = exports.Button = exports.Color = exports.ElementUtil = exports.Util = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _uaParserJs = __webpack_require__(43);

var _uaParserJs2 = _interopRequireDefault(_uaParserJs);

var _package = __webpack_require__(45);

var _package2 = _interopRequireDefault(_package);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _color = __webpack_require__(14);

var _color2 = _interopRequireDefault(_color);

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _changeCase = __webpack_require__(9);

var _changeCase2 = _interopRequireDefault(_changeCase);

var _scaffolding = __webpack_require__(23);

var _scaffolding2 = _interopRequireDefault(_scaffolding);

var _dropdown = __webpack_require__(18);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _message = __webpack_require__(19);

var _message2 = _interopRequireDefault(_message);

var _modal = __webpack_require__(20);

var _modal2 = _interopRequireDefault(_modal);

var _nav = __webpack_require__(21);

var _nav2 = _interopRequireDefault(_nav);

var _parallax = __webpack_require__(22);

var _parallax2 = _interopRequireDefault(_parallax);

var _scrollTo = __webpack_require__(24);

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _tab = __webpack_require__(26);

var _tab2 = _interopRequireDefault(_tab);

var _simpleCrud = __webpack_require__(25);

var _simpleCrud2 = _interopRequireDefault(_simpleCrud);

var _collapse = __webpack_require__(17);

var _collapse2 = _interopRequireDefault(_collapse);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _chip = __webpack_require__(16);

var _chip2 = _interopRequireDefault(_chip);

var _toast = __webpack_require__(27);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * cosmos-css - The css framework for personal practice.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version v0.12.1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link https://github.com/archco/cosmos-css#readme
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// Libraries.


// Loadable Modules.


// both of loadable and Functional.


// Functional modules. - nonloadable


var Libraries = {
  Util: _util2.default,
  Color: _color2.default,
  ElementUtil: _elementUtil2.default,
  changeCase: _changeCase2.default,
  uaParser: _uaParserJs2.default
};

var Cosmos = function (_CosmosModule) {
  _inherits(Cosmos, _CosmosModule);

  function Cosmos() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Cosmos);

    var _this = _possibleConstructorReturn(this, (Cosmos.__proto__ || Object.getPrototypeOf(Cosmos)).call(this, option));

    _this.lib = Libraries;
    _this.userAgent = (0, _uaParserJs2.default)(navigator.userAgent);
    return _this;
  }

  _createClass(Cosmos, [{
    key: 'init',
    value: function init() {
      this.addSubModules([_scaffolding2.default, _button2.default, _dropdown2.default, _message2.default, _modal2.default, _nav2.default, _parallax2.default, _scrollTo2.default, _tab2.default, _collapse2.default, _simpleCrud2.default, _chip2.default, _toast2.default]);
      this.loadSubModules();
      this.defineGlobalHelperFunctions();
      return this;
    }
  }, {
    key: 'defineGlobalHelperFunctions',
    value: function defineGlobalHelperFunctions() {
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
    }
  }, {
    key: 'version',
    get: function get() {
      return _package2.default.version;
    }
  }], [{
    key: 'version',
    get: function get() {
      return _package2.default.version;
    }
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }, {
    key: 'isFunctional',
    get: function get() {
      return true;
    }
  }, {
    key: 'lib',
    get: function get() {
      return Libraries;
    }
  }]);

  return Cosmos;
}(_cosmosModule2.default);

// For convenience to access functional modules.


Object.assign(Cosmos, {
  Button: _button2.default,
  Chip: _chip2.default,
  Toast: _toast2.default,
  Collapse: _collapse2.default,
  Modal: _modal2.default
});

// export.
exports.default = Cosmos;
exports.Util = _util2.default;
exports.ElementUtil = _elementUtil2.default;
exports.Color = _color2.default;
exports.Button = _button2.default;
exports.Chip = _chip2.default;
exports.Toast = _toast2.default;
exports.Collapse = _collapse2.default;
exports.Modal = _modal2.default;

/***/ }),
/* 14 */
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

    /**
     * color to rgb array.
     *
     * @param  {String|Array} color
     * @return {Array}  [red, green, blue]
     */

  }], [{
    key: 'colorToArray',
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
  }]);

  return Color;
}();

exports.default = Color;

/***/ }),
/* 15 */
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

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Chip
*************************************************************/
var NAME = 'Chip';
var ClassName = {
  CHIP: 'chip'
};
var Selector = {
  CHIP: '.' + ClassName.CHIP
};
var Default = {
  container: '#chip-container',
  tag: 'span', // chip's tagName. span, div, a ...
  close_button: true, // enable close button.
  close_action: 'remove' };

var Chip = function (_CosmosModule) {
  _inherits(Chip, _CosmosModule);

  function Chip() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Chip);

    var _this = _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).call(this, option));

    _this.setContainer(_this.option.container);
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
     * @return {Element} element of new chip.
     */
    value: function add(text) {
      var imgSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var chip = this._createChip(text, imgSrc, data);

      this.container.appendChild(chip);
      return chip;
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

    /**
     * setContainer
     *
     * @param {String|Element} selector
     * @return {Chip}
     */

  }, {
    key: 'setContainer',
    value: function setContainer(selector) {
      this.container = _elementUtil2.default.getElement(selector);
      return this;
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
  }, {
    key: 'isFunctional',
    get: function get() {
      return true;
    }
  }]);

  return Chip;
}(_cosmosModule2.default);

exports.default = Chip;

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
  Collapse
*************************************************************/
var NAME = 'Collapse';
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
  element: null,
  target: '',
  is_collapsed: true };

var Collapse = function (_CosmosModule) {
  _inherits(Collapse, _CosmosModule);

  function Collapse() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Collapse);

    var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, option));

    _this.setElement(_this.option.element);
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
    key: 'name',
    get: function get() {
      return NAME;
    }
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }, {
    key: 'isFunctional',
    get: function get() {
      return true;
    }
  }]);

  return Collapse;
}(_cosmosModule2.default);

exports.default = Collapse;

/***/ }),
/* 18 */
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
var NAME = 'Dropdown';
var ClassName = {
  TOGGLE: 'dropdown-toggle',
  SHOW: 'show'
};
var Selector = {
  DROPDOWN: '.dropdown',
  CONTENT: '.dropdown-content',
  TOGGLE: '.' + ClassName.TOGGLE
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
      var dropdown = _elementUtil2.default.findAncestor(event.currentTarget, Selector.DROPDOWN);
      var content = dropdown.querySelector(Selector.CONTENT);

      if (content) content.classList.toggle(ClassName.SHOW);
    }
  }, {
    key: '_otherClickHandler',
    value: function _otherClickHandler(event) {
      var t = event.target;

      if (t.classList.contains(ClassName.TOGGLE)) {
        // dropdown
        var dropdown = _elementUtil2.default.findAncestor(t, Selector.DROPDOWN);
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
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }]);

  return Dropdown;
}(_cosmosModule2.default);

exports.default = Dropdown;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _button = __webpack_require__(5);

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
var NAME = 'Message';
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
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }]);

  return Message;
}(_cosmosModule2.default);

exports.default = Message;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _button = __webpack_require__(5);

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
var NAME = 'Modal';
var ClassName = {
  MODAL: 'modal',
  CONTENT: 'modal-content',
  HEADER: 'modal-header',
  BODY: 'modal-body',
  FOOTER: 'modal-footer',
  CLOSE: 'btn-close',
  SHOW: 'show'
};
var Selector = {
  MODAL: '.' + ClassName.MODAL,
  TRIGGER: '[data-trigger="modal"]',
  TRIGGER_CLOSE: '[data-trigger="modal-close"]',
  CLOSE: '.' + ClassName.MODAL + ' .' + ClassName.CLOSE,
  CONTENT: '.' + ClassName.CONTENT,
  HEADER: '.' + ClassName.HEADER
};
var ButtonOption = {
  close_style: 'icon'
};
var Default = {
  trigger: '',
  target: '',
  default_title: 'Modal Dialog',
  enable_outside_close: true };

var Modal = function (_CosmosModule) {
  _inherits(Modal, _CosmosModule);

  function Modal() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, option));

    _this.button = new _button2.default(ButtonOption);
    _this.setTrigger(_this.option.trigger);
    _this.setTarget(_this.option.target);
    return _this;
  }

  // static

  _createClass(Modal, [{
    key: 'getDefaultOption',


    // public

    value: function getDefaultOption() {
      return Default;
    }
  }, {
    key: 'init',
    value: function init() {
      // modal trigger button.
      _elementUtil2.default.addListener(Selector.TRIGGER, 'click', this._triggerHandler.bind(this));

      // modal close button.
      _elementUtil2.default.addListener(Selector.CLOSE + ',' + Selector.TRIGGER_CLOSE, 'click', this._closeHandler.bind(this), true);

      if (this.option.enable_outside_close) {
        window.addEventListener('click', this._modalOutsideClickHandler.bind(this));
      }

      // If modal-header does not have close button, add it.
      var modals = document.querySelectorAll(Selector.MODAL);
      if (modals.length) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = modals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var modal = _step.value;

            this._addCloseBtn(modal);
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
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var modal = document.createElement('DIV');
      var content = document.createElement('DIV');
      var header = document.createElement('DIV');
      var h3 = document.createElement('H3');
      var body = document.createElement('DIV');

      // set elements.
      modal.classList.add(ClassName.MODAL);
      content.classList.add(ClassName.CONTENT);
      header.classList.add(ClassName.HEADER);
      h3.textContent = title || this.option.default_title;
      body.classList.add(ClassName.BODY);
      body.textContent = text;

      // assemble.
      header.appendChild(h3);
      content.appendChild(header);
      content.appendChild(body);
      modal.appendChild(content);
      this._addCloseBtn(modal);
      document.body.appendChild(modal);

      // show
      this._modalShow(modal);
    }
  }, {
    key: 'setTrigger',
    value: function setTrigger(selector) {
      if (!selector) return;
      this.trigger = _elementUtil2.default.getElement(selector);
      this.target = this._getTargetFromTrigger(this.trigger);
      return this;
    }
  }, {
    key: 'setTarget',
    value: function setTarget(selector) {
      if (!selector) return;
      this.target = _elementUtil2.default.getElement(selector);
      return this;
    }
  }, {
    key: 'show',
    value: function show() {
      this._modalShow(this.target);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this._modalHide(this.target);
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      if (this._isShown(this.target)) {
        this.hide();
      } else {
        this.show();
      }
    }

    // private

  }, {
    key: '_closeHandler',
    value: function _closeHandler(event) {
      var modal = _elementUtil2.default.findAncestor(event.currentTarget, Selector.MODAL);
      this._modalHide(modal);
      event.stopPropagation();
    }
  }, {
    key: '_triggerHandler',
    value: function _triggerHandler(event) {
      var target = this._getTargetFromTrigger(event.currentTarget);
      if (!target) {
        return;
      }

      this._modalShow(target);
    }
  }, {
    key: '_modalShow',
    value: function _modalShow(modal) {
      modal.classList.add(ClassName.SHOW);
    }
  }, {
    key: '_modalHide',
    value: function _modalHide(modal) {
      modal.classList.remove(ClassName.SHOW);
    }
  }, {
    key: '_isShown',
    value: function _isShown(modal) {
      return modal.classList.contains(ClassName.SHOW);
    }
  }, {
    key: '_addCloseBtn',
    value: function _addCloseBtn(modal) {
      var header = modal.querySelector(Selector.HEADER);
      var close = modal.querySelector(Selector.CLOSE);

      if (!header || close) return;
      this.button.appendBtnClose(header, this._closeHandler.bind(this));
    }
  }, {
    key: '_getTargetFromTrigger',
    value: function _getTargetFromTrigger(trigger) {
      var selector = trigger.getAttribute('href') || trigger.dataset.target || '';
      if (!selector) return;
      return _elementUtil2.default.getElement(selector);
    }
  }, {
    key: '_modalOutsideClickHandler',
    value: function _modalOutsideClickHandler(event) {
      if (event.target.classList.contains(ClassName.MODAL)) {
        this._modalHide(event.target);
      }
    }
  }], [{
    key: 'dialog',
    value: function dialog(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var modal = new Modal();
      modal.makeDialog(text, title);
    }
  }, {
    key: 'name',
    get: function get() {
      return NAME;
    }
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }]);

  return Modal;
}(_cosmosModule2.default);

exports.default = Modal;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(6);

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
var NAME = 'Nav';
var ClassName = {
  CHANGE: 'change',
  HIDE: 'display-hide'
};
var Selector = {
  NAVBAR: '.navbar',
  NAVBAR_BODY: '.navbar .navbar-body',
  NAVBAR_TOGGLE: '.navbar-toggle',
  USE_ACTIVATOR: '.use-activator',
  NAV_LINK: '.nav-link'
};

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
      var btns = _elementUtil2.default.getElements(Selector.NAVBAR_TOGGLE);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = btns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var btn = _step.value;

          this._convertNavbarToggle(btn);
          btn.addEventListener('click', this._toggleHandler);
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

      this.activator(Selector.USE_ACTIVATOR);

      window.addEventListener('resize', this._bodyInitialize.bind(this));
      this._bodyInitialize();
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

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var a = _step2.value;

          if (compareWithLocation(a)) {
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
      var btn = event.currentTarget;
      var navbar = _elementUtil2.default.findAncestor(btn, Selector.NAVBAR);
      var body = navbar.querySelector(Selector.NAVBAR_BODY);
      var isBodyHide = body.classList.contains(ClassName.HIDE);

      if (isBodyHide) {
        btn.classList.add(ClassName.CHANGE);
        body.classList.remove(ClassName.HIDE);
      } else {
        btn.classList.remove(ClassName.CHANGE);
        body.classList.add(ClassName.HIDE);
      }
    }
  }, {
    key: '_showBody',
    value: function _showBody(navbar) {
      var body = navbar.querySelector(Selector.NAVBAR_BODY);
      var btn = navbar.querySelector(Selector.NAVBAR_TOGGLE);

      btn.classList.add(ClassName.CHANGE);
      body.classList.remove(ClassName.HIDE);
    }
  }, {
    key: '_hideBody',
    value: function _hideBody(navbar) {
      var body = navbar.querySelector(Selector.NAVBAR_BODY);
      var btn = navbar.querySelector(Selector.NAVBAR_TOGGLE);

      btn.classList.remove(ClassName.CHANGE);
      body.classList.add(ClassName.HIDE);
    }
  }, {
    key: '_toggleBody',
    value: function _toggleBody(navbar) {
      var isHide = this._isHide(navbar);

      if (isHide) {
        this._showBody(navbar);
      } else {
        this._hideBody(navbar);
      }
    }
  }, {
    key: '_isHide',
    value: function _isHide(navbar) {
      var body = navbar.querySelector(Selector.NAVBAR_BODY);
      return body.classList.contains(ClassName.HIDE);
    }
  }, {
    key: '_convertNavbarToggle',
    value: function _convertNavbarToggle(btn) {
      var navbar = _elementUtil2.default.findAncestor(btn, Selector.NAVBAR);
      var navLink = navbar.querySelector(Selector.NAV_LINK);
      var style = window.getComputedStyle(navLink);
      var bar1 = document.createElement('DIV');
      var bar2 = document.createElement('DIV');
      var bar3 = document.createElement('DIV');
      var span = document.createElement('SPAN');

      [bar1, bar2, bar3].forEach(function (elm, i) {
        elm.classList.add('icon-bar' + (i + 1));
        elm.style.backgroundColor = style.color;
      });
      span.textContent = btn.textContent;
      span.classList.add(ClassName.HIDE);
      btn.innerHTML = '';
      [span, bar1, bar2, bar3].forEach(function (elm) {
        return btn.appendChild(elm);
      });
      return btn;
    }
  }, {
    key: '_bodyInitialize',
    value: function _bodyInitialize() {
      var navbars = document.querySelectorAll(Selector.NAVBAR);
      var isMobileSize = _util2.default.isMobileSize(768);

      if (!navbars.length) return;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = navbars[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var navbar = _step3.value;

          if (!navbar.querySelector(Selector.NAVBAR_BODY)) continue; // temporary.
          var isHide = this._isHide(navbar);

          if (isMobileSize && !isHide) this._hideBody(navbar);
          if (!isMobileSize && isHide) this._showBody(navbar);
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
  }], [{
    key: 'name',


    // static

    get: function get() {
      return NAME;
    }
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }]);

  return Nav;
}(_cosmosModule2.default);

exports.default = Nav;

/***/ }),
/* 22 */
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
var NAME = 'Parallax';
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
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }]);

  return Parallax;
}(_cosmosModule2.default);

exports.default = Parallax;

/***/ }),
/* 23 */
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
var NAME = 'Scaffolding';

var Scaffolding = function (_CosmosModule) {
  _inherits(Scaffolding, _CosmosModule);

  function Scaffolding() {
    _classCallCheck(this, Scaffolding);

    return _possibleConstructorReturn(this, (Scaffolding.__proto__ || Object.getPrototypeOf(Scaffolding)).apply(this, arguments));
  }

  _createClass(Scaffolding, [{
    key: 'init',
    value: function init() {
      // wrap table.responsive
      _elementUtil2.default.wrap('table.responsive', 'table-responsive-wrapper');
    }
  }], [{
    key: 'name',
    get: function get() {
      return NAME;
    }
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }]);

  return Scaffolding;
}(_cosmosModule2.default);

exports.default = Scaffolding;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = __webpack_require__(0);

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _elementUtil = __webpack_require__(1);

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  ScrollTo
*************************************************************/
var NAME = 'ScrollTo';
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
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }]);

  return ScrollTo;
}(_cosmosModule2.default);

exports.default = ScrollTo;

/***/ }),
/* 25 */
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
  SimpleCRUD
*************************************************************/
var NAME = 'SimpleCRUD';
var ClassName = {
  SHOW: 'show'
};
var Selector = {
  ITEM: '.simple-crud-item',
  VIEW: '[class*="simple-crud-view-"]',
  VIEW_READ: '.simple-crud-view-read',
  VIEW_UPDATE: '.simple-crud-view-update',
  VIEW_DELETE: '.simple-crud-view-delete',
  BTN_UPDATE: 'button.simple-crud-update',
  BTN_DELETE: 'button.simple-crud-delete',
  BTN_CANCEL: 'button.simple-crud-cancel'
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
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }]);

  return SimpleCRUD;
}(_cosmosModule2.default);

exports.default = SimpleCRUD;

/***/ }),
/* 26 */
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
var NAME = 'Tab';
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
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }]);

  return Tab;
}(_cosmosModule2.default);

exports.default = Tab;

/***/ }),
/* 27 */
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
var NAME = 'Toast';
var ClassName = {
  TOAST: 'toast',
  SHOW: 'show',
  CONTAINER: 'toast-container'
};
var Default = {
  text: 'no text', // set default text.
  duration: 'short', // toast duration. 'short'|'long'|integer number (ms)
  container_position: '', // nine-positions: top-left.. middle-center.. bottom-right..
  log_enable: true, // Enable console.log() when toast.show().
  close_type: 'remove', // 'hide' or 'remove'
  duration_short: 3000,
  duration_long: 8000,
  container: '.' + ClassName.CONTAINER,
  transition_duration: 600
};

var Toast = function (_CosmosModule) {
  _inherits(Toast, _CosmosModule);

  function Toast() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Toast);

    // set defaults.
    var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, option));

    _this.setText(_this.option.text);
    _this.setDuration(_this.option.duration);
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
      if (typeof duration === 'string') {
        if (duration.toLowerCase() === 'long') {
          duration = this.option.duration_long;
        } else {
          duration = this.option.duration_short;
        }
      }

      this.duration = duration || this.option.duration_short;
      return this;
    }
  }, {
    key: 'setContainer',
    value: function setContainer(selector) {
      var body = _elementUtil2.default.getElement('body');
      var elm = _elementUtil2.default.getElement(selector, body);

      if (!elm) {
        elm = document.createElement('DIV');
        elm.classList.add(ClassName.CONTAINER);
        body.appendChild(elm);
      }

      if (this.option.container_position) {
        elm.classList.add(this.option.container_position);
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

      var instance = new this(option);
      return instance.setText(text).setDuration(duration);
    }
  }, {
    key: 'name',
    get: function get() {
      return NAME;
    }
  }, {
    key: 'isFunctional',
    get: function get() {
      return true;
    }
  }]);

  return Toast;
}(_cosmosModule2.default);

exports.default = Toast;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(3)
var snakeCase = __webpack_require__(10)

/**
 * Constant case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return upperCase(snakeCase(value, locale), locale)
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)

/**
 * Dot case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '.')
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)
var upperCase = __webpack_require__(3)

/**
 * Header case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '-').replace(/^.|-./g, function (m) {
    return upperCase(m, locale)
  })
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(4)

/**
 * Check if a string is lower case.
 *
 * @param  {String}  string
 * @param  {String}  [locale]
 * @return {Boolean}
 */
module.exports = function (string, locale) {
  return lowerCase(string, locale) === string
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(3)

/**
 * Check if a string is upper case.
 *
 * @param  {String}  string
 * @param  {String}  [locale]
 * @return {Boolean}
 */
module.exports = function (string, locale) {
  return upperCase(string, locale) === string
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(4)

/**
 * Lower case the first character of a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return ''
  }

  str = String(str)

  return lowerCase(str.charAt(0), locale) + str.substr(1)
}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = /([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = /([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A]+)([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = /[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)

/**
 * Param case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '-')
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var camelCase = __webpack_require__(8)
var upperCaseFirst = __webpack_require__(7)

/**
 * Pascal case a string.
 *
 * @param  {string}  value
 * @param  {string}  [locale]
 * @param  {boolean} [mergeNumbers]
 * @return {string}
 */
module.exports = function (value, locale, mergeNumbers) {
  return upperCaseFirst(camelCase(value, locale, mergeNumbers), locale)
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)

/**
 * Path case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '/')
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)
var upperCaseFirst = __webpack_require__(7)

/**
 * Sentence case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return upperCaseFirst(noCase(value, locale), locale)
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(3)
var lowerCase = __webpack_require__(4)

/**
 * Swap the case of a string. Manually iterate over every character and check
 * instead of replacing certain characters for better unicode support.
 *
 * @param  {String} str
 * @param  {String} [locale]
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return ''
  }

  var result = ''

  for (var i = 0; i < str.length; i++) {
    var c = str[i]
    var u = upperCase(c, locale)

    result += u === c ? lowerCase(c, locale) : u
  }

  return result
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)
var upperCase = __webpack_require__(3)

/**
 * Title case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale).replace(/^.| ./g, function (m) {
    return upperCase(m, locale)
  })
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * UAParser.js v0.7.12
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.12',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var margedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    margedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    margedRegexes[i] = regexes[i];
                }
            }
            return margedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function () {

            var result, i = 0, j, k, p, q, matches, match, args = arguments;

            // loop through all regexes maps
            while (i < args.length && !matches) {

                var regex = args[i],       // even sequence (0,2,4,..)
                    props = args[i + 1];   // odd sequence (1,3,5,..)

                // construct object barebones
                if (typeof result === UNDEF_TYPE) {
                    result = {};
                    for (p in props) {
                        if (props.hasOwnProperty(p)){
                            q = props[p];
                            if (typeof q === OBJ_TYPE) {
                                result[q[0]] = undefined;
                            } else {
                                result[q] = undefined;
                            }
                        }
                    }
                }

                // try matching uastring with regexes
                j = k = 0;
                while (j < regex.length && !matches) {
                    matches = regex[j++].exec(this.getUA());
                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        result[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        result[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                result[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
            return result;
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS
            ], [NAME, VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
            ], [NAME, VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /android.+samsungbrowser\/([\w\.]+)/i,
            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            /(qqbrowser)[\/\s]?([\w\.]+)/i
                                                                                // QQBrowser
            ], [NAME, VERSION], [

            /(uc\s?browser)[\/\s]?([\w\.]+)/i,
            /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
            /juc.+(ucweb)[\/\s]?([\w\.]+)/i
                                                                                // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS
            ], [VERSION, [NAME, 'Facebook']], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]

            /* /////////////////////
            // Media players BEGIN
            ////////////////////////

            , [

            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
            /(coremedia) v((\d+)[\w\._]+)/i
            ], [NAME, VERSION], [

            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
            ], [NAME, VERSION], [

            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
            ], [NAME, VERSION], [

            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
            ], [NAME, VERSION], [
            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
            ], [NAME, VERSION], [

            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
            ], [[NAME, 'Flip Player'], VERSION], [

            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
            ], [NAME], [

            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                // Gstreamer
            ], [NAME, VERSION], [

            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                // Java/urllib/requests/wget/cURL
            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
            ], [NAME, VERSION], [

            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
            ], [[NAME, /_/g, ' '], VERSION], [

            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                // MPlayer SVN
            ], [NAME, VERSION], [

            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
            ], [NAME, VERSION], [

            /(mplayer)/i,                                                       // MPlayer (no other info)
            /(yourmuze)/i,                                                      // YourMuze
            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
            ], [NAME], [

            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
            ], [NAME, VERSION], [

            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
            ], [NAME, VERSION], [

            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
            ], [NAME, VERSION], [

            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
            /(winamp)\s((\d+)[\w\.-]+)/i,
            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
            ], [NAME, VERSION], [

            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                // inlight radio
            ], [NAME], [

            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                // SoundTap/Totem/Stagefright/Streamium
            ], [NAME, VERSION], [

            /(smp)((\d+)[\d\.]+)/i                                              // SMP
            ], [NAME, VERSION], [

            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
            /(vlc)\/((\d+)[\w\.-]+)/i,
            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
            ], [NAME, VERSION], [

            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
            /(windows-media-player)\/((\d+)[\w\.-]+)/i
            ], [[NAME, /-/g, ' '], VERSION], [

            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                // Windows Media Server
            ], [VERSION, [NAME, 'Windows']], [

            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
            ], [NAME, VERSION], [

            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
            ], [[NAME, 'rad.io'], VERSION]

            //////////////////////
            // Media players END
            ////////////////////*/

        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
            /(zte)-(\w+)*/i,                                                    // ZTE
            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                                                                                // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /(nexus\s6p)/i                                                      // Huawei Nexus 6P
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w+)*/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w+)*/i                                                       // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]+)*/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w+)*/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+(\w+)\s+build\/hm\1/i,                                    // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [

            /android.+a000(1)\s+build/i                                         // OnePlus
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /\s(tablet)[;\/]/i,                                                 // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL]

            /*//////////////////////////
            // TODO: move to string map
            ////////////////////////////

            /(C6603)/i                                                          // Sony Xperia Z C6603
            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
            /(C6903)/i                                                          // Sony Xperia Z 1
            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

            /(R1001)/i                                                          // Oppo R1001
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
            /(X9006)/i                                                          // Oppo Find 7a
            ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
            /(R2001)/i                                                          // Oppo YOYO R2001
            ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
            /(R815)/i                                                           // Oppo Clover R815
            ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
             /(U707)/i                                                          // Oppo Find Way S
            ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [

            /(T3C)/i                                                            // Advan Vandroid T3C
            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

            /(V972M)/i                                                          // ZTE V972M
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [

            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

            /////////////
            // END TODO
            ///////////*/

        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,                  // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
            /linux;.+(sailfish);/i                                              // Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
            /(gnu)\s?([\w\.]+)*/i                                               // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                  // Haiku
            ], [NAME, VERSION],[

            /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i              // iOS
            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
            /(unix)\s?([\w\.]+)*/i                                              // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////


    var UAParser = function (uastring, extensions) {

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var browser = mapper.rgx.apply(this, rgxmap.browser);
            browser.major = util.major(browser.version);
            return browser;
        };
        this.getCPU = function () {
            return mapper.rgx.apply(this, rgxmap.cpu);
        };
        this.getDevice = function () {
            return mapper.rgx.apply(this, rgxmap.device);
        };
        this.getEngine = function () {
            return mapper.rgx.apply(this, rgxmap.engine);
        };
        this.getOS = function () {
            return mapper.rgx.apply(this, rgxmap.os);
        };
        this.getResult = function() {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };


    ///////////
    // Export
    //////////


    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__(44)) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return UAParser;
            }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window.jQuery || window.Zepto;
    if (typeof $ !== UNDEF_TYPE) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {
	"name": "cosmos-css",
	"version": "0.12.1",
	"description": "The css framework for personal practice.",
	"main": "dist/module/cosmos.js",
	"scss": "src/scss/cosmos.scss",
	"directories": {
		"test": "test"
	},
	"dependencies": {
		"change-case": "^3.0.1",
		"normalize.css": "^7.0.0",
		"scss-palette": "^0.3.2",
		"ua-parser-js": "^0.7.12"
	},
	"devDependencies": {
		"autoprefixer": "^6.7.7",
		"babel-cli": "^6.24.1",
		"babel-eslint": "^7.2.3",
		"babel-loader": "^7.0.0",
		"babel-preset-env": "^1.5.2",
		"concurrently": "^3.4.0",
		"cross-env": "^5.0.1",
		"css-loader": "^0.28.4",
		"eslint": "^3.19.0",
		"extract-text-webpack-plugin": "^2.1.2",
		"fs-extra": "^2.1.2",
		"node-sass": "^4.5.3",
		"postcss": "^5.2.17",
		"postcss-cli": "^3.2.0",
		"postcss-loader": "^2.0.6",
		"pug": "^2.0.0-rc.2",
		"pug-cli": "^1.0.0-alpha6",
		"sass-loader": "^6.0.6",
		"uglify-es": "github:mishoo/UglifyJS2#harmony-v3.0.18",
		"watch": "^1.0.2",
		"webpack": "^2.6.1"
	},
	"scripts": {
		"ting": "npm run webpack:watch & npm run pug:watch",
		"test": "echo \"Error: no test specified\" && exit 1",
		"webpack": "cross-env NODE_ENV=development webpack --hide-modules",
		"webpack:watch": "npm run webpack -- --watch",
		"min": "cross-env NODE_ENV=production webpack --hide-modules",
		"prebuild": "node ./task/banner.js",
		"build": "npm run dev && npm run production && npm run js-module",
		"dev": "npm run scss && npm run pug && npm run js",
		"watch": "node node_modules/concurrently/src/main \"npm run webpack:watch\" \"npm run pug:watch\"",
		"production": "npm run scss:min && npm run js:min",
		"scss": "node node_modules/node-sass/bin/node-sass --source-map true src/scss/cosmos.scss dist/css/style.css",
		"postscss": "npm run css",
		"scss:min": "node node_modules/node-sass/bin/node-sass --output-style compressed src/scss/cosmos.scss dist/css/style.min.css",
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);
module.exports = __webpack_require__(12);


/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map