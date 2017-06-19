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