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
  Parallax
*************************************************************/
var NAME = 'parallax';
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