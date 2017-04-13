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
  Button
*************************************************************/
var Button = function () {
  var NAME = 'Cosmos.Button';
  var ClassName = {
    CLOSE: 'btn-close',
    POSITION_CORNER: 'at-corner',
    POSITION_RIGHT_MIDDLE: 'at-right-middle',
    HIDE: 'display-hide',
    REMOVEABLE: 'removeable',
    HIDEABLE: 'hideable'
  };
  var Selector = {
    CLOSE: '.' + ClassName.CLOSE,
    HAS_ACTION: '.' + ClassName.CLOSE + '.' + ClassName.REMOVEABLE + ', .' + ClassName.CLOSE + '.' + ClassName.HIDEABLE
  };
  // default option.
  var Default = {
    close_init_enable: true,
    close_action: 'remove', // remove | hide
    close_position: 'default', // default | corner | right_middle
    close_style: 'default', // default | icon | circle_default | circle_icon
    close_content: {
      default: '✖',
      icon: '<i class="fa fa-times" aria-hidden="true"></i>'
    }
  };

  var Button = function (_CosmosModule) {
    _inherits(Button, _CosmosModule);

    function Button() {
      _classCallCheck(this, Button);

      return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
      key: 'appendBtnClose',


      // public

      value: function appendBtnClose(element) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (this._hasBtnClose(element)) {
          console.log('already has .btn-close');
          return;
        }
        var btnClose = this._createBtnClose();
        var handler = callback || this._btnCloseClickHandler;

        btnClose.addEventListener('click', handler.bind(this));
        element.appendChild(btnClose);
      }
    }, {
      key: 'init',
      value: function init() {
        // btn-close addEventListener.
        if (this.option.close_init_enable) {
          _util2.default.eventOnSelector(Selector.HAS_ACTION, 'click', this._btnCloseClickHandler.bind(this));
        }
      }
    }, {
      key: 'getDefaultOption',
      value: function getDefaultOption() {
        return Default;
      }

      // private

    }, {
      key: '_btnCloseClickHandler',
      value: function _btnCloseClickHandler(event) {
        var btnClose = event.currentTarget;
        var element = btnClose.parentNode;
        var parent = element.parentNode;
        var action = this._getActionType(btnClose);

        if (action == 'hide') {
          element.classList.add(ClassName.HIDE);
        } else if (action == 'remove') {
          parent.removeChild(element);
        }
        event.preventDefault();
      }
    }, {
      key: '_createBtnClose',
      value: function _createBtnClose() {
        var btnClose = document.createElement('button');

        btnClose.classList.add(ClassName.CLOSE);
        if (this.option.close_position == 'corner') {
          btnClose.classList.add(ClassName.POSITION_CORNER);
        } else if (this.option.close_position == 'right_middle') {
          btnClose.classList.add(ClassName.POSITION_RIGHT_MIDDLE);
        }
        btnClose.innerHTML = this.option.close_content[this.option.close_style];

        return btnClose;
      }
    }, {
      key: '_hasBtnClose',
      value: function _hasBtnClose(element) {
        if (element.querySelector(Selector.CLOSE)) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: '_getActionType',
      value: function _getActionType(btnClose) {
        if (btnClose.classList.contains(ClassName.REMOVEABLE)) {
          return 'remove';
        } else if (btnClose.classList.contains(ClassName.HIDEABLE)) {
          return 'hide';
        } else {
          return this.option.close_action;
        }
      }
    }], [{
      key: 'addBtnClose',
      value: function addBtnClose(element) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        var b = new Button(option);
        b.appendBtnClose(element, callback);
      }
    }, {
      key: 'name',


      // static

      get: function get() {
        return NAME;
      }
    }]);

    return Button;
  }(_cosmosModule2.default);

  return Button;
}();

exports.default = Button;