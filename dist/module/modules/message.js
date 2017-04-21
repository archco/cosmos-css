'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = require('../lib/cosmos-module.js');

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = require('../lib/util.js');

var _util2 = _interopRequireDefault(_util);

var _button = require('./button.js');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  message
*************************************************************/
var NAME = 'Cosmos.Message';
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
      _util2.default.eventOnSelector(Selector.CLOSE, 'click', this._closeButtonHandler, true);
    }
  }, {
    key: 'show',
    value: function show(message) {
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Status.INFO;

      var c, b, span;

      // create message box
      c = document.querySelector(Selector.CONTAINER); // container
      b = document.createElement('DIV'); // message box
      span = document.createElement('SPAN'); // message text

      span.textContent = message;
      b.classList.add(ClassName.BOX);
      b.classList.add(status);

      // append child
      b.appendChild(span);
      this.button.appendBtnClose(b, this._closeButtonHandler);
      c.appendChild(b);
    }

    // private

  }, {
    key: '_closeButtonHandler',
    value: function _closeButtonHandler(event) {
      var messageBox = _util2.default.findAncestor(event.currentTarget, Selector.BOX);

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
  }]);

  return Message;
}(_cosmosModule2.default);

exports.default = Message;