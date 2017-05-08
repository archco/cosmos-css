'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scrollIt = require('./utils/scroll-it.js');

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
      if (elements.length === 0) {
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