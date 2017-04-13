'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = require('../lib/cosmos-module.js');

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = require('../lib/util.js');

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