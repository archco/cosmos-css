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