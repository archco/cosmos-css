'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = require('../lib/cosmos-module.js');

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = require('../lib/util.js');

var _util2 = _interopRequireDefault(_util);

var _elementUtil = require('../lib/element-util.js');

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