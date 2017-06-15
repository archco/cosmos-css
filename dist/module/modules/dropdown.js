'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = require('../lib/cosmos-module.js');

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _elementUtil = require('../lib/element-util.js');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  dropdown
*************************************************************/
var NAME = 'dropdown';
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