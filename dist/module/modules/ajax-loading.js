'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = require('../lib/cosmos-module.js');

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