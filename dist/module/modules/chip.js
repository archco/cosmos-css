'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = require('../lib/cosmos-module.js');

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _elementUtil = require('../lib/element-util.js');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _button = require('./button.js');

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